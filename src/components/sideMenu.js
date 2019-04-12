import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ImageBackground,
    Image,
    TouchableHighlight,
    DatePickerIOS
} from 'react-native'
import Solicitudes from "react-native-vector-icons/AntDesign";
import Factura from "react-native-vector-icons/Ionicons";
import Notificaciones from "react-native-vector-icons/Ionicons";
import Medidores from "react-native-vector-icons/Entypo";
import SolicitudesIcon from "react-native-vector-icons/MaterialIcons";
import Fondo from '../../src/assents/img/icon_menu/imgSideMenu.jpg'
import Color from '../../config/color'
import ImageLogo from '../../src/assents/img/logo.png'
import DB from '../../utils/datastore/function'
class SideMenu extends Component {
    constructor(){
        super()
        this.state = {
            dashboardTab : 0,
            name:"",
            email:"",
            uriImg:""
        }
    }
    
    componentDidMount = async () => {
        let uriImg = await DB.getData("uriImg")
        let email = await DB.getData("email")
        let name = await DB.getData("name")
        /* console.log("email " + email)
        console.log("name " + name)
        console.log("uri" + uriImg) */
        this.setState({
            email:email,
            name:name,
            uriImg:uriImg
        })
    }

    controlTabNavigator = (route,number) => {
        console.log("Ruta")
        console.log(route)
        console.log("Numero")
        console.log(number)
        this.props.navigation.navigate(route);
        this.props.navigation.closeDrawer()
        this.setState({
            dashboardTab:number
        })
      }

    render(){
        return(
            <SafeAreaView style={[styles.container]}>
                <ImageBackground style={styles.container} source={Fondo}>
                    <View style={styles.profile}>
                        <View style={{flex:1,
                        justifyContent:"flex-start",alignItems:"flex-start",marginTop:30,marginLeft:20}}>
                            <View style={styles.circleImgEffect}/>
                            <Image  style={styles.drawerImage}
                                //ImageLogo
                                source= {{uri:this.state.uriImg} } 
                                />
                            <View style={{marginTop:22}}>
                                <Text style={{fontWeight:"900",fontSize:17, color:"white"}}>{this.state.name}</Text>
                            </View>
                            <View style={{marginTop:5}}>
                                <Text style={{fontSize:16, color:"white",fontWeight:"600"}}>{this.state.email}</Text>
                            </View>


                        </View>
                        
                        
                    </View>
                    <View style={styles.menu}>
                            <TouchableHighlight style={[styles.tabTouchableStyle,]}
                                onPress={() => {this.controlTabNavigator('Solicitudes', 0)}}
                                underlayColor = {Color.underlayColorTab}
                            >   
                                    <View style={{padding:6}}>
                                        <View style={[styles.tabContainerOff, this.state.dashboardTab===0 && styles.tabContainer]}>
                                                <View style={{width:"20%", marginLeft:40}}>
                                                    <Solicitudes name={"solution1"} size={22} 
                                                    //style={{alignSelf:"center"}}
                                                        //color={Color.primary}
                                                        style={[styles.offIcon, this.state.dashboardTab===0 && styles.onIcon]}
                                                    />
                                                </View>
                                                <View style={{width:"80%", }}>
                                                    <Text style={[{fontSize:16,fontWeight:"bold",},[styles.offIcon, this.state.dashboardTab===0 && styles.onIcon]]} >Solicitudes</Text>
                                                </View>
                                        </View>
                                    </View>
                                    
                               
                                
                            </TouchableHighlight>

                            <TouchableHighlight style={[styles.tabTouchableStyle,]}
                                onPress={() => {this.controlTabNavigator('TarifasAplicadas', 2)}}
                                underlayColor = {Color.underlayColorTab}
                            >   
                                <View style={{padding:6}}>
                                    <View style={[styles.tabContainerOff, this.state.dashboardTab===2 && styles.tabContainer]}>
                                    <View style={{width:"20%", marginLeft:40}}>
                                                <Factura name={"ios-paper"} size={22} 
                                                //style={{alignSelf:"center"}}
                                                    //color={Color.primary}
                                                    style={[styles.offIcon, this.state.dashboardTab===2 && styles.onIcon]}
                                                />
                                            </View>
                                            <View style={{width:"80%", }}>
                                                <Text style={[{fontSize:16,fontWeight:"bold",},[styles.offIcon, this.state.dashboardTab===2 && styles.onIcon]]} >Tarifas Aplicadas</Text>
                                            </View>
                                    </View>
                                </View>
                            </TouchableHighlight>
                            
                            
                            <TouchableHighlight style={[styles.tabTouchableStyle,]}
                                onPress={() => {this.controlTabNavigator('Notificaciones', 1)}}
                                underlayColor = {Color.underlayColorTab}
                            >   
                                <View style={{padding:6}}>
                                    <View style={[styles.tabContainerOff, this.state.dashboardTab===1 && styles.tabContainer]}>
                                        <View style={{width:"20%", marginLeft:40}}>
                                                <Notificaciones name={"ios-notifications"} size={22} 
                                                //style={{alignSelf:"center"}}
                                                    //color={Color.primary}
                                                    style={[styles.offIcon, this.state.dashboardTab===1 && styles.onIcon]}
                                                />
                                            </View>
                                            <View style={{width:"80%", }}>
                                                <Text style={[{fontSize:16,fontWeight:"bold",},[styles.offIcon, this.state.dashboardTab===1 && styles.onIcon]]} >Notificaciones</Text>
                                            </View>
                                    </View>
                                </View>
                                
                            </TouchableHighlight>

                            <TouchableHighlight style={[styles.tabTouchableStyle,]}
                                onPress={() => {this.controlTabNavigator('MedidoresTab', 3)}}
                                underlayColor = {Color.underlayColorTab}
                            >   
                                <View style={{padding:6}}>
                                    <View style={[styles.tabContainerOff, this.state.dashboardTab===3 && styles.tabContainer]}>
                                        <View style={{width:"20%", marginLeft:40}}>
                                                <Medidores name={"classic-computer"} size={22} 
                                                //style={{alignSelf:"center"}}
                                                    //color={Color.primary}
                                                    style={[styles.offIcon, this.state.dashboardTab===3 && styles.onIcon]}
                                                />
                                            </View>
                                            <View style={{width:"80%", }}>
                                                <Text style={[{fontSize:16,fontWeight:"bold",},[styles.offIcon, this.state.dashboardTab===3 && styles.onIcon]]} >Medidores</Text>
                                            </View>
                                    </View>
                                
                                </View>
                            </TouchableHighlight>
                            
                            <TouchableHighlight style={[styles.tabTouchableStyle,]}
                                onPress={() => {this.controlTabNavigator('EjemploGraficaDos', 5)}}
                                underlayColor = {Color.underlayColorTab}
                            >   
                                <View style={{padding:6}}>
                                    <View style={[styles.tabContainerOff, this.state.dashboardTab===5 && styles.tabContainer]}>
                                            <View style={{width:"20%",  marginLeft:40}}>
                                                <SolicitudesIcon name={"question-answer"} size={22} 
                                                //style={{alignSelf:"center"}}
                                                    //color={Color.primary}
                                                    style={[styles.offIcon, this.state.dashboardTab===5 && styles.onIcon]}
                                                />
                                            </View>
                                            <View style={{width:"80%", }}>
                                                <Text style={[{fontSize:16,fontWeight:"bold",},[styles.offIcon, this.state.dashboardTab===5 && styles.onIcon]]} >Ejemplo Grafica Dos</Text>
                                            </View>
                                    </View>
                             
                                </View> 
                            </TouchableHighlight>
                            {/* <TouchableHighlight style={[styles.tabTouchableStyle,[styles.offTab, this.state.dashboardTab===4 && styles.onTab]]}
                                onPress={() => {this.controlTabNavigator('EjemploGraficaUno', 4)}}
                                underlayColor = {Color.underlayColorTab}
                            >
                                <View style={styles.tabContainer}>
                                        <View style={{width:"30%", justifyContent:"center", alignItems:"center",}}>
                                            <SolicitudesIcon name={"question-answer"} size={30} 
                                            //style={{alignSelf:"center"}}
                                                color="white"
                                            />
                                        </View>
                                        <View style={{width:"70%", justifyContent:"center",}}>
                                            <Text style={{fontSize:16,fontWeight:"bold", color:"white"}} >Ejemplo Grafica Uno</Text>
                                        </View>
                                </View>
                            </TouchableHighlight> */}
                            {/* <TouchableHighlight style={[styles.tabTouchableStyle,[styles.offTab, this.state.dashboardTab===5 && styles.onTab]]}
                                onPress={() => {this.controlTabNavigator('EjemploGraficaDos', 5)}}
                                underlayColor = {Color.underlayColorTab}
                            >
                                <View style={styles.tabContainer}>
                                        <View style={{width:"30%", justifyContent:"center", alignItems:"center",}}>
                                            <SolicitudesIcon name={"question-answer"} size={30} 
                                            //style={{alignSelf:"center"}}
                                                color="white"
                                            />
                                        </View>
                                        <View style={{width:"70%", justifyContent:"center",}}>
                                            <Text style={{fontSize:16,fontWeight:"bold", color:"white"}} >Ejemplo Grafica Dos</Text>
                                        </View>
                                </View>
                            </TouchableHighlight> */}
                            
                            {/* <TouchableHighlightComponent style={[styles.tabContainer]} 
                            
                            onPress = {() =>  {controlTabNavigator('Solicitudes2',1)}}

                            >
                                {
                                    this.state.dashboardTab === 1 ? 
                                    
                                    <View>
                                    <Text>Logo</Text>
                                    </View> :
                                    <View>
                                    <Text>Logo 2</Text>
                                    </View>
                                 }
                                
                                <View>
                                    <Text>Solicitudes</Text>
                                </View>
                            </TouchableHighlightComponent> */}
                    </View>
                    <View style={styles.footerMenu}>
                            <Image style={{resizeMode:'contain',width:100, height:100}}
                                source={require('../assents/img/logoGrisLeadis.png')}
                            />

                    </View>
                    
                    
                </ImageBackground>
            </SafeAreaView>
        )
    }
}
export default SideMenu;

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    profile:{
        height:"30%",
        width:"100%",
        backgroundColor:Color.secondrgb,
        
    },
    menu:{
        height:"60%",
        width:"100%",
        backgroundColor:"white",
        //backgroundColor:Color.whiteTransparent,
    },
    footerMenu:{
        height:"10%",
        width:"100%",
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center"
    },
    circleImgEffect:{
        width: 70,
        height: 70,
        flexWrap: 'wrap',
        borderRadius: 35,
        position:"absolute",
        backgroundColor:'white'
    },
    drawerImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
        resizeMode:'contain',
        overflow: "hidden",
    },
    tabContainer:{
    flexDirection:"row",
    height:'100%',
    backgroundColor:Color.primaryTransparent,
    borderRadius: 4,
    /* borderWidth: 1,
    borderRadius: 4,
    borderColor: Color.whiteTransparent,
    padding:5 */
    justifyContent:"center", alignItems:"center",
    },
    tabContainerOff:{
        flexDirection:"row",
        height:'100%',
        //backgroundColor:Color.whiteTransparent,
        
        /* borderWidth: 1,
        borderRadius: 4,
        borderColor: Color.whiteTransparent,
        padding:5,
        justifyContent:"center", alignItems:"center", */
        justifyContent:"center", alignItems:"center",
        },
    tabTouchableStyle:{
        height:'13%',
        width:'100%',
        
        //paddingLeft:10
       /*  borderBottomColor:"white",
        borderBottomWidth:1,
        borderTopColor:"white",
        borderTopWidth:1, */
    },
    offIcon:{
        
        color:"rgb(98,98,98)",
      
      },
      onIcon:{
        
        color:"white",
        
      },

})