import  React,{ Component } from 'react'
import {StyleSheet,Text,View,ScrollView,TouchableHighlight,Image} from "react-native";
import {Container,Content,Card,CardItem,Body,Icon} from 'native-base'
import  DropdownAlert from 'react-native-dropdownalert'

import CustomHeader from '../layouts/CustomHeader'
import Color from '../../../config/color'
import API from  '../../../utils/requests/apiRequests'


 class Solicitudes extends Component{
    
    constructor(){
        super()
        this.state={
            data:[]
        }
        
    }
    async componentDidMount(){
        this.data()
    }

    async componentDidMount(){
        this.data()
    }

    async data(){
        const request = await API.getList()
        if (request[0] === 200) {
                console.log(request[1])      
                this.setState({data:request[1]})  
            } else {
                this.dropdown.alertWithType('error', 'Error '+request[0], ''+request[1].message);
            }
    }

  

    render(){
        return ( 
            <Container>
                <CustomHeader title="Solicitudes" porcentaje="16%" actionEvent={() => this.props.navigation.openDrawer()} ></CustomHeader>
                <Content contentContainerStyle={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <ScrollView style={{flex:1,width:'100%',padding:15}}> 
                    
                    {this.state.data.map((request, key) => {
                         let estado = 'Creada'
                         let color = 'styles.info'
                         if (request.state ==0)
                         {estado='Cerrada';color='styles.warning'}
                         if (request.state ==2)
                         {estado='Proceso';color='styles.sucess'}
                         
                        return (
                            <Card key={request.id} >
                            <CardItem button onPress={()=>this.props.navigation.navigate('Detalle',{data:request})}>
                                    <Body>
                                    <View style={{flex: 1, flexDirection: 'row'}}>
                                            <View style={{width: '80%'}}>
                                                <Text style={styles.title}>Titulo : {request.title}</Text>
                                                <Text>
                                                <Text style={styles.body}>Fecha :</Text><Text>{ request.dateInit}</Text>
                                                </Text>
                                                <Text>
                                                <Text style={styles.body}>Estado :</Text><Text style={styles.color}> {estado}</Text>
                                                </Text>
                                                    
                                            </View>
                                            <View style={{width: '20%' }} >
                                            <View style={{flex:1,alignItems:'center',justifyContent:'center', marginLeft:30}}>
                                            
                                            <Icon  name="eye" style={{color:Color.success}}/>
                                                           
                                            </View>
                                            </View>
                                    </View>
                                    </Body>
                            </CardItem>
                            </Card>
                        )
                    })}
                    </ScrollView>
                </Content>
               
                <TouchableHighlight  style={styles.buttonfloat} onPress={()=>this.props.navigation.navigate('Crear')}>
                    <Image
                    style={{width: 70, height: 70}}
                    source={require('../../assents/img/button/boton-agregar.png')}
                    />
                </TouchableHighlight>
                <DropdownAlert ref={ref => this.dropdown = ref} />
            </Container>
        )   
    }
} 

const styles = StyleSheet.create({
    title:{
      color:Color.primary,fontSize: 16,
      fontWeight: 'bold',
    },
    body:{
      fontSize: 16,
      fontWeight: 'bold',
    },
    info:{
      color:'blue',
      fontSize: 16,
      fontWeight: 'bold',
    },
    warning:{
    color:'red',
    fontSize: 16,
    fontWeight: 'bold',
    },
    warning:{
    color:'green',
    fontSize: 16,
    fontWeight: 'bold',
    },
    buttonfloat:{
        width: 50,  
        height: 50,   
        borderRadius: 30,                     
        position: 'absolute',                                          
        bottom: 30,                                                    
        right: 30, 
    }
})
export default Solicitudes
