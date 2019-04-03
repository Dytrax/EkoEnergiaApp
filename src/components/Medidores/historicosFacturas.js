import  React,{ Component } from 'react'
import {StyleSheet,Text,View,ScrollView,TouchableHighlight,Image, FlatList,TouchableOpacity, Button} from "react-native";
import {Container,Content,Card,CardItem,Body,Icon, } from 'native-base'
import SearchBar from 'react-native-searchbar';
import CustomHeader from '../layouts/CustomHeader'
import Color from '../../../config/color'
import API from  '../../../utils/requests/apiRequests'
import moment from "moment";


 class HistoricosFacturas extends Component{
    
    constructor(){
        super()
        this.state={
            data:[],
            copyData:[],
            searchBar:false
        }
        this._handleResults = this._handleResults.bind(this);
        
    }
    _handleResults(results) {
        console.log(results)
        console.log(results.length)
        if (results.length <= 0){
            results = this.state.copyData
        }
        this.setState({data:results})
    
      }
      
    async componentDidMount(){
       
    }

    
    

    renderItem = ({item}) =>{
        return(
        <TouchableOpacity 
        >
        <View style={[{backgroundColor:"white",padding:10,marginBottom:5},styles.sombra]}>
            <View style={{flexDirection:"row",flex:1}}>
                <View style={{flex:1,alignSelf:"flex-start"}}>
                        <Text style={{color:'rgb(99,99,99)',fontWeight:"bold", fontSize:16,}}>Fecha De Pago</Text>
                </View>
                                        
                <View style={{flex:1}}>
                    <Text style={{color:'rgb(99,99,99)', fontSize:16,alignSelf:"flex-end"}}>{item.fecha}</Text>
                </View>
                                                                
                                    {/* <Text style={{color:Color.red,fontSize:15}}>{`Desviacion `}</Text> */}                           
            </View>
            <View style={{flexDirection:"row",flex:1,marginTop:10}}>
                <View style={{flex:1,alignSelf:"flex-start"}}>
                        <Text style={{color:'rgb(99,99,99)',fontWeight:"bold", fontSize:16,}}>Consumo</Text>
                </View>
                                        
                <View style={{flex:1}}>
                    <Text style={{color:'rgb(99,99,99)', fontSize:16,alignSelf:"flex-end"}}>{`${new Intl.NumberFormat().format(item.consumo)} kWh`}</Text>
                </View>
                                                                
                                    {/* <Text style={{color:Color.red,fontSize:15}}>{`Desviacion `}</Text> */}                           
            </View>
            <View style={{flexDirection:"row",flex:1,marginTop:10}}>
                <View style={{flex:1,alignSelf:"flex-start"}}>
                        <Text style={{color:'rgb(99,99,99)',fontWeight:"bold", fontSize:16,}}>Valor Energía</Text>
                </View>
                                        
                <View style={{flex:1}}>
                    <Text style={{color:'rgb(99,99,99)', fontSize:16,alignSelf:"flex-end"}}>{`$ ${new Intl.NumberFormat().format(item.valorEnergia)} `}</Text>
                </View>
                                                                
                                    {/* <Text style={{color:Color.red,fontSize:15}}>{`Desviacion `}</Text> */}                           
            </View>
            <View style={{flexDirection:"row",flex:1,marginTop:10}}>
                <View style={{flex:1,alignSelf:"flex-start"}}>
                        <Text style={{color:'rgb(99,99,99)',fontWeight:"bold", fontSize:16,}}>Valor Cancelado</Text>
                </View>
                                        
                <View style={{flex:1}}>
                    <Text style={{color:'rgb(99,99,99)', fontSize:16,alignSelf:"flex-end"}}>{`$ ${new Intl.NumberFormat().format(item.valorCancelado)}`}</Text>
                </View>
                                                                
                                    {/* <Text style={{color:Color.red,fontSize:15}}>{`Desviacion `}</Text> */}                           
            </View>
        </View>
        </TouchableOpacity>
        )
    }
    
//this.searchBar.show()
    render(){
        const { navigation } = this.props;
        const historicos = navigation.getParam('data', 'NO-DATA');
        console.log("historicos")
        console.log(historicos)
        return ( 
            <Container style={{backgroundColor:"rgb(255,255,255)"}}>
                {
                    this.state.searchBar ? (
                        <SearchBar
                            ref={(ref) => this.searchBar = ref}
                            data={this.state.copyData}
                            handleResults={this._handleResults}
                            showOnLoad
                            placeholder={"Buscar"}
                            onBack = {()=> {console.log("Atras presionado")
                            //this.searchBar.hide()
                            this.setState({data:this.state.copyData,
                            searchBar:false})}}
                            />
                    ): (
                        null
                    )
                }
                
                <CustomHeader  title="Historico De Facturas" porcentaje="16%" 
                back={true}
                search={true} 
                actionEvent={() =>  this.props.navigation.goBack()} 
                searchAction= {()=> this.setState({
                    searchBar:true
                })}  
                ></CustomHeader>
                <Content contentContainerStyle={{flex:1,padding:5
                }}
                >
                    
                    
                        <FlatList
                            data={historicos.data}
                            renderItem={this.renderItem}
                            keyExtractor={item => item.fecha.toString()}
                            
                        />
    
                        
                    
                    
                </Content>
                
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
    },
    sombra:{
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        //backgroundColor: '#fff', 
        elevation: 2,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        /* shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 1, */
    }
})
export default HistoricosFacturas

