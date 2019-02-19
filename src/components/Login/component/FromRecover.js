import  React,{ Component } from 'react'
import  {StyleSheet,Text,View,TextInput,TouchableOpacity} from 'react-native'
import {Icon,InputGroup,Input} from "native-base";
import  API from '../../../../utils/user/apiUser';
import Color from '../../../../config/color'
import  DropdownAlert from 'react-native-dropdownalert'
function FromRecover (props){
   
        this.state = {
            emailRecover: "",
          }
          //cambio de vatiables
          stateChange = (stateToChange, value) => {
              this.state[stateToChange] = value;
          };

  

          UserRecover= async () =>{
            //console.log(this.state['emailRecover'])
                const recover = await API.recover(
                    this.state.emailRecover//this.state.email,
                )
                if (recover[0] === 200) {
                    this.dropdown.alertWithType('success', '200', ''+recover[1].message);
                } else {
                    this.dropdown.alertWithType('error', 'Error'+recover[0], ''+recover[1].message);
                }
          }
    
        return (
                <View style={styles.infoContainer}>
                    <View style={styles.arriba}>

                        <Text style={styles.inputBox} >
                        Por favor ingresa el correo electrónico registrado en tu cuenta
                        </Text>
                           
                        <InputGroup borderType="underline" style={styles.inputBox}>
                            <Icon name="ios-mail" style={{color:'#C6C6C6'}}/>
                            <TextInput style={{flex: 1}}
                            onChangeText={(val) => this.stateChange("emailRecover",val)} 
                            underlineColorAndroid='rgba(0,0,0,0)' 
                            placeholder="E-mail"
                            placeholderTextColor = "#C6C6C6"
                            selectionColor="#fff"
                            keyboardType="email-address"
                            />
                        </InputGroup>   
              
                        <View >
                            <TouchableOpacity style={styles.SubmitButtonStyle} activeOpacity = { .5 }  onPress={(val) => this.UserRecover()}>
                                <Text style={styles.textWhite}> Enviar contraseña </Text>
                            </TouchableOpacity>
                        </View>

                        
                    
                    </View>
                    <DropdownAlert ref={ref => this.dropdown = ref} />
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
    color:'#C6C6C6',
        alignItems:'center',
        textAlign:'center',
        fontWeight: 'bold',
        marginTop:50,
        fontSize:16
        
        
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
        marginTop:10,
      },
     //tex styles
      TextStyle:{
          color:'#fff',
          textAlign:'center',
      },
      textNaranja:{
        fontSize:16,
        fontWeight:'500',
        color:Color.primary,
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
export default FromRecover