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
import SolicitudesIcon from "react-native-vector-icons/MaterialIcons";
import Fondo from '../../src/assents/img/icon_menu/imgSideMenu.jpg'
import Color from '../../config/color'
import ImageLogo from '../../src/assents/img/logo.png'
class SideMenu extends Component {
    constructor(){
        super()
        this.state = {
            dashboardTab : 0
        }
    }
    /* componentWillMount(){
        console.log("Side Menu Start")
    } */
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
                        <View style={{flex:0.8,
                        justifyContent:"center",alignItems:"center"}}>
                            <View style={styles.circleImgEffect}/>
                            <Image  style={styles.drawerImage}
                            source= {ImageLogo } 
                            />                           
                        </View>
                        <View style={{marginTop:10,borderBottomColor: 'white',borderBottomWidth: 1,width: '100%'}}/>
                        <View style={{flex:0.2,
                        justifyContent:"center",alignItems:"center"}}>
                            <Text style={{color:"white",alignSelf:"center",fontSize:16}}>User Name</Text>
                        </View>
                        
                    </View>
                    <View style={styles.menu}>
                            <TouchableHighlight style={[styles.tabTouchableStyle,[styles.offTab, this.state.dashboardTab===0 && styles.onTab]]}
                                onPress={() => {this.controlTabNavigator('Solicitudes', 0)}}
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
                                            <Text style={{fontSize:16,fontWeight:"bold", color:"white"}} >Solicitudes</Text>
                                        </View>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight style={[styles.tabTouchableStyle,[styles.offTab, this.state.dashboardTab===2 && styles.onTab]]}
                                onPress={() => {this.controlTabNavigator('TarifasAplicadas', 2)}}
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
                                            <Text style={{fontSize:16,fontWeight:"bold", color:"white"}} >Tarifas Aplicadas</Text>
                                        </View>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight style={[styles.tabTouchableStyle,[styles.offTab, this.state.dashboardTab===1 && styles.onTab]]}
                                onPress={() => {this.controlTabNavigator('Notificaciones', 1)}}
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
                                            <Text style={{fontSize:16,fontWeight:"bold", color:"white"}} >Notificaciones</Text>
                                        </View>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight style={[styles.tabTouchableStyle,[styles.offTab, this.state.dashboardTab===3 && styles.onTab]]}
                                onPress={() => {this.controlTabNavigator('MedidoresTab', 3)}}
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
                                            <Text style={{fontSize:16,fontWeight:"bold", color:"white"}} >Medidores</Text>
                                        </View>
                                </View>
                            </TouchableHighlight>
                            
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
        backgroundColor:Color.secondrgb,
    },
    footerMenu:{
        height:"10%",
        width:"100%",
        backgroundColor:Color.secondrgb,
    },
    circleImgEffect:{
        width: 100,
        height: 100,
        flexWrap: 'wrap',
        borderRadius: 50,
        position:"absolute",
        backgroundColor:'white'
    },
    drawerImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        resizeMode:'contain',
        overflow: "hidden",
    },
    tabContainer:{
    flexDirection:"row",
    height:'100%'},
    tabTouchableStyle:{
        height:'12%',
        width:'100%',
        borderBottomColor:"white",
        borderBottomWidth:1,
        borderTopColor:"white",
        borderTopWidth:1,
    }

})