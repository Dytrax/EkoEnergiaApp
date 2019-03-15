import  React,{ Component } from 'react'
import {View,Text,StyleSheet,Image} from "react-native";
import { Container,Header, Body, Title, Content, Left, Icon, Right } from 'native-base'

import CustomHeader from '../layouts/CustomHeader'

//redux
import {connect} from 'react-redux'

 class Simulador extends Component{
    componentDidMount(){
        const token = this.props.user.token;
        const name = this.props.user.user.businessName
        console.log(token)
        console.log(name)
    }
   /* getSuperheroes(){
       const {permisos} = this.props
       return permisosData = permisos.map((permisos, key)=>{
           return <Text key={key}>{permisos.superhero}</Text>
       })
   }
   getUserInfo(){
    const {user} = this.props
    
} */
    render(){
        
        console.log(this.props)
        return ( 
            <Container>
                <CustomHeader title="Simulador" actionEvent={() => this.props.navigation.openDrawer()} ></CustomHeader>
                <Content contentContainerStyle={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <Text>{this.props.user.token}</Text> 
                    {/* {this.getSuperheroes()} */}
                    
                    
                </Content>
            </Container>
        )   
    }
}

const mapStateToProps = state => {
    return {
        permisos : state.permisos,
        user: state.user
    }
}

export default connect(mapStateToProps)(Simulador)
//const styles = StyleSheet.create({ })