import  React,{ Component } from 'react'
import  {StyleSheet,View,SafeAreaView,ScrollView} from 'react-native'
import {Text,Card,CardItem,Body,Icon,Button} from 'native-base'
import Color from '../../../config/color'
import CustomHeader from '../layouts/CustomHeader'


class Detalle extends Component{

    constructor(props) {
        super(props)
    }
     render(){
      
        const { navigation } = this.props;
        const itemId = navigation.getParam('data');
        console.log(itemId)
        return (
            
            <ScrollView style={{backgroundColor:'#fff',padding:15}}>
            <SafeAreaView >
                <View> 
                    <Card>
                        <CardItem header >
                            <Text style={{color:Color.primary}}> {itemId.title} </Text>
                        </CardItem>

                        <CardItem header style={{backgroundColor:'#c6c6c650'}}>
                            <Text style={{color: Color.primary}}>
                              Apertura {itemId.dateInit}
                            </Text>
                        </CardItem>

                        <CardItem header>
                            <Text style={{color:Color.tex_color_grid,fontWeight: 'bold'}} >Solicitud</Text>
                        </CardItem>
                        <CardItem style={{marginTop:'-5%'}}>
                            <Text style={{color:Color.tex_color_grid}} >{itemId.description}</Text>
                        </CardItem>
                   </Card>
                   
                   {itemId.pqr_tracings.map(data => 
                        <Card  key={data.id} >
                            <CardItem header style={{backgroundColor:'#8DC641'}} >
                                    {data.profileId == '5'? <Text style={{color:"#fff"}}> Ejecutivo cuenta</Text>: null }
                                    {data.profileId == '6'? <Text style={{color:"#fff"}}> Administrador</Text>: null }
                            </CardItem>

                            <CardItem header style={{backgroundColor:'#c6c6c650'}}>
                                <Text style={{}}>
                                  {data.dateExecution}
                                </Text>
                            </CardItem>

                            <CardItem  style={{backgroundColor:'#8DC641'}} >
                                <Text style={{color:'#fff'}} >{data.description}</Text>
                            </CardItem>
                         </Card>
                    )}  
                </View> 
            </SafeAreaView>
            </ScrollView>
            
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

export default Detalle 