import  React,{ Component } from 'react'
import {StyleSheet,Text,View,ScrollView,TouchableHighlight,Image, FlatList,TouchableOpacity, Button} from "react-native";
import {Container,Content,Card,CardItem,Body,Icon, } from 'native-base'
import SearchBar from 'react-native-searchbar';
import CustomHeader from '../layouts/CustomHeader'
import Color from '../../../config/color'
import API from  '../../../utils/requests/apiRequests'
import moment from "moment";
import PickerModal from '../picker'
import {connect} from 'react-redux'
import * as actions from '../../actionsCreators/actions'
import ButtonCircle from '../buttonCircle'
import Loader from '../loader'
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
 class TarifasAplicadas extends Component{
    
    constructor(){
        super()
        this.state={
            data:[],
            copyData:[],
            searchBar:false,
            modal:false,
            selectMonth:1,
            year:"",
            medidores:"",
            fecha:false,
            modalLoading:false,
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
        let medidores = await API.getListMedidores()
        console.log("Data Medidores")
        console.log(medidores)
        medidores = medidores[1].map(s=>{
            return {
                id:s.id,
                name:s.name,
                contract:s.contract.number
            }
        })
        console.log("Data Medidores 2")
        console.log(medidores)
        var year2 = moment().year();
        this.setState({
            year:year2,
            medidores:medidores
        })
    
    }

    
    

    setVisibleModal = (modalState) => {
        this.setState({
            modal:modalState
        })
    }
    stateChange = (stateToChange, value) => {
        this.state[stateToChange] = value;
        console.log(this.state)
    };
    
    prueba = () =>{
        var year1 = moment().format('YYYY');
        var year2 = moment().year();

        console.log('using format("YYYY") : ',year1);
        console.log('using year(): ',year2);

        // using javascript 

        var year3 = new Date().getFullYear();
        console.log('using javascript :',year3);
    }
    addYear = () =>{
        this.setState({
            year:this.state.year+1
        })
    }
    removeYear = () =>{
        this.setState({
            year:this.state.year-1
        })
    }


    
    seleccionarMedidor = () =>{
        this.props.navigation.navigate('Medidores', {
            medidores: this.state.medidores
          });
    }

    consultarTarifas = async () =>{
        this.setState({
            modalLoading:true
        })
        let consultaTarifasAplicadas = await API.getTarifasAplicadas(
            this.props.medidores.contract,
            "19",
            "126",
            "0"+this.state.selectMonth+"/"+this.state.year

        )
        
        if (consultaTarifasAplicadas[0]===200){
            this.props.navigation.navigate('ConsultaTA', {
                data: consultaTarifasAplicadas[1].data
              });
              this.setState({
                modalLoading:false
            })
            console.log("consultaTarifasAplicadas")
            console.log(consultaTarifasAplicadas)
            /* this.setState({
                modalLoading:false
            }) */   
        }
        /* console.log("consultaTarifasAplicadas")
        console.log(consultaTarifasAplicadas) */
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
                
                <CustomHeader  title="Tarifas Aplicadas" porcentaje="16%" 
                search={false} 
                actionEvent={() => this.props.navigation.openDrawer()} 
                searchAction= {()=> this.setState({
                    searchBar:true
                })}  
                ></CustomHeader>
                <Content contentContainerStyle={{flex:1,padding:5
                }}
                >

                    <TouchableOpacity onPress={()=>{this.seleccionarMedidor()}}>
                    <View style={{flexDirection:"row",backgroundColor:"white",marginTop:15,
                    marginBottom:15,padding:10,borderBottomWidth:0.7,borderTopWidth:0.7,
                    borderColor:'rgb(143,143,143)'}}>
                        <View style={{alignSelf:"center",width:"70%"}}>
                            <View style={{}}>
                                <Text style={{color:'rgb(99,99,99)',fontWeight:"bold", fontSize:16,}}>MEDIDOR</Text>
                            </View>
                            <View style={{marginTop:10}}>
                                {
                                    !this.props.medidores.id ? (
                                        <Text style={{color:'rgb(133,133,133)'}}>Selecciona el medidor *</Text>
                                    ): (
                                        <Text style={{color:'rgb(133,133,133)'}}>{`${this.props.medidores.medidor}`}</Text>
                                    )
                                }
                                
                            </View>
                        </View>
                        <View style={{justifyContent:"center",alignItems:"center",width:"30%"}}>
                            
                            <Icon  name='ios-arrow-forward' style={{color:Color.primary}}/>
                            
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{this.setState({
                            modal:true
                        })}}>
                    <View style={{flexDirection:"row",backgroundColor:"white",
                    marginBottom:15,padding:10,borderBottomWidth:0.7,borderTopWidth:0.7,
                    borderColor:'rgb(143,143,143)'}}>
                        <View style={{alignSelf:"center",width:"70%"}}>
                            <View style={{}}>
                                <Text style={{color:'rgb(99,99,99)',fontWeight:"bold", fontSize:16,}}>FECHA</Text>
                            </View>
                            <View style={{marginTop:10}}>
                                {
                                    !this.state.fecha ? (
                                        <Text style={{color:'rgb(133,133,133)'}}>Selecciona la fecha *</Text>
                                    ): (
                                        <Text style={{color:'rgb(133,133,133)'}}>{`${meses[this.state.selectMonth]} de ${this.state.year}`}</Text>
                                    )
                                }
                                
                            </View>
                        </View>
                        <View style={{justifyContent:"center",alignItems:"center",width:"30%"}}>
                            
                            <Icon  name='ios-arrow-down' style={{color:Color.primary}}/>
                            
                        </View>
                    </View>
                </TouchableOpacity>

                <ButtonCircle text={"Consultar"} size={"50%"} action={()=>{this.consultarTarifas()}}
                                ></ButtonCircle>
                    
                        <PickerModal modal={this.state.modal} stateChange={this.stateChange}
                            setVisibleModal={this.setVisibleModal} selectMonth={this.state.selectMonth}
                            year={this.state.year} addYear={this.addYear} removeYear={this.removeYear}
                        />
                        <Loader loading={this.state.modalLoading} title={"Consultando..."}/>
                        
                    
                    
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
        borderRadius: 2,
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
        medidores : state.medidor,
    }
}
export default connect(mapStateToProps,actions)(TarifasAplicadas); 



