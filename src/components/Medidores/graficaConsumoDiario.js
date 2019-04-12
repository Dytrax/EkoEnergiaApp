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

import * as actions from '../../actionsCreators/actions'
import {connect} from 'react-redux'

import { ECharts } from 'react-native-echarts-wrapper';
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

 class GraficaConsumoDiario extends Component{
    
    constructor(){
        super()
        this.state={
            data:[],
            copyData:[],
            searchBar:false,
            modalLoading:false
            
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
        this.props.setDateGraficaMedidores({
            date:''
        })
    }

    
    
    calendar = () => {
        /* this.props.setDate({
            data:this.state.data
        }) */
        this.props.navigation.navigate('CalendarioConsumoDiario',{
            data:''
        });
        /* console.log(this.state.data)
        let filtroData = this.state.data.filter(n=>n.dateNotification.slice(0, 10)==="2019-01-25")
        console.log(filtroData)
        this.setState({
            data:filtroData
        }) */
    }

    consultarDatosGraficaConsumoDiario = async () => {
        this.setState({
            grafica:false
        })
        const id = this.props.navigation.getParam('id', 'NO-ID')
        if (this.props.date.date){
            const datosGrafica = await API.getConsumoDiarioGrafica(id,this.props.date.date,this.props.date.date)
            if (datosGrafica[0]===200){
                console.log("Datos Grafica")
                console.log(datosGrafica[1])
                const dataConsumo =  datosGrafica[1].consumption
                let energia = dataConsumo.filter(s=>s.reactive === 0)
                let energiaActiva = dataConsumo.filter(s=>s.reactive === 1)
                console.log("Energia")
                console.log(energia)
                console.log("Energia Reactive")
                console.log(energiaActiva)

                this.setState({
                    energia:energia,
                    energiaActiva:energiaActiva,
                    grafica:true,
                    option : {
                        title: {
                            text: ''
                        },
                        width:WIDTH-100,
                        //alignSelf:"center",
                
                        tooltip: {
                            trigger: 'axis'
                        },
                        xAxis: {
                            data: energia.map(function (item) {
                            //   console.log(item.date.slice(10,18))
                                console.log(item.date,moment(item.date).format('hh:mm:ss'))
                                return moment(item.date).utc().format('hh:mm:ss a');
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
                                //saveAsImage: {}
                            }
                        },
                        dataZoom: [{
                            type: 'inside',
                            //start: 0,
                            //end: 10
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
                        /* visualMap: {
                            top: 10,
                            right: 10,
                            pieces: [{
                                gt: 0,
                                lte: 50,
                                color: '#096'
                            }, {
                                gt: 50,
                                lte: 100,
                                color: '#ffde33'
                            }, {
                                gt: 100,
                                lte: 150,
                                color: '#ff9933'
                            }, {
                                gt: 150,
                                lte: 200,
                                color: '#cc0033'
                            }, {
                                gt: 200,
                                lte: 300,
                                color: '#660099'
                            }, {
                                gt: 300,
                                color: '#7e0023'
                            }],
                            outOfRange: {
                                color: '#999'
                            }
                        }, */
                        series: [{
                            name: 'Activa',
                            type: 'line',
                            data: energia.map(function (item) {
                                return item.value;
                            }),
                            /* markLine: {
                                silent: true,
                                data: [{
                                    yAxis: 50
                                }, {
                                    yAxis: 100
                                }, {
                                    yAxis: 150
                                }, {
                                    yAxis: 200
                                }, {
                                    yAxis: 300
                                }]
                            } */
                        },
                        {
                            name: 'Reactiva',
                            type: 'line',
                            data: energiaActiva.map(function (item) {
                                return item.value;
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

                <View style={[{padding:10,flexDirection:"row",marginBottom:10,marginTop:10,backgroundColor:"white"},styles.sombra]}>
                        <View style={{flex:1}}>
                            <CalendarIcon name="calendar" size={25} color={Color.second} onPress={()=>{this.calendar()}}   />

                        </View>
                        <View style={{flex:5,justifyContent:"center",alignItems:"center"}}>
                            <Text >{this.props.date.date}</Text>
                        </View>
                        
                        <View style={{flex:1,alignSelf:"flex-end"}}>
                            {/* <CloseIcon name="close" size={25} color={Color.second} onPress={()=>{this.eliminarFiltro()}}/> */}

                        </View>

                    </View>
                    <ButtonCircle text={"Consultar"} size={"50%"} action={()=>{this.consultarDatosGraficaConsumoDiario()}}
                                ></ButtonCircle>

                    {
                    this.state.grafica ? (
                        <View style={{flex:1,width:"100%",alignSelf:"center"}}>
                            <ECharts option={this.state.option}  ></ECharts>
                        </View>
                       
                        
                    ):(<View style={{flex:1,width:"100%",justifyContent:"center"}}>
                        <ActivityIndicator size="large" />
                        </View>)
                }
                
                    
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
const mapStateToProps = state => {
    return {
        date : state.calendarConsumoDiario,
    }
}

export default connect(mapStateToProps,actions)(GraficaConsumoDiario); 





