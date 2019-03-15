import React, { Component } from "react";
import {
  Text,
  Keyboard,
  StatusBar,
  StyleSheet,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Platform
} from "react-native";
import Color from "../../../config/color";
import Logo from "./component/Logo";
import FromRecover from "./component/FromRecover";
import API from "../../../utils/user/apiUser";
import { showMessage } from "react-native-flash-message";

class Recuperar extends Component {
    constructor () {
        super()
        this.state = {
            email:""
        }
    }
    userRecover = async () =>{
        const recoveryPassword = await API.recover(this.state.email)
        console.log(recoveryPassword)
        if (recoveryPassword[0]===404){
            showMessage({
                message: "Error",
                description: recoveryPassword[1].message,
                type: "warning",
                duration: 2500
              });
        }else if (recoveryPassword[0]===200){
            showMessage({
                message: "Correcto",
                description: recoveryPassword[1].message,
                type: "success",
                duration: 2500
              });
        }
        
    }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : null} style={styles.container}>
          <TouchableWithoutFeedback
            style={styles.container}
            onPress={Keyboard.dismiss}
          >
            <View style={styles.container}>
              <View style={styles.logoContainer}>
                <Logo />
              </View>
              
              <View style={styles.infoContainer}>
                <Text style={styles.inputBox}>
                    Por favor ingresa el correo electrónico registrado en tu cuenta
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Ingresa tu correo"
                  keyboardType="email-address"
                  autoCorrect={false}
                  onChangeText = {(txt) => this.setState({email:txt})}
                />
                <TouchableOpacity
                  style={styles.SubmitButtonStyle}
                  activeOpacity={0.5}
                  onPress={this.userRecover}
                >
                  <Text style={styles.textWhite}> Enviar contraseña </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        {/* <View style={styles.container}>
                <Logo></Logo>
                <FromRecover actionEvent={this.userRecover}></FromRecover>
                </View>  */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        flexDirection: "column"
      },
      logoContainer: {
        alignItems: "center",
        justifyContent: "flex-start",
        flex: 1,
        marginBottom: 5
        //backgroundColor:"white"
      },
      logo: {
        width: 250,
        height: 56
      },
      inputBox:{
        alignContent:"center",
        marginBottom:40
      },
      infoContainer: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        //height: "55%",
        height: 300,
        padding: 20,
        marginBottom:40
      },
      input: {
        height: 40,
        //backgroundColor: "rgba(0,180,255,0.5)",
        //backgroundColor: "#ff7c00",
        marginBottom: 20,
        paddingHorizontal: 10,
        borderColor: "#ef6c00",
        borderWidth: 1
      },
      buttonContainer: {
        backgroundColor: "rgba(0,180,255,0.5)",
        paddingVertical: 15,
        marginBottom: 20
      },
      buttonText: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18
      },
      fbContainer: {
        padding: 10,
        width: 200,
        marginBottom: 20,
        borderRadius: 4,
        alignSelf: "center",
        backgroundColor: "rgb(73,104,173)"
      },
      facebookButton: {
        fontSize: 18,
        color: "white",
        textAlign: "center"
      },
      registerText: {
        color: "#ff7c00"
      },
      SubmitButtonStyle: {
        marginVertical: 10,
        paddingVertical: 13,
        marginHorizontal: 40,
        backgroundColor: Color.primary,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#fff",
        marginTop: 50
      },
      textWhite: {
        fontSize: 16,
        color: "#fff",
        alignItems: "center",
        textAlign: "center",
        fontWeight: "bold"
      },
      textNaranja: {
        fontSize: 16,
        fontWeight: "500",
        color: Color.text_color_primary,
        alignItems: "center",
        textAlign: "center",
        marginHorizontal: 40,
        marginTop: 10
      }
    });
    

export default Recuperar;
