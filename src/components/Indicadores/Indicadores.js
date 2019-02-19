import  React,{ Component } from 'react'
import {View,Text,StyleSheet,Image,ScrollView} from "react-native";
import { Container,Header, Body, Title, Content,Card,Left, Icon, Right } from 'native-base'

import CustomHeader from '../layouts/CustomHeader'
import Color from '../../../config/color'
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import PureChart from 'react-native-pure-chart';


 class Indicadores extends Component{
    
    constructor(){
        super()
        
    }
   

    
   
    render(){
        /*let sampleData = [
            {x: '2018-01-01', y: 30},
            {x: '2018-01-02', y: 200},
            {x: '2018-01-03', y: 170},
            {x: '2018-01-04', y: 250},
            {x: '2018-01-05', y: 10}
        ]*/
        
          let sampleData = [
                {
                seriesName: 'series1',
                data: [
                    {x: '2018-02-01', y: 30},
                    {x: '2018-02-02', y: 200},
                    {x: '2018-02-03', y: 170},
                    {x: '2018-02-04', y: 250},
                    {x: '2018-02-05', y: 10}
                ],
                color: '#297AB1'
                },
                {
                seriesName: 'series2',
                data: [
                    {x: '2018-02-01', y: 20},
                    {x: '2018-02-02', y: 100},
                    {x: '2018-02-03', y: 140},
                    {x: '2018-02-04', y: 550},
                    {x: '2018-02-05', y: 40}
                ],
                color: 'yellow'
                }
            ]
         
      
        return ( 
            
            <Container>
                <CustomHeader title="Indicadores"  porcentaje="13%" actionEvent={() => this.props.navigation.openDrawer()} ></CustomHeader>
                <Content contentContainerStyle={{flex:1,alignItems:'center',justifyContent:'center'}}>
                
                    <View style={{width:'100%',height:70,backgroundColor:'#81818130'}}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{width: "60%", height: 70}} >
                                <Text style={{paddingTop:"8%",marginLeft:35,fontSize: 20}}>
                                    Notificaciones   
                                </Text>
                            </View>
                            
                            <View style={{width: "40%", height: 70,justifyContent: 'center',alignItems: 'center'}}>
                                <Image style={{width:40,height:40}}
                                    source={require('../../../src/assents/img/button/ic-alerta-2-naranja.png')}
                                />
                            </View>
                        </View>
                     </View>

                     
                <ScrollView style={{flex:1,width:'100%',padding:15}}> 
                    <Card style={{marginTop:30}}>
                        <View style={{marginTop:20,justifyContent: 'center',alignItems: 'center'}}>
                        <PureChart data={sampleData} type='line'  />
                        </View>
                    </Card>
                </ScrollView>
                  
                 
                </Content>
            </Container>
        )   
    }
}
export default Indicadores
const styles = StyleSheet.create({ 
linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 28,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },})