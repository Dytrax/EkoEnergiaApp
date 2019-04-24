import  React,{ Component } from 'react'
import {StyleSheet,Text,View,ScrollView,TouchableHighlight,Image, Dimensions,TouchableOpacity, Button,ActivityIndicator,Alert} from "react-native";
import {Container,Content,Card,CardItem,Body,Icon, } from 'native-base'
import SearchBar from 'react-native-searchbar';
import CustomHeader from '../layouts/CustomHeader'
import Color from '../../../config/color'
import CalendarIcon from 'react-native-vector-icons/AntDesign';

import API from  '../../../utils/requests/apiRequests'
import Location from 'react-native-vector-icons/EvilIcons';
import Loader from '../loader'
import moment from "moment";
import ButtonCircle from '../buttonCircle'
import Medidores from "react-native-vector-icons/Entypo";

import * as actions from '../../actionsCreators/actions'
import {connect} from 'react-redux'
import PickerModal from '../picker'

import { ECharts } from 'react-native-echarts-wrapper';
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const meses = {
    1:"Enero",
    2:"Febrero",
    3:"Marzo",
    4:"Abril",
    5:"Mayo",
    6:"Junio",
    7:"Julio",
    8:"Agosto",
    9:"Septiembre",
    10:"Octubre",
    11:"Noviembre",
    12:"Diciembre"
}
const mesesNumero = {
    1:"01",
    2:"02",
    3:"03",
    4:"04",
    5:"05",
    6:"06",
    7:"07",
    8:"08",
    9:"09",
    10:"10",
    11:"11",
    12:"12"
}

