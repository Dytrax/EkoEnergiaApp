import  React,{ Component } from 'react'
import {View,Text,StyleSheet,Image} from "react-native";
import { Container,Header, Body, Title, Content, Left, Icon, Right } from 'native-base'

import CustomHeader from '../layouts/CustomHeader'
 class Salir extends Component{
    static navigationOptions = {
        header: null,
    
        drawerIcon:(
            <Image  source={require('../../assents/img/icon_menu/ic-salir-gris.png')} style={{ height:35,width:35}}/>
        ),
        
      }
   
    render(){
        return ( 
            <Container>
                <CustomHeader title="" actionEvent={() => this.props.navigation.openDrawer()} ></CustomHeader>
                <Content contentContainerStyle={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <Text> Salir</Text> 
                </Content>
            </Container>
        )   
    }
}
export default Salir
const styles = StyleSheet.create({ })