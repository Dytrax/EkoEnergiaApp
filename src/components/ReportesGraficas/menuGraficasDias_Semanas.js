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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CloseIcon from 'react-native-vector-icons/EvilIcons';
import Next from 'react-native-vector-icons/Ionicons';
import Percentage from 'react-native-vector-icons/FontAwesome5';


import ColorAzulImagen from '../../assents/img/imagenColorAzul.png'
import ColorAzulClaro from '../../assents/img/20639B.png'
import Color3caea3 from '../../assents/img/3CAEA3.png'
import Colored553b from '../../assents/img/ED553B.png'
import Colorf6d55c from '../../assents/img/F6D55C.png'
import Color33C1D7 from '../../assents/img/33C1D7.png'


 class menuGraficasDias_Semanas extends Component{
    
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
      
        this.props.navigation.navigate('Calendar',{
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
                
                <CustomHeader  title="Graficos" porcentaje="16%" 
                back={true}
                search={false} 
                actionEvent={() => this.props.navigation.goBack()} 
                searchAction= {()=> this.setState({
                    searchBar:true
                })}  
                ></CustomHeader> 
                <Content scrollEnabled={false} contentContainerStyle={{flex:1,padding:5,
                
                }}
                
                >
                <TouchableWithoutFeedback onPress={()=>{ this.props.navigation.navigate('GraficasReportesDiasSemanas',{
                    activa:5,
                    reactiva:4
                })}}>
                <View style={[{flexDirection:"row",height:"10%",marginBottom:10},styles.sombra]}>
                    <ImageBackground style={[{width:10,marginRight:10},styles.wrapper]}

                    source={Color33C1D7}
                    
                    >
                        
                    </ImageBackground>
                    <View style={{justifyContent:"center",alignItems:"center",marginRight:20,width:"10%"}}>
                        <Percentage name={"calendar-day"} color={"#33C1D7"} size={30}/> 

                    </View>
                    <View style={{justifyContent:"center",alignItems:"center"}}>
                        <Text>Consumo día</Text>
                    </View>

                    <View style={{flex:1,justifyContent:"center",alignItems:"flex-end",marginRight:10}}>
                        <Next name="ios-arrow-forward" size={40} color={Color.primary}/>
                    </View>
                    
                </View>
                </TouchableWithoutFeedback>
                <View style={[{flexDirection:"row",height:"10%",marginBottom:10},styles.sombra]}>
                    <ImageBackground style={[{width:10,marginRight:10},styles.wrapper]}

                    source={ColorAzulImagen}
                    
                    >
                        
                    </ImageBackground>
                    <View style={{justifyContent:"center",alignItems:"center",marginRight:20,width:"10%"}}>
                        <CalendarIcon name={"calendar"} color={"#173F5F"} size={30}/> 

                    </View>
                    <View style={{justifyContent:"center",alignItems:"center"}}>
                        <Text>Consumo Diario Max</Text>
                    </View>

                    <View style={{flex:1,justifyContent:"center",alignItems:"flex-end",marginRight:10}}>
                        <Next name="ios-arrow-forward" size={40} color={Color.primary}/>
                    </View>
                    
                </View>

                <View style={[{flexDirection:"row",height:"10%",marginBottom:10},styles.sombra]}>
                    <ImageBackground style={[{width:10,marginRight:10},styles.wrapper]}

                    source={ColorAzulClaro}
                    
                    >
                        
                    </ImageBackground>
                    <View style={{justifyContent:"center",alignItems:"center",marginRight:20,width:"10%"}}>
                        <Percentage name={"percentage"} color={"#20639B"} size={30}/> 
                    </View>
                    <View style={{justifyContent:"center",alignItems:"center"}}>
                        <Text>CONSUMO / DMAX DÍA (%)</Text>
                    </View>
                    <View style={{flex:1,justifyContent:"center",alignItems:"flex-end",marginRight:10}}>
                        <Next name="ios-arrow-forward" size={40} color={Color.primary}/>
                    </View>
                </View>

                <View style={[{flexDirection:"row",height:"10%",marginBottom:10},styles.sombra]}>
                    <ImageBackground style={[{width:10,marginRight:10},styles.wrapper]}

                    source={Color3caea3}
                    
                    >
                        
                    </ImageBackground>
                    <View style={{justifyContent:"center",alignItems:"center",marginRight:20,width:"10%"}}>
                        <Percentage name={"percentage"} color={"#3caea3"} size={30}/> 
                    </View>
                    <View style={{justifyContent:"center",alignItems:"center"}}>
                        <Text>DMAX / DMAX DÍA (%)</Text>
                    </View>
                    <View style={{flex:1,justifyContent:"center",alignItems:"flex-end",marginRight:10}}>
                        <Next name="ios-arrow-forward" size={40} color={Color.primary}/>
                    </View>
                </View>
                <View style={[{flexDirection:"row",height:"10%",marginBottom:10},styles.sombra]}>
                    <ImageBackground style={[{width:10,marginRight:10},styles.wrapper]}

                    source={Colored553b}
                    
                    >
                        
                    </ImageBackground>
                    
                    <View style={{justifyContent:"center",alignItems:"center",marginRight:20,width:"10%"}}>
                        <MaterialCommunityIcons name={"format-list-checks"} color={"#ed553b"} size={30}/> 
                    </View>
                    <View style={{justifyContent:"center",alignItems:"center"}}>
                        <Text>CONSUMO / DIA DE LA SEMANA</Text>
                    </View>
                    <View style={{flex:1,justifyContent:"center",alignItems:"flex-end",marginRight:10}}>
                        <Next name="ios-arrow-forward" size={40} color={Color.primary}/>
                    </View>
                </View>
                <View style={[{flexDirection:"row",height:"10%",marginBottom:10},styles.sombra]}>
                    <ImageBackground style={[{width:10,marginRight:10},styles.wrapper]}

                    source={Colorf6d55c}
                    
                    >
                        
                    </ImageBackground>
                    <View style={{justifyContent:"center",alignItems:"center",marginRight:20,width:"10%"}}>
                        <MaterialCommunityIcons name={"format-list-numbered"} color={"#f6d55c"} size={30}/> 
                    </View>
                    <View style={{justifyContent:"center",alignItems:"center"}}>
                        <Text>DMAX / DMAX DIA DE LA SEMANA</Text>
                    </View>
                    <View style={{flex:1,justifyContent:"center",alignItems:"flex-end",marginRight:10}}>
                        <Next name="ios-arrow-forward" size={40} color={Color.primary}/>
                    </View>
                </View>

                
                <View style={{flexDirection:"row"}}>
                
                
                

                    {/* <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>

                        <View style={[{width:"60%",height:"30%"},styles.sombra]}>

                        </View>

                    </View>

                    <View style={{flex:1,justifyContent:"center",justifyContent:"center",alignItems:"center"}}>

                        <View style={[{width:"60%",height:"30%"},styles.sombra]}>

                        </View>

                    </View>


                    <View style={{flex:1,justifyContent:"center",justifyContent:"center",alignItems:"center"}}>

                        <View style={[{width:"60%",height:"30%"},styles.sombra]}>

                        </View>

                    </View> */}

                </View>
                {/* <TouchableWithoutFeedback  onPress={()=>{console.log("mkmskmks")}}>
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
                </TouchableWithoutFeedback> */}
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
        borderBottomLeftRadius:4,
        borderTopLeftRadius:4,
        overflow:'hidden',
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
        borderRadius: 4,
        borderColor: '#ddd',
        borderBottomWidth: 0,
    }
})

export default menuGraficasDias_Semanas;