const list_number_months = [1,2,3,4,5,6,7,8,9,10,11,12]
 class ReporteGrafica extends Component{
    
    constructor(){
        super()
        this.state={
            data:[],
            copyData:[],
            searchBar:false,
            modalLoading:false,
            modal:false,
            year:"",
            selectMonth:1,
            lista_binaria_meses:[],
            consultando:false
        }
        this._handleResults = this._handleResults.bind(this);
        
    }
    
    _handleResults(results) {
        console.log(results)
        console.log(results.length)
        if (results.length <= 0){
            results = this.state.copyData
        }
        this.setState({data:results})
    
      }
      
     componentDidMount = async () =>{
        this.props.setMedidor({
            //id:item.id,
            medidor:"",
            //contract:item.contract
        })
        let medidores = await API.getListMedidores()
        medidores = medidores[1].map(s=>{
            return {
                id:s.id,
                name:s.name,
                contract:s.contract.number,
                
            }
        })
        console.log("Data Medidores 2")
        console.log(medidores)
        var actual_month = moment().month() + 1;
        var lista_binaria_meses = []
        for (i in list_number_months) {
            if (list_number_months[i] <= actual_month){
                lista_binaria_meses[i] = true
            }else{
                lista_binaria_meses[i] = false
            }
        }
        
        var year2 = moment().year();
        this.setState({
            year:year2,
            lista_binaria_meses:lista_binaria_meses,
            copy_lista_binaria_meses:lista_binaria_meses,
            medidores:medidores,
        })
    }

    
    
    calendar = () => {

        this.props.navigation.navigate('CalendarioConsumoDiario',{
            data:''
        });
   
    }

    consultarDatosGrafica = async () => {
        let numero_activa = this.props.navigation.getParam("activa","no-activa")
        let numero_reactiva = this.props.navigation.getParam("reactiva","no-reactiva")

        
        
        
        
        
        if (this.props.medidores.id){
            this.setState({
                grafica:false,
                consultando:true
            })
            let datos = await API.getDatosGraficasReportes(this.state.year+"-"+mesesNumero[this.state.selectMonth]+"-31 23:00:00",this.state.year+"-"+mesesNumero[this.state.selectMonth]+"-01 00:00:00",this.props.medidores.id)
            console.log(datos)
            console.log("Fecha")
            console.log(this.state.year+"-"+mesesNumero[this.state.selectMonth])
            let mes = mesesNumero[this.state.selectMonth]
            if(datos[0]===200){
                let resumen_activa = datos[1].reporte.resumen_activa
                let resumen_reactiva = datos[1].reporte.resumen_reactiva
                let ejeX = []
                let ejeYactiva = []
                let ejeYreactiva = []
                resumen_activa.map(function (item) {
                    let dataFecha = item[1].split("-");
                    if (dataFecha[1]===mes){
                        ejeX.push(item[1])
                        ejeYactiva.push(item[numero_activa])
                    }
                    //return moment(item.date).utc().format('hh:mm:ss a');
                })
                resumen_reactiva.map(function (item) {
                    let dataFecha = item[1].split("-");
                    if (dataFecha[1]===mes){
                        
                        ejeYreactiva.push(item[numero_reactiva])
                    }
                    //return moment(item.date).utc().format('hh:mm:ss a');
                })
                console.log(ejeYactiva)
                console.log(ejeYreactiva)
                /* console.log("resumen_activa")
                console.log(resumen_activa) */
                
            

                this.setState({
                    consultando:false,
                    grafica:true,
                    option : {
                        title: {
                            text: ''
                        },
                        width:WIDTH-100,
                        
                
                        tooltip: {
                            trigger: 'axis'
                        },
                        xAxis: {
                            data: ejeX.map(function (item) {
                            
                                
                                return item;
                            }),
                            name:"Horas",
                            nameLocation:'middle',
                            nameGap:30,
                            splitLine: {
                                show: false
                            }
                        },
                        yAxis: {
                            splitLine: {
                                show: false
                            },
                            name:"kWh",
                            nameLocation:'middle',
                            
                        },
                        toolbox: {
                            left: 'center',
                            feature: {
                                dataZoom: {
                                    yAxisIndex: 'none'
                                },
                                restore: {},
                                
                            }
                        },
                        dataZoom: [{
                            type: 'inside',
                           
                        }, {
                            start: 0,
                            end: 10,
                            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                            handleSize: '80%',
                            handleStyle: {
                                color: '#fff',
                                shadowBlur: 3,
                                shadowColor: 'rgba(0, 0, 0, 0.6)',
                                shadowOffsetX: 2,
                                shadowOffsetY: 2
                            }
                        }],
                        
                        series: [{
                            name: 'Activa',
                            type: 'line',
                            data: ejeYactiva.map(function (item) {
                                return item
                            }),
                           
                        },
                        {
                            name: 'Reactiva',
                            type: 'line',
                            data: ejeYreactiva.map(function (item) {
                                return item;
                            }),
                            
                        },
                    ],
                    color:['#33C1D7','#932A8E']
                
                    
                    }
                })
            }
            
        }else{
            Alert.alert(
                'Error',
                'Debes Seleccionar una fecha para realizar la consulta',
                [
                  {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                {cancelable: false},
              );
        }
       
    }

//Methods for the calendar Picker

stateChange = (stateToChange, value) => {
    this.state[stateToChange] = value;
    console.log(this.state)
};

addYear = () =>{
    var actual_year = moment().year();
    if (actual_year != this.state.year + 1) {
        var lista_binaria_meses = [true,true,true,true,true,true,true,true,true,true,true,true]
        this.setState({
            lista_binaria_meses: lista_binaria_meses
        })
    }else{
        this.setState({
            lista_binaria_meses:this.state.copy_lista_binaria_meses

        })

    }
    this.setState({
        year:this.state.year+1
    })
}
removeYear = () =>{
    var actual_year = moment().year();
    if (actual_year != this.state.year - 1) {
        var lista_binaria_meses = [true,true,true,true,true,true,true,true,true,true,true,true]
        this.setState({
            lista_binaria_meses: lista_binaria_meses
        })
    }else{
        this.setState({
            lista_binaria_meses:this.state.copy_lista_binaria_meses

        })

    }
    this.setState({
        year:this.state.year-1
    })
}

setVisibleModal = (modalState) => {
    this.setState({
        modal:modalState
    })
}

seleccionarMedidor = () =>{
    this.props.navigation.navigate('SeleccionarMedidoresReportes', {
        medidores: this.state.medidores
      });

      
}
   

    
   
    render(){
        
        return ( 
            <Container style={{backgroundColor:"rgb(255,255,255)"}}>
                {
                    this.state.searchBar ? (
                        <SearchBar
                            ref={(ref) => this.searchBar = ref}
                            data={this.state.copyData}
                            handleResults={this._handleResults}
                            showOnLoad
                            placeholder={"Buscar"}
                            onBack = {()=> {console.log("Atras presionado")
                            //this.searchBar.hide()
                            this.setState({data:this.state.copyData,
                            searchBar:false})}}
                            />
                    ): (
                        null
                    )
                }
                
                <CustomHeader  title="Consumo Diario" porcentaje="16%" 
                back={true}
                search={false}  
                actionEvent={() => this.props.navigation.goBack()} 
                searchAction= {()=> this.setState({
                    searchBar:true
                })}  
                ></CustomHeader>
                <Content contentContainerStyle={{flex:1,padding:10
                }}
                >
                <View style={{flexDirection:"row"}}>
                <View style={[{padding:10,flexDirection:"row",marginBottom:10,marginTop:10,backgroundColor:"white",flex:1},styles.sombra]}>
                        <View style={{flex:1}}>
                            <Medidores name={"classic-computer"} size={22} color={Color.second} onPress={()=>{this.seleccionarMedidor()}}/>

                        </View>
                        <View style={{flex:5,justifyContent:"center",alignItems:"center"}}>
                            {
                                    !this.props.medidores.id ? (
                                        <Text style={{color:'rgb(133,133,133)'}}>Selecciona el medidor *</Text>
                                    ): (
                                        <Text style={{color:'rgb(133,133,133)'}}>{`${this.props.medidores.medidor}`}</Text>
                                    )
                                }
                            {/* {
                                    !this.state.fecha ? (
                                        <Text style={{color:'rgb(133,133,133)'}}>Selecciona el medidor *</Text>
                                    ): (
                                        <Text style={{color:'rgb(133,133,133)'}}>{`${meses[this.state.selectMonth]} de ${this.state.year}`}</Text>
                                    )
                                } */}
                        </View>
                        
                        

                    </View>
                    <View style={{flex:0.1}}>

                    </View>

                    <View style={[{padding:10,flexDirection:"row",marginBottom:10,marginTop:10,backgroundColor:"white",flex:1},styles.sombra]}>
                        <View style={{flex:1}}>
                            <CalendarIcon name="calendar" size={25} color={Color.second} onPress={()=>{this.setState({
                                modal:true
                            })}}   />

                        </View>
                        <View style={{flex:5,justifyContent:"center",alignItems:"center"}}>
                            {
                                    !this.state.fecha ? (
                                        <Text style={{color:'rgb(133,133,133)'}}>Selecciona la fecha *</Text>
                                    ): (
                                        <Text style={{color:'rgb(133,133,133)'}}>{`${meses[this.state.selectMonth]} de ${this.state.year}`}</Text>
                                    )
                                }
                        </View>
                        
                        

                    </View>
                </View>
                {/* <View style={[{padding:10,flexDirection:"row",marginBottom:10,marginTop:10,backgroundColor:"white"},styles.sombra]}>
                        <View style={{flex:1}}>
                            <CalendarIcon name="calendar" size={25} color={Color.second} onPress={()=>{this.setState({
                                modal:true
                            })}}   />

                        </View>
                        <View style={{flex:5,justifyContent:"center",alignItems:"center"}}>
                            {
                                    !this.state.fecha ? (
                                        <Text style={{color:'rgb(133,133,133)'}}>Selecciona la fecha *</Text>
                                    ): (
                                        <Text style={{color:'rgb(133,133,133)'}}>{`${meses[this.state.selectMonth]} de ${this.state.year}`}</Text>
                                    )
                                }
                        </View>
                        
                        <View style={{flex:1,alignSelf:"flex-end"}}>

                        </View>

                    </View> */}
                    <ButtonCircle text={"Consultar"} size={"50%"} action={()=>{this.consultarDatosGrafica()}}
                                ></ButtonCircle>

                    {
                    this.state.grafica ? (
                        <View style={{flex:1,width:"100%",alignSelf:"center"}}>
                            <ECharts option={this.state.option}  ></ECharts>
                        </View>
                       
                        
                    ):(
                        
                             this.state.consultando ? (
                                <View style={{flex:1,width:"100%",justifyContent:"center",alignItems:"center"}}>
                                    <ActivityIndicator size="large" />
                                </View>
                            ) : (
                                <View style={{flex:1,width:"100%",justifyContent:"center",alignItems:"center"}}>
                                
                                <Text>Consultar para visualizar la gráfica</Text>
                                </View>)
                            
                    
                    )
                        
                        
                        
                        
                        
                }

                <PickerModal modal={this.state.modal} stateChange={this.stateChange}
                            setVisibleModal={this.setVisibleModal} selectMonth={this.state.selectMonth}
                            year={this.state.year} addYear={this.addYear} removeYear={this.removeYear}  
                            binaryMonthList={this.state.lista_binaria_meses}
                        />
                
                    
                </Content>
                
            </Container>
        )   
    }
} 

const styles = StyleSheet.create({
    title:{
      color:Color.primary,fontSize: 16,
      fontWeight: 'bold',
    },
    body:{
      fontSize: 16,
      fontWeight: 'bold',
    },
    info:{
      color:'blue',
      fontSize: 16,
      fontWeight: 'bold',
    },
    warning:{
    color:'red',
    fontSize: 16,
    fontWeight: 'bold',
    },
    warning:{
    color:'green',
    fontSize: 16,
    fontWeight: 'bold',
    },
    buttonfloat:{
        width: 50,  
        height: 50,   
        borderRadius: 30,                     
        position: 'absolute',                                          
        bottom: 30,                                                    
        right: 30, 
    },
    sombra:{
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        //backgroundColor: '#fff', 
        elevation: 2,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        /* shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 1, */
    }
})
/* const mapStateToProps = state => {
    return {
        date : state.calendarConsumoDiario,
    }
} */

const mapStateToProps = state => {
    return {
        medidores : state.medidor,
    }
}

export default connect(mapStateToProps,actions)(ReporteGrafica); 



