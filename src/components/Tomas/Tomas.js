
import  React,{ Component } from 'react'
import  {StyleSheet,View,SafeAreaView,ScrollView,Text,TextInput,TouchableHighlight,Image} from 'react-native'
import {Container,Content,Card,CardItem,Body,Icon} from 'native-base'
import Color from '../../../config/color'
import API from '../../../utils/measurer/apiMeasurer'

import CustomHeader from '../layouts/CustomHeader'
import  DropdownAlert from 'react-native-dropdownalert'
 class Tomas extends Component{
    
    constructor(){
        super()
        this.state={dataTomas:[]}
        
    }

    async componentDidMount(){
        this.data()
    }

    async componentDidMount(){
        this.data()
    }

    async data(){
        const data = await API.getList()
        if (data[0] === 200) {
            console.log(data[1])
            this.setState({dataTomas:data[1]})
        } else {
            this.dropdown.alertWithType('error', 'Error '+data[0], ''+data[1].message);
        }
   
    }
   
    render(){
        return (   
            <Container>
            <CustomHeader title="Tomas" porcentaje="11%" actionEvent={() => this.props.navigation.openDrawer()} ></CustomHeader>
            <DropdownAlert ref={ref => this.dropdown = ref} />
                <ScrollView style={{backgroundColor:'#fff',padding:15}}>
                    
                {this.state.dataTomas.map((medidor, key) => {
                        return (
                            <Card key={medidor.id} >
                            <CardItem header style={{justifyContent: "center",alignItems: "center"}}>
                                <Text style={{color:Color.primary,fontSize:20}}> {medidor.name} </Text>
                            </CardItem>
                            <CardItem button onPress={()=>this.props.navigation.navigate('Add',{medidor:medidor})}>
                                    <Body>
                                    <View style={{flex: 1, flexDirection: 'row'}}>
                                            <View style={{width: '80%'}}>
                                                
                                                <Text>
                                                    <Text style={styles.body}>Última toma:</Text><Text style={styles.color}>{medidor.reading.lastRecord}</Text>
                                                </Text>
                                                <Text>
                                                    <Text style={styles.body}>Último valor:</Text><Text style={styles.color}>{medidor.reading.lastValue}</Text>
                                                </Text>
                                                <Text>
                                                    <Text style={styles.body}>Dirección:</Text><Text style={styles.color}> {medidor.address}</Text>
                                                </Text>
                                                <Text>
                                                    <Text style={styles.body}>Acumulado mensual Activa:</Text><Text style={styles.color}> {medidor.reading.totalConsumption}</Text>
                                                </Text>
                                            </View>
                                            <View style={{width: '20%' }} >
                                            <View style={{flex:1,alignItems:'center',justifyContent:'center', marginLeft:30}}>
                                            
                                                <Text style={{color:Color.success,fontSize:30,fontWeight: 'bold'}}> + </Text>
                                                           
                                            </View>
                                            </View>
                                    </View>
                                    </Body>
                            </CardItem>
                            </Card>      
                            )
                    })}

                </ScrollView>
                
            </Container>
        
            
        )
    }
}
export default Tomas
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
        bottom: 30,                                                    
        right: 30, 
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
})

