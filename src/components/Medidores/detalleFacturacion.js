import  React,{ Component } from 'react'
import {StyleSheet,Text,View,ScrollView,TouchableHighlight,Image, FlatList,TouchableOpacity, Button} from "react-native";
import {Container,Content,Card,CardItem,Body,Icon, } from 'native-base'
import SearchBar from 'react-native-searchbar';
import CustomHeader from '../layouts/CustomHeader'
import Color from '../../../config/color'
import API from  '../../../utils/requests/apiRequests'
import Date from 'react-native-vector-icons/MaterialIcons';
import Location from 'react-native-vector-icons/EvilIcons';
import Energy from 'react-native-vector-icons/SimpleLineIcons';
import Next from 'react-native-vector-icons/Ionicons';
import Value from 'react-native-vector-icons/Entypo';
import Loader from '../loader'
import moment from "moment";


 class DetalleFacturacion extends Component{
    
    constructor(){
        super()
        this.state={
            data:[],
            copyData:[],
            searchBar:false,
            
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
      
     
    
    

    
    stateChange = (stateToChange, value) => {
        this.state[stateToChange] = value;
        console.log(this.state)
    };
    
    renderItem = ({item}) =>{
        
        return(
        
        <View style={[{backgroundColor:"white",padding:10,marginBottom:5}]}>

        </View>
       
        )
    }

    historicosFacturas = () => {
        const { navigation } = this.props;
        const historicos = navigation.getParam('data2', 'NO-DATA');
        
        this.props.navigation.navigate('HistoricosFacturas', {
            data: historicos,
            
          });
    }
   

    
   
    render(){
        const { navigation } = this.props;
        const detalleFacturacion = navigation.getParam('data', 'NO-DATA');
        const historicos = navigation.getParam('data2', 'NO-DATA');
        console.log("Facturacion")
        console.log(detalleFacturacion)
        
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
                
                <CustomHeader  title="Detalle Facturación" porcentaje="16%" 
                back={true}
                search={false} 
                actionEvent={() => this.props.navigation.goBack()} 
                searchAction= {()=> this.setState({
                    searchBar:true
                })}  
                ></CustomHeader>
                <Content contentContainerStyle={{flex:1,padding:10
                }}
                scrollEnabled={false}
                >

                <View style={[{backgroundColor:"white",padding:10,marginBottom:10},styles.sombra]}>
                    <View>
                        <Text style={{color:'rgb(99,99,99)',fontWeight:"bold", fontSize:17,}}>{`Mes Actual`}</Text>
                        <Text style={{color:'rgb(99,99,99)', fontSize:15,marginTop:5,marginBottom:5}}>{`Factura # ${detalleFacturacion.data[0].numeroFactura}`}</Text>
                        <View style={{flexDirection:"row",}}>
                            <Value name="dot-single" size={25} color={Color.blue}/>
                            <Text style={{color:'rgb(99,99,99)', fontSize:15,marginTop:5}}>{`Fecha Expedición : `}</Text>
                            <Text style={{color:'rgb(99,99,99)', fontSize:15,marginTop:5}}>{`${detalleFacturacion.data[0].fechaLectura}`}</Text>

                        </View>
                        <View style={{flexDirection:"row"}}>
                            <Value name="dot-single" size={25} color={Color.green}/>
                            <Text style={{color:'rgb(99,99,99)', fontSize:15,marginTop:5}}>{`Fecha Facturación : `}</Text>
                            <Text style={{color:'rgb(99,99,99)', fontSize:15,marginTop:5}}>{`${detalleFacturacion.data[0].fechaFacturacion}`}</Text>

                        </View>
                        <View style={{flexDirection:"row"}}>
                            <Value name="dot-single" size={25} color={Color.red}/>
                            <Text style={{color:'rgb(99,99,99)', fontSize:15,marginTop:5}}>{`Fecha Vencimiento : `}</Text>
                            <Text style={{color:'rgb(99,99,99)', fontSize:15,marginTop:5}}>{`${detalleFacturacion.data[0].fechaVencimiento}`}</Text>

                        </View>


                        

                    </View>
                    

        
        
                </View>
                <View style={[{backgroundColor:"white",padding:10,marginBottom:10},styles.sombra]}>
                    <Text style={{color:'rgb(99,99,99)',fontWeight:"bold", fontSize:17,}}>{`Saldo A Pagar`}</Text>
                    <Text style={{color:'rgb(99,99,99)',fontSize:15,marginTop:5}}>{`${new Intl.NumberFormat().format(historicos.data[0].valorCancelado)}`}</Text>


                </View>
                <TouchableOpacity style={[{backgroundColor:"white",padding:10,marginBottom:5,
                flexDirection:"row",alignItems:"center",
                justifyContent:"center"},styles.sombra]} onPress={()=>{this.historicosFacturas()}}>
                    <View style={{flex:2,}}>
                        <Text style={{color:'rgb(99,99,99)',fontWeight:"bold", fontSize:17}}>{`Histórico De Facturas`}</Text>

                        
                                    
                    </View>
                    <View style={{alignItems:"flex-end",flex:1}}>
                    <Next name="ios-arrow-forward" size={40} color={Color.primary}/>
                    </View>
                </TouchableOpacity>
                
                {/* <ScrollView style={[{backgroundColor:"white",padding:10,marginBottom:5},styles.sombra]}>
                    <FlatList
                            data={historicos.data}
                            renderItem={this.renderItem}
                            //keyExtractor={item => item.id.toString()}
                        />
                </ScrollView> */}
                
                    

                
                    
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
        borderRadius: 4,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        /* shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 1, */
    }
})


export default DetalleFacturacion; 



