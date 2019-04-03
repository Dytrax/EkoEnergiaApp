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


 class Medidores extends Component{
    
    constructor(){
        super()
        this.state={
            data:[],
            copyData:[],
            searchBar:false,
            modalLoading:false
            
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
      
     componentDidMount = async () =>{
        let Medidores = await API.getMedidoresDataFacturacion()
        if (Medidores[0]===200){
            this.setState({
                data:Medidores[1]
            })
            console.log(Medidores[1])
        }
    }

    
    

    
    stateChange = (stateToChange, value) => {
        this.state[stateToChange] = value;
        console.log(this.state)
    };

    goToDetallesFacturación = async (item) =>{
        this.setState({
            modalLoading:true
        })
        let detalle_factura = await API.getDetalleFacturacion(item.contractNumber)
        let historicos = await API.getHistoricos(item.contractNumber)
        if (detalle_factura[0]===200 && historicos[0]===200){
            console.log(detalle_factura[1])
            console.log(historicos[1])
            this.setState({
                modalLoading:false
            })
            this.props.navigation.navigate('DetalleFacturacion', {
                data: detalle_factura[1],
                data2: historicos[1]
              });
        }
        
        
    }
    
    renderItem = ({item}) =>{
        
        return(
        <TouchableOpacity 
        onPress={()=>{
            this.goToDetallesFacturación(item)
        }}
        >
        <View style={[{backgroundColor:"white",padding:10,marginBottom:5},styles.sombra]}>
        <View style={{flexDirection:"row",}}>
            <View style={{alignSelf:"flex-start",flex:2}}>
                
                <Text style={{color:'rgb(99,99,99)',fontWeight:"bold", fontSize:16,}}>{`Nombre Medidor #${item.name}`}</Text>
                <Text style={{color:'rgb(99,99,99)',fontWeight:"bold", fontSize:16,}}>{`Contrato #${item.contractNumber}`}</Text>
                            
            </View>
            <View style={{alignItems:"flex-end",flex:1}}>
            <Next name="ios-arrow-forward" size={40} color={Color.primary}/>
            </View>
        </View>

        
        <View style={{alignSelf:"flex-start",marginTop:10,marginBottom:5,flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                <Energy name="energy" size={25} color="rgb(252,196,12)"/>
                <Text style={{color:'rgb(99,99,99)', fontSize:15,marginLeft:5}}>{`Activa : ${new Intl.NumberFormat().format(item.reading.totalConsumption)} kWh`}</Text>
        </View>  
        <View style={{alignSelf:"flex-start",marginTop:10,marginBottom:5,flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                <Energy name="energy" size={25} color="rgb(252,196,12)"/>
                <Text style={{color:'rgb(99,99,99)', fontSize:15,marginLeft:5}}>{`Reactiva : ${new Intl.NumberFormat().format(item.reading.totalConsumptionReactive)} kVArh`}</Text>
        </View>  
        <View style={{alignSelf:"flex-start",marginTop:10,marginBottom:5,flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                <Date name="date-range" size={25} color={Color.blue}/>
                <Text style={{color:'rgb(99,99,99)', fontSize:15,marginLeft:5}}>{`Fecha ultima toma : ${item.reading.lastRecord.slice(0,10)}`}</Text>
        </View>
        <View style={{alignSelf:"flex-start",marginTop:10,marginBottom:5,flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                <Value name="dot-single" size={25} color="#900"/>
                <Text style={{color:'rgb(99,99,99)', fontSize:15,marginLeft:5}}>{`Valor ultima toma : ${item.reading.lastValue}`}</Text>
        </View>
        <View style={{alignSelf:"flex-start",marginTop:10,marginBottom:5,flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                <Location name="location" size={30} color={Color.green}/>
                <Text style={{color:'rgb(99,99,99)', fontSize:15,marginLeft:5}}>{`${item.address}`}</Text>
        </View>  
        </View>
        </TouchableOpacity>
        )
    }
   

    
   
    render(){
        
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
                
                <CustomHeader  title="Medidores" porcentaje="16%" 
                search={false} 
                actionEvent={() => this.props.navigation.openDrawer()} 
                searchAction= {()=> this.setState({
                    searchBar:true
                })}  
                ></CustomHeader>
                <Content contentContainerStyle={{flex:1,padding:10
                }}
                >
                <FlatList
                            data={this.state.data}
                            renderItem={this.renderItem}
                            keyExtractor={item => item.id.toString()}
                            
                        />
                    
                <Loader loading={this.state.modalLoading} title={"Consultando..."}/>

                
                    
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


export default Medidores; 



