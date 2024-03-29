import  React,{ Component } from 'react'
import {StyleSheet,Text,View,ImageBackground,ScrollView,TouchableHighlight,Image, FlatList,TouchableOpacity, Button,TouchableWithoutFeedback} from "react-native";
import {Container,Content,Card,CardItem,Body,Icon, } from 'native-base'
import SearchBar from 'react-native-searchbar';
import CustomHeader from '../layouts/CustomHeader'
import Color from '../../../config/color'
import API from  '../../../utils/requests/apiRequests'
import moment from 'moment' 
import CalendarIcon from 'react-native-vector-icons/AntDesign';
import FolderSearch from 'react-native-vector-icons/MaterialCommunityIcons';//newspaper
import PapelHigienico from 'react-native-vector-icons/FontAwesome5'
import ResumenIcon from 'react-native-vector-icons/FontAwesome5'
import Bell from 'react-native-vector-icons/MaterialCommunityIcons';
import CloseIcon from 'react-native-vector-icons/EvilIcons';
import ImagenPruebaFondo from '../../../src/assents/img/imagenPrueba.png'
import ImagenPruebaFondo2 from '../../../src/assents/img/imagenPrueba2.png'
 class MenuReportesGraficas extends Component{
    
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
    

    renderItem = ({item}) =>{
        let color = ""
        if (item.color === "#F7112D"){

             color = "#C1282D"
        }else{
            color = item.color
        }
       
        return(
        
        <View style={[{backgroundColor:"white",marginBottom:10},styles.sombra]}>
           <View style={{marginBottom:10,marginTop:10}}>
                <Text style={{color:'rgb(133,133,133)',fontSize:16,marginLeft:10, fontWeight:"bold"}}>{`Medidor  ${item.measurerCode}`}</Text>
          </View>
        

            <View style={{flexDirection:"row",alignItems:"center",backgroundColor:color, padding:5}}>
                <Bell name="bell-ring-outline" size={25} color="white"/>
                <View>
                     <Text style={{color:"white",fontSize:14,marginLeft:10, fontWeight:"900"}}>{`Desviación  ${Math.trunc(item.percentage)} %`}</Text>
                    <Text style={{color:"white",fontSize:14,marginLeft:10, fontWeight:"900"}}>{`${ moment(item.dateNotification).utc().format("MMMM DD YYYY, h:mm:ss a")}`}</Text>
                </View>
            </View>
        <View style={{alignSelf:"flex-start",padding:10,}}>
                
                    {/* <Text style={{color:'rgb(99,99,99)',fontWeight:"bold", fontSize:16,}}>{`Medidor #${item.measurerCode}`}</Text>
                    <Text style={{color:item.color,fontSize:15}}>{`Desviacion ${item.percentage}%`}</Text> */}
                
                
                
                <View style={{marginTop:10,marginBottom:10}}>
                <Text style={{color:'rgb(133,133,133)', fontSize:15,}}>{`${item.message}`}</Text>
                </View>
                {/* <View style={{alignSelf:"flex-end"}}>
                    <Text style={{color:'rgb(133,133,133)',fontSize:12,}}>{`${item.origin} - ${ moment(item.dateNotification.slice(0, 10)).format("MMMM DD YYYY, h:mm:ss a")}`}</Text>
                </View>
                <View style={{borderBottomColor: item.color,borderBottomWidth: 1,marginTop:5}}/> */}
            
        </View>
    
        </View>
       
        )
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
                
                <CustomHeader  title="Reportes" porcentaje="16%" 
                search={true} 
                actionEvent={() => this.props.navigation.openDrawer()} 
                searchAction= {()=> this.setState({
                    searchBar:true
                })}  
                ></CustomHeader>
                <Content scrollEnabled={false} contentContainerStyle={{flex:1,padding:5,
                justifyContent:"space-between"
                }}
                >
                <TouchableWithoutFeedback  onPress={()=>{this.props.navigation.navigate('OpcionesInformeFactura')}}>
                    <View style={[styles.sombra,styles.wrapper,{padding:10}]}>
                        <FolderSearch name={"folder-search-outline"} color={Color.primary} size={70}/> 
                        <Text style={styles.genre}>Informe Factura</Text>
                    </View>
                    
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=>{console.log("HAJAICDIWCNIN")}}>
                    <View style={[styles.sombra,styles.wrapper,{padding:10}]}>
                        <PapelHigienico name={"toilet-paper"} color={Color.primary} size={70}/> 
                        <Text style={styles.genre}>Resumen Consumo</Text>
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

export default MenuReportesGraficas;
