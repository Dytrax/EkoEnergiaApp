import  React,{ Component } from 'react'
import  {StyleSheet,View,SafeAreaView,ScrollView,Text,TextInput,TouchableHighlight,Image} from 'react-native'
import {Container,Icon,InputGroup} from 'native-base'
import Color from '../../../config/color'
import API from '../../../utils/requests/apiRequests'

import  DropdownAlert from 'react-native-dropdownalert'

class Crear extends Component{

    constructor(props) {
        super(props)
        this.state={
            data:[],
            titulo:'',
            descripcion:'',
            tipo:'',
            archivo:''
        }
    }

    stateChange = (stateToChange, value) => {
        this.state[stateToChange] = value;
    };

    requestCreate= async () =>{
        //console.log(this.state['emailRecover'])
            const recover = await API.create(this.state.titulo, this.state.descripcion)
            console.log(recover[0])
            if (recover[0] === 201) {
                this.dropdown.alertWithType('success', '201', 'Creación exitosa');
            } else {
                this.dropdown.alertWithType('error', 'Error'+recover[0], ''+recover[1].message);
            }
            setTimeout(() => {
                this.props.navigation.navigate('Solicitudes')
            }, 3000);
            
      }
     render(){
 
        return (
            <Container>
            <ScrollView style={{backgroundColor:'#fff',padding:15}}>
                <SafeAreaView >
                    <View> 
                        <TextInput 
                        underlineColorAndroid='rgba(0,0,0,0)' 
                        placeholder="*Titulo:"
                        placeholderTextColor = "#000"
                        onChangeText={(val) => this.stateChange("titulo",val)} 
                        style={{borderBottomWidth: 1,borderColor: Color.text_color_primary+'50'}}
                        />

                        <TextInput
                        multiline={true}
                        numberOfLines={8}
                        placeholderTextColor = "#000"
                        style={{borderWidth: 1,borderColor: Color.text_color_primary+'50',marginTop:10}}
                        placeholder="*Descripción:"
                        onChangeText={(val) => this.stateChange("descripcion",val)} 
                        />

                    </View> 
                </SafeAreaView>
                <DropdownAlert ref={ref => this.dropdown = ref} />
            </ScrollView>
                 <TouchableHighlight  style={styles.buttonfloat} onPress={(val) => this.props.navigation.navigate('Solicitudes')}
                              >
                    <Image
                    style={{width: 50, height: 50,backgroundColor:'#fff'}}
                    source={require('../../assents/img/button/ic-cancelar.png')}
                    />
                </TouchableHighlight>
                <TouchableHighlight  style={styles.buttonfloatleft} onPress={(val) => this.requestCreate()}
                              >
                    <Image
                    style={{width: 50, height: 50,backgroundColor:'#fff'}}
                    source={require('../../assents/img/button/ic-aceptar.png')}
                    />
                </TouchableHighlight>
            </Container>
        
            
        )   
         
    } 
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1,
        flexDirection:'column'
    },
    buttonfloat:{
        width: 50,  
        height: 50,   
        borderRadius: 30,                     
        position: 'absolute',                                          
        bottom: 20,                                                    
        right: '20%', 
    },
    buttonfloatleft:{
        width: 50,  
        height: 50,   
        borderRadius: 30,                     
        position: 'absolute',                                          
        bottom: 20,                                                    
        left: '20%',}
})

export default Crear 