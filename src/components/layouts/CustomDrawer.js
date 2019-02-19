import React, { Component } from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,AsyncStorage
} from "react-native";
import { Container, Content, Icon, Header, Body } from 'native-base'
import DB from '.././../../utils/datastore/function'
import Color from '../../../config/color'
import LinearGradient from 'react-native-linear-gradient';
let img = ""
let name = ""
DB.getData('img').then(respon=> {
    img=""+respon+""
})   
DB.getData('name').then(respon=> {
    name=respon
})  

function CustomDrawer (props){ 
    return (

        <LinearGradient colors={['#F5B31A', '#EC8623']} start={{x:1, y:0}} start={{x:0, y:1}}  >
         <View style={{justifyContent: "center",alignItems: "center"}} >
            <View style={{padding: 15}} >
                <Image  style={styles.drawerImage}
                    source= {{ uri:img }}
                    />
            </View>
                <View style={{marginTop:10,borderBottomColor: 'white',borderBottomWidth: 1,width: '100%'}}/>
                <View style={{padding: 10}} >
                    <Text style={styles.text} >{name}</Text>
                </View>
         </View>
        </LinearGradient>
           /* <Header style={styles.drawerHeader}>
            <Body style={{flex:1,justifyContent: "center",alignItems: "center"}} >
                <Image  style={styles.drawerImage}
                 source= {{ uri:img }}
                 />
                <View style={{marginTop:10,borderBottomColor: 'white',borderBottomWidth: 1,width: '100%'}}/>
                <View  >
                    <Text style={styles.text} >{name}</Text>
                </View>
            </Body>
            
            </Header>*/
            

        )
    }

export default CustomDrawer 


const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      },
  
    drawerHeader: {
      height: 200,
      backgroundColor: Color.primary ,
      alignItems: 'center',
      justifyContent: 'center'
    },
    drawerImage: {
        
        width: 150,
        height: 150,
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderRadius: 75,
      
    },
    text:{
        color:"white",
        fontWeight: 'bold',
        fontFamily:'Lato',
        fontSize:18
      
    }
  
  })