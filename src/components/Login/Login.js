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
import Logo from "./component/Logo";
import From from "./component/From";
import API from "../../../utils/user/apiUser";
import APIMESURE from "../../../utils/measurer/apiMeasurer";
import DB from "../../../utils/datastore/function";
import Config from "../../../config/config";
import DropdownAlert from "react-native-dropdownalert";
import Color from "../../../config/color";
import { showMessage, hideMessage } from "react-native-flash-message";
import * as actions from '../../actionsCreators/actions'
import {connect} from 'react-redux'
//import  GLOBAL from '../../../utils/function'

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      companiy: "",
      token: 0,
      datos: 0,
      status: 0
    };
  }
  /*  async componentDidMount(){
        

        const token =  await DB.getData("token") 
        console.log(token); 

        const data = await APIMESURE.getList()
        console.log(data)
        
        if(data===403){
            
            this.dropdown.alertWithType('error','Error 403', 'Token expired');
        }
        else{
            
            this.props.navigation.navigate("Menu")
        }
    }
 */
/* await DB.store("companyId", user[1].user.companyId) */
        /* await DB.store("name", ""+user[1].user.name) */
  userStorage = async () => {
    const user = await API.getAuth("diegofer.carvajal@gmail.com", "Hola@123");
    if (user[0]===404 || user[0]===412){
        showMessage({
            message: "Error",
            description: user[1].message,
            type: "warning",
            duration: 2500
          });
    } else if( user[0]===200){
        showMessage({
            message: "Bienvenido",
            type: "success",
            duration: 500
          });
        await DB.store("token", user[1].token)
        await DB.store("email", user[1].user.email)
        await DB.store("name", user[1].user.name)
        await DB.store("uriImg", Config.Base_api_usuairo_img+user[1].user.companyId.toString())
       
        console.log(Config.Base_api_usuairo_img+user[1].user.companyId)
        this.props.setUser(user[1])
        this.props.navigation.navigate("Menu");
        
    }
    //console.log(user);
    /* this.props.navigation.navigate("Menu"); */

    /* if (usuario[0] === 200) {
                console.log(usuario[1])
                this.setState({datos:usuario[1]})
                 await DB.store("token", usuario[1].token)
                 await DB.store("email", usuario[1].user.email)
                 await DB.store("img", Config.Base_api_usuairo_img+'configuration-image/'+usuario[1].user.companyId)
                 await DB.store("name", ""+usuario[1].user.name)

                this.props.navigation.navigate("Menu")
            } else {
                this.dropdown.alertWithType('error', 'Error '+usuario[0], ''+usuario[1].message);
            } */
  };

  //recuperacion de contraseña
  UserRecover = async () => {
    const usuario = await API.getAuth(
      this.state.email,
      "Hola@321",
      "ekoenergia" //this.state.email,
    );

    if (usuario[0] === 200) {
      this.props.navigation.navigate("Menu");
      this.dropdown.alertWithType(
        "success",
        "" + usuario[0],
        "" + usuario[1].message
      );
    } else {
      this.dropdown.alertWithType(
        "error",
        "Error " + usuario[0],
        "" + usuario[1].message
      );
    }
  };

  //cambio de vatiables
  stateChange = (stateToChange, value) => {
    this.state[stateToChange] = value;
  };

  render() {
    console.log(this.props)
    return (
      <SafeAreaView style={styles.container}>
        {/* <View style={styles.container}>
                   <Logo></Logo>
                   <From actionEvent={this.userStorage} 
                         changeState={this.stateChange} 
                         actionEvent2={()=>this.props.navigation.navigate("Recuperar")}></From> 
                    <DropdownAlert ref={ref => this.dropdown = ref} />
                </View>  */}
        <StatusBar barStyle="light-content" />
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
                <TextInput
                  style={styles.input}
                  placeholder="Ingresa tu correo"
                  keyboardType="email-address"
                  returnKeyType="next"
                  autoCorrect={false}
                  onSubmitEditing={() => this.refs.txtPassword.focus()}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Ingresa tu contraseña"
                  returnKeyType="go"
                  secureTextEntry
                  autoCorrect={false}
                  ref={"txtPassword"}
                />
                <TouchableOpacity
                  style={styles.SubmitButtonStyle}
                  activeOpacity={0.5}
                  onPress={this.userStorage}
                >
                  <Text style={styles.textWhite}> Inciar Sesión </Text>
                </TouchableOpacity>
                <Text style={styles.textNaranja} onPress={()=>this.props.navigation.navigate("Recuperar")}>
                  Olvidaste tu contraseña ?{" "}
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

export default connect(null,actions)(Login);
/* const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1,
        flexDirection:'column'
    }
}) */
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
  title: {
    color: "black",
    fontSize: 18,
    textAlign: "center",
    marginTop: 5,
    marginBottom: 10,
    opacity: 0.5
  },
  infoContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    //backgroundColor: "red",
    //height: "55%",
    padding: 20
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


