import  React,{ Component } from 'react'
import  {Platform,KeyboardAvoidingView,TouchableOpacity,StyleSheet,View,SafeAreaView,ScrollView,Text,TextInput,TouchableHighlight,Image} from 'react-native'
import {Container,Icon,InputGroup,Item,Input} from 'native-base'
import Color from '../../../config/color'
import API from '../../../utils/requests/apiRequests'
import * as actions from '../../actionsCreators/actions'
import {connect} from 'react-redux'
import  DropdownAlert from 'react-native-dropdownalert'
import InputComponent from '../inputComponent'
import InputComponentV2 from '../inputComponentV2'
import ButtonCircle from '../buttonCircle'
import { withNavigation, StackActions,NavigationActions } from "react-navigation";


const actionToDispatch = StackActions.reset({
    index: 0,
    key: null,  
    actions: [NavigationActions.navigate({ routeName: 'Menu' })]
  })
class Crear extends Component{

    constructor(props) {
        super(props)
        this.state={
            data:[],
            titulo:'',
            descripcion:'',
            tipo:'',
            archivo:'',
            typeSolicitud:[],
            contratos:[]
        }
    }
    async componentDidMount(){
        var tipoSolicitud = await API.getListTipoSolicitud()
        var contratos = await API.getListContratos()
        if (tipoSolicitud[0]===200 && contratos[0]===200){
            console.log(contratos[1])
            console.log(tipoSolicitud[1])
            this.setState({
                typeSolicitud:tipoSolicitud[1],
                contratos:contratos[1]
            })
        }
        
    }

    stateChange = (stateToChange, value) => {
        this.state[stateToChange] = value;
        console.log(this.state)
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

      TipoSolicitudes(){
        
        this.props.navigation.navigate('typeSolicitudes', {
            typeSolicitudes: this.state.typeSolicitud
          });
      }

      seleccionarContrato(){
        this.props.navigation.navigate('Contratos', {
            contratos: this.state.contratos
          });
      }
      
      pruebaCrear(){
        this.props.navigation.dispatch(actionToDispatch)
      }
     render(){
        console.log(this.state)
        return (
            <Container>
            <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? "padding" : null} >
                
            <ScrollView style={{backgroundColor:'#fff'}} keyboardShouldPersistTaps={"always"}  >
                <SafeAreaView >
                <TouchableOpacity onPress={()=>{this.TipoSolicitudes()}}>
                    <View style={{flexDirection:"row",backgroundColor:"white",marginTop:15,
                    marginBottom:15,padding:10,borderBottomWidth:0.7,borderTopWidth:0.7,
                    borderColor:'rgb(143,143,143)'}}>
                        <View style={{alignSelf:"center",width:"70%"}}>
                            <View style={{}}>
                                <Text style={{color:'rgb(99,99,99)',fontWeight:"bold", fontSize:16,}}>TIPO DE SOLICITUD</Text>
                            </View>
                            <View style={{marginTop:10}}>
                                {
                                    !this.props.typeSolicitud.codigo ? (
                                        <Text style={{color:'rgb(133,133,133)'}}>Selecciona el tipo de solicitud *</Text>
                                    ): (
                                        <Text style={{color:'rgb(133,133,133)'}}>{`${this.props.typeSolicitud.codigo} - ${this.props.typeSolicitud.descripcion}`}</Text>
                                    )
                                }
                                
                            </View>
                        </View>
                        <View style={{justifyContent:"center",alignItems:"center",width:"30%"}}>
                            
                            <Icon  name='ios-arrow-forward' style={{color:Color.primary}}/>
                            
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.seleccionarContrato()}}>
                    <View style={{flexDirection:"row",backgroundColor:"white",
                    marginBottom:5,padding:10,borderBottomWidth:0.7,borderTopWidth:0.7,
                    borderColor:'rgb(143,143,143)'}}>
                        <View style={{alignSelf:"center",width:"70%"}}>
                            <View style={{}}>
                                <Text style={{color:'rgb(99,99,99)',fontWeight:"bold", fontSize:16,}}>CONTRATOS</Text>
                            </View>
                            <View style={{marginTop:10}}>
                                {
                                    !this.props.contratos.id ? (
                                        <Text style={{color:'rgb(133,133,133)'}}>Selecciona el contrato *</Text>
                                    ): (
                                        <Text style={{color:'rgb(133,133,133)'}}>{`${this.props.contratos.number}`}</Text>
                                    )
                                }
                                
                            </View>
                        </View>
                        <View style={{justifyContent:"center",alignItems:"center",width:"30%"}}>
                            
                            <Icon  name='ios-arrow-forward' style={{color:Color.primary}}/>
                            
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={{marginTop:13}}>
                    <InputComponentV2
                        placeholder={"Título *"}
                        stateChange={this.stateChange}
                        state={"titulo"}
                    />
                </View>
                
                <View style={{marginTop:40}}>
                    <InputComponentV2
                        placeholder={"Descripción *"}
                        stateChange={this.stateChange}
                        state={"descripcion"}
                        multiline={true}
                    />
                </View>
                <View style={{marginTop:30,marginBottom:30}}>
                           
                                <ButtonCircle text={"Crear"} size={"50%"} action={()=>{this.props.navigation.dispatch(actionToDispatch)}}
                                ></ButtonCircle>
                </View>
                {/* <View style={{justifyContent: "center",
                            alignItems:"center",marginTop:20}}>
                            <InputComponent 
                                            
                                            width={"100%"}
                                            texto={"Nombre *"} 
                                            mensajeError={"Campo Requerido"} 
                                            state={"contactName"}
                                            stateChange={this.stateChange}
                                            type={"default"}
                                            value={""}
                                            iconType={"font-awesome"}
                                            iconName={"industry"}
                                            iconSize={20}
                                            
                                            />
                        </View> */}
                
                    {/* <View> 
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

                    </View>  */}
                </SafeAreaView>
                {/* <DropdownAlert ref={ref => this.dropdown = ref} /> */}
            </ScrollView>
                 {/* <TouchableHighlight  style={styles.buttonfloat} onPress={(val) => this.props.navigation.navigate('Solicitudes')}
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
                </TouchableHighlight> */}
                </KeyboardAvoidingView>
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


const mapStateToProps = state => {
    return {
        typeSolicitud : state.typeSolicitud,
        contratos: state.contrato
    }
}
export default connect(mapStateToProps,actions)(Crear); 

