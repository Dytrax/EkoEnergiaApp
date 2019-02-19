import  React,{ Component } from 'react'
import  {StyleSheet,Text,View,TextInput,TouchableOpacity} from 'react-native'
import {Icon,InputGroup,Input} from "native-base";
import Color from '../../../../config/color'

function From (props){
    
        return (
                <View style={styles.infoContainer}>
                    <View style={styles.arriba}>

                        <InputGroup borderType="underline" style={styles.inputBox}>
                            <Icon name="ios-mail" style={{color:'#C6C6C6'}}/>
                            <TextInput style={{flex: 1}}
                            onChangeText={(val) => props.changeState("email",val)} 
                            underlineColorAndroid='rgba(0,0,0,0)' 
                            placeholder="E-mail"
                            placeholderTextColor = "#C6C6C6"
                            selectionColor="#fff"
                            keyboardType="email-address"
                            onSubmitEditing={()=> this.password.focus()}
                            
                            />
                        </InputGroup>
                           
                        <InputGroup borderType="underline" style={styles.inputBox}>
                            <Icon name="ios-lock" style={{color:'#C6C6C6'}}/>
                            <TextInput style={{flex:1}} 
                            onChangeText={(val) => props.changeState("password",val)}
                            underlineColorAndroid='rgba(0,0,0,0)' 
                            placeholder="Password"
                            secureTextEntry={true}
                            placeholderTextColor = "#C6C6C6"
                            ref={(input) => this.password = input}
                            />  
                        </InputGroup>
              
                        
                        
                        
                            <View >
                                <TouchableOpacity style={styles.SubmitButtonStyle} activeOpacity = { .5 }  onPress={props.actionEvent}>
                                    <Text style={styles.textWhite}> Inciar Sesión </Text>
                                </TouchableOpacity>
                            </View>

                        
                        <Text style={styles.textNaranja} onPress={props.actionEvent2}>Olvidaste tu contraseña ? </Text>
                    </View>
                </View>
                
            
            
        )   
    
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1,
        flexDirection:'column'
    },
    
    arriba:{
        marginTop:-175,
    },
    infoContainer:{
        position:'absolute',
        left:0,
        right:0,
        bottom:0,
        height:200,
        //backgroundColor:'red'
    },
   
    inputBox: {
        backgroundColor:'rgba(255, 255,255,0.2)',
        marginVertical: 10,
        marginHorizontal: 40, 
        
        
      },
      buttonText: {
        fontSize:16,
        fontWeight:'500',
        color:'#fff',
        textAlign:'center',
     
      },
      SubmitButtonStyle: {
        marginVertical: 10,
        paddingVertical: 13,
        marginHorizontal: 40,
        backgroundColor:Color.primary,
        borderRadius:20,
        borderWidth: 1,
        borderColor: '#fff',
        marginTop:50,
      },
     //tex styles
      TextStyle:{
          color:'#fff',
          textAlign:'center',
      },
      textNaranja:{
        fontSize:16,
        fontWeight:'500',
        color:Color.text_color_primary,
        alignItems:'center',
        textAlign:'center',
        marginHorizontal: 40,
        marginTop:10
        
      }, 
      textWhite:{
        fontSize:16,
        color:'#fff',
        alignItems:'center',
        textAlign:'center',
        fontWeight: 'bold'
      },


})
export default From