import  React,{ Component } from 'react'
import {View,Text,StyleSheet,Image,ScrollView} from "react-native";
import { Container,Header, Body, Title, Content, Left, Icon, Right } from 'native-base'

import CustomHeader from '../layouts/CustomHeader'
import Color from '../../../config/color'
import ProgressBarAnimated from 'react-native-progress-bar-animated';
 class Indicadores extends Component{
    
    constructor(){
        super()
        
    }
   

    static navigationOptions = {
        header: null,
        drawerIcon:(
            <Image  source={require('../../assents/img/icon_menu/ic-indicadores-gris.png')} style={{ height:35,width:35}}/>
        ),
        
      }
   
    render(){
       
      
        return ( 
            <Container>
                <CustomHeader title="Indicadores"  porcentaje="17%" actionEvent={() => this.props.navigation.openDrawer()} ></CustomHeader>
                <Content contentContainerStyle={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <ScrollView style={{flex:1,width:'100%'}}> 
                  <Text> Consumo</Text> 
                 
                </ScrollView>
                  
                 
                </Content>
            </Container>
        )   
    }
}
export default Indicadores
const styles = StyleSheet.create({ 
linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 28,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },})