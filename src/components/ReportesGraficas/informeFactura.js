import  React,{ Component } from 'react'
import {StyleSheet,Text,View,ImageBackground,ScrollView,TouchableHighlight,Image, FlatList,TouchableOpacity, Button,TouchableWithoutFeedback} from "react-native";
import {Container,Content,Card,CardItem,Body,Icon, } from 'native-base'
import SearchBar from 'react-native-searchbar';
import CustomHeader from '../layouts/CustomHeader'
import Color from '../../../config/color'
import API from  '../../../utils/requests/apiRequests'
import moment from 'moment' 
import CalendarIcon from 'react-native-vector-icons/AntDesign';
import FolderSearch from 'react-native-vector-icons/AntDesign';//newspaper
import CalendarIconMonth from 'react-native-vector-icons/FontAwesome5'
import Bell from 'react-native-vector-icons/MaterialCommunityIcons';
import CloseIcon from 'react-native-vector-icons/EvilIcons';
import ImagenPruebaFondo from '../../../src/assents/img/imagenPrueba.png'
import ImagenPruebaFondo2 from '../../../src/assents/img/imagenPrueba2.png'
 class InformeFactura extends Component{
    
    constructor(){
        super()
        this.state={
            data:[],
            copyData:[],
            searchBar:false
        }
        this._handleResults = this._handleResults.bind(this);
        
    }
    _handleResults(results) {
        console.log(results)
        console.log(results.length)
        if (results.length <= 0){
            results = this.state.copyData
        }
        this.setState({data:results,
            })
    
      }
      
     componentDidMount = async () =>{
       
        
    }

    filtrar = () => {
      
        this.props.navigation.navigate('MenuGraficasDiasSemanas',{
            data:this.state.data
        });
        
    }
    

    
    
//this.searchBar.show()
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
                
                <CustomHeader  title="Reportes - Validador" porcentaje="16%" 
                back={true}
                search={false} 
                actionEvent={() => this.props.navigation.goBack()} 
                searchAction= {()=> this.setState({
                    searchBar:true
                })}  
                ></CustomHeader> 
                <Content scrollEnabled={false} contentContainerStyle={{flex:1,padding:5,
                justifyContent:"space-between"
                }}
                >
                <TouchableWithoutFeedback  onPress={()=>{this.props.navigation.navigate('MenuGraficasDiasSemanas')}}>
                    <View style={[styles.sombra,styles.wrapper,{padding:10}]}>
                        <CalendarIcon name={"calendar"} color={Color.primary} size={70}/> 
                        <Text style={styles.genre}>Dias/Semanas</Text>
                    </View>
                    
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=>{console.log("HAJAICDIWCNIN")}}>
                    <View style={[styles.sombra,styles.wrapper,{padding:10}]}>
                        <CalendarIconMonth name={"calendar"} color={Color.primary} size={70}/> 
                        <Text style={styles.genre}>Mensual</Text>
                    </View>
                </TouchableWithoutFeedback>
                {/* <TouchableWithoutFeedback onPress={()=>{console.log("HAJAICDIWCNIN")}}>
                    <ImageBackground style={[styles.wrapper,styles.sombra]}
                    source={ImagenPruebaFondo2}
                    
                    >
                        <Text style={styles.genre}>Resumen Consumo</Text>
                    </ImageBackground>
                </TouchableWithoutFeedback> */}
                   
                </Content>
                
            </Container>
        )   
    }
} 

const styles = StyleSheet.create({
    wrapper:{
        height:"49%",
        //borderRadius:10,
        //overflow:'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    genre:{
        color: 'black',
        fontSize: 40,
        fontWeight: 'bold',
        //textShadowColor: 'rgba(0,0,0, .75)',
        /* textShadowOffset:{
            width:2,
            height:2,
        }, */
        //textShadowRadius:10,

    },
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
        backgroundColor: '#fff', 
        elevation: 2,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#ddd',
        borderBottomWidth: 0,
    }
})

export default InformeFactura;
