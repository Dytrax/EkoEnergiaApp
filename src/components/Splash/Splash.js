import React,{ Component } from 'react'
import {StyleSheet,Text,View,Image} from 'react-native'

export default class Splash extends Component{
    render(){
        return (
            
             <View style={{flex: 1, flexDirection: 'row'}}>
             <View style={styles.container}>
             <Image
                    resizeMode="contain" 
                    source = {require('../../assents/img/splash.jpg')}
                    style={styles.canvas}
                />
             </View>
             
           </View>

            
        )   
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    canvas: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
      },


})