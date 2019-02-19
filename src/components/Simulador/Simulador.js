import  React,{ Component } from 'react'
import {View,Text,StyleSheet,Image} from "react-native";
import { Container,Header, Body, Title, Content, Left, Icon, Right } from 'native-base'

import CustomHeader from '../layouts/CustomHeader'
 class Simulador extends Component{
  
   
    render(){
        return ( 
            <Container>
                <CustomHeader title="" actionEvent={() => this.props.navigation.openDrawer()} ></CustomHeader>
                <Content contentContainerStyle={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <Text> Simulador</Text> 
                </Content>
            </Container>
        )   
    }
}
export default Simulador
const styles = StyleSheet.create({ })