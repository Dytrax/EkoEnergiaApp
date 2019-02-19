import  React,{ Component } from 'react'
import  {StyleSheet,Text,View,AsyncStorage,} from 'react-native'

import {Content,Card,CardItem,Body,Icon} from "native-base";
import Color from '../../../../config/color'
import DB from '../../../../utils/datastore/function'



function BodyRequest (props){

  stateChange = async (data) => {
    try{
        await AsyncStorage.setItem('solicitudData',JSON.stringify(data))
        await AsyncStorage.getItem('solicitudData').then(console.log)
         const { navigation } = this.props;
         const itemId = navigation.getParam('id');
         console.log(itemId)
    }catch(error){
      console.error(error)
    } 
};

  
        // 1 creada 2 proceso 0 cerrada 
        let request = props.data.map(function(request,index){

                let estado = 'Creada'
                let color = 'styles.info'
                if (request.state ==0)
                {estado='Cerrada';color='styles.warning'}
                if (request.state ==2)
                {estado='Proceso';color='styles.sucess'}
                

                return (
                 
                        <Card key={request.id}>
                        <CardItem>
                                <Body>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                        <View style={{width: '80%'}}>
                                            <Text style={styles.title}>Titulo : {request.title}</Text>
                                            <Text>
                                            <Text style={styles.body}>Fecha :</Text><Text>{ request.dateInit}</Text>
                                            </Text>
                                            <Text>
                                            <Text style={styles.body}>Estado :</Text><Text style={color}> {estado}</Text>
                                            </Text>
                                                
                                        </View>
                                        <View style={{width: '20%' }} >
                                          <View style={{flex:1,alignItems:'center',justifyContent:'center', marginLeft:30}}>
                                          
                                          <Icon onPress={ props.action} name="eye" style={{color:Color.success}}/>
                                          
                                          </View>
                                        </View>
                                </View>
                                </Body>
                        </CardItem>
                        </Card>
                )  
        })
        return(
          
                <Content>
                        {request}
                </Content>
        )
       
    
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
        }
})
export default BodyRequest