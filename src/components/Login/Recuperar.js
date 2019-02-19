import  React,{ Component } from 'react'
import  {StyleSheet,View,SafeAreaView} from 'react-native'
import {Text} from 'native-base'
import Logo from './component/Logo'
import FromRecover from './component/FromRecover'

class Recuperar extends Component{
    userRecover = async () =>{
       this.props.navigation.navigate("Login");
    }

     render(){
       
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                <Logo></Logo>
                <FromRecover actionEvent={this.userRecover}></FromRecover>
                </View> 
            </SafeAreaView>
            
        )   
        
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1,
        flexDirection:'column'
    }
})

export default Recuperar 