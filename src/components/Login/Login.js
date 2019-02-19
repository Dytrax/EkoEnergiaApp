import  React,{ Component } from 'react'
import  {StyleSheet,View,SafeAreaView}
        from 'react-native'
import  Logo  from './component/Logo'
import  From  from './component/From'
import  API from '../../../utils/user/apiUser';
import  APIMESURE from '../../../utils/measurer/apiMeasurer';
import  DB from '../../../utils/datastore/function'
import  Config from '../../../config/config'
import  DropdownAlert from 'react-native-dropdownalert'
//import  GLOBAL from '../../../utils/function'


 class Login extends Component{

    constructor(){
        super()
        this.state = {
            email: "",
            password: "",
            companiy:"",
            token:0,
            datos:0,
            status: 0
           
          }
    }
    async componentDidMount(){
        

        const token =  await DB.getData("token") 
        console.log(token); 

        const data = await APIMESURE.getList()
        console.log(data)
        
        if(data===403){
            /*this.dropdown.alertWithType('error', 'Error Token expired');*/
            this.dropdown.alertWithType('error','Error 403', 'Token expired');
        }
        else{
            
            this.props.navigation.navigate("Menu")
        }
    }

    userStorage = async () =>{
            const usuario = await API.getAuth(
                /*this.state.email*/'fabiomayorgad@hotmail.com','Hola@321','ekoenergia' //this.state.email,
            )
            
            if (usuario[0] === 200) {
                console.log(usuario[1])
                this.setState({datos:usuario[1]})
                 await DB.store("token", usuario[1].token)
                 await DB.store("email", usuario[1].user.email)
                 await DB.store("img", Config.Base_api_usuairo_img+'configuration-image/'+usuario[1].user.companyId)
                 await DB.store("name", ""+usuario[1].user.name)

                this.props.navigation.navigate("Menu")
            } else {
                this.dropdown.alertWithType('error', 'Error '+usuario[0], ''+usuario[1].message);
            }
       
    }

    //recuperacion de contraseña
    UserRecover= async () =>{
            const usuario = await API.getAuth(
                this.state.email,'Hola@321','ekoenergia' //this.state.email,
            )
            
            if (usuario[0] === 200) {
                this.props.navigation.navigate("Menu") 
                this.dropdown.alertWithType('success', ''+usuario[0], ''+usuario[1].message);
            } else {
                
                this.dropdown.alertWithType('error', 'Error '+usuario[0], ''+usuario[1].message);
            }
    
    }

    //cambio de vatiables
    stateChange = (stateToChange, value) => {
        this.state[stateToChange] = value;
    }; 
 
   
   
     render(){
       
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                   <Logo></Logo>
                   <From actionEvent={this.userStorage} 
                         changeState={this.stateChange} 
                         actionEvent2={()=>this.props.navigation.navigate("Recuperar")}></From> 
                    <DropdownAlert ref={ref => this.dropdown = ref} />
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

export default Login 