import  React,{ Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import { Container,Header, Body, Title, Content, Left, Icon, Right } from 'native-base'

//import { Container, Content, Icon, Button } from 'native-base'
import CustomHeader from '../layouts/CustomHeader'
 class Home extends Component{
    static navigationOptions = {
        header: null
      }
   
    render(){
        return ( 
            <Container>
                <CustomHeader title="" actionEvent={() => this.props.navigation.openDrawer()} ></CustomHeader>
                <Content contentContainerStyle={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <Text> home</Text> 
                </Content>
            </Container>
        )   
    }
}
export default Home
const styles = StyleSheet.create({ })