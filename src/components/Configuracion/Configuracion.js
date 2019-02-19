import  React,{ Component } from 'react'
import {StyleSheet,TextInput,View,TouchableOpacity} from "react-native";
import { Container, Body, Content, Icon, Text,Card,CardItem,InputGroup} from 'native-base'

import CustomHeader from '../layouts/CustomHeader'
import Color from '../../../config/color'
import DB from '../../../utils/datastore/function'

let email = ""
let name = ""

DB.getData('email').then(respon=> {
    email=""+respon+""
})   
DB.getData('name').then(respon=> {
    name=respon
})  



class Configuracion extends Component{
   // await DB.getData("token", usuario[1].token)

   constructor(){
    super()
    this.state = {
        valor: ""
      }
    }

    stateChange = (stateToChange, value) => {
        this.state[stateToChange] = value;
    }; 
    valorStorage = async () =>{
      await DB.store("valorkilo",  this.state.valor )
      console.log(this.state.valor)
    }
    render(){
        return ( 
            <Container>
                <CustomHeader title="Configuración" actionEvent={() => this.props.navigation.openDrawer()} ></CustomHeader>
                <Content style={{backgroundColor:'#fff',padding:15}}>
                    <Card  >
                        <CardItem header >
                            <Text style={{color:Color.primary}}> Datos Usuario </Text>
                        </CardItem>
                        <View
                            style={{
                                borderBottomColor: Color.tex_color_grid+'50' ,
                                borderBottomWidth: 1,
                            }}
                            />
                        <CardItem >
                                <Body>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                        <View style={{width: '80%'}}>
                                            <Text>
                                                <Text style={styles.body}>Usuairo : </Text>
                                                <Text style={styles.color}> {name} </Text> 
                                            </Text> 
                                            <Text>
                                                <Text style={styles.body}>Correo :</Text>
                                                <Text>{email}</Text>
                                            </Text>
                                            <Text>
                                                <Text style={styles.body}>Dirección :</Text>
                                                <Text style={styles.color}> Sin direccion</Text>
                                            </Text>
                                            <Text>
                                                <Text style={styles.body}>Contrato :</Text>
                                                <Text style={styles.color}> Sin contrato</Text>
                                            </Text>
                                                
                                        </View>
                                </View>
                                </Body>
                        </CardItem>
                    </Card>

                     <Card  >
                        <CardItem header >
                            <Text style={{color:Color.primary}}> Configuración de datos Simulados </Text>
                        </CardItem>
                        <View
                            style={{
                                borderBottomColor: Color.tex_color_grid+'50' ,
                                borderBottomWidth: 1,
                            }}
                            />
                        <CardItem >
                                
                            <Text style={styles.body}>Precio Kilovatio : </Text>
                            <InputGroup borderType="underline" style={styles.inputBox}>        
                                <TextInput style={{flex:1}} 
                                onChangeText={(val) => this.stateChange("valor",val)}
                                underlineColorAndroid='rgba(0,0,0,0)' 
                                placeholder="Ingrese el dato"
                                
                                placeholderTextColor = "#C6C6C6"
                                
                                />  
                            </InputGroup>
                           
                                   
                        </CardItem>
                        <CardItem >
                            <TouchableOpacity  style={styles.SubmitButtonStyle} onPress={()=>this.valorStorage()}>
                                <Text style={styles.buttonText}> Guardar valor precio </Text>
                            </TouchableOpacity>

                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )   
    }
}
export default Configuracion
const styles = StyleSheet.create({
    title:{
      color:Color.primary,fontSize: 16,
      fontWeight: 'bold',
    },
    body:{
      fontSize: 16,
      fontWeight: 'bold',
    },
    inputBox: {
        backgroundColor:'rgba(255, 255,255,0.2)',
        width:'100%'
      },
    buttonText: {
    color:'#fff',
    textAlign:'center',
    },
    SubmitButtonStyle: {
        width:'100%',
    marginVertical: 5,
    paddingVertical: 5,
    marginHorizontal: 5,
    backgroundColor:Color.primary,
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
 
    },
})