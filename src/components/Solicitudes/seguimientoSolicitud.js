import  React,{ Component } from 'react'
import {StyleSheet,Text,View,ScrollView,TouchableHighlight,Image, FlatList,TouchableOpacity, Button} from "react-native";
import {Container,Content,Card,CardItem,Body,Icon, } from 'native-base'
import SearchBar from 'react-native-searchbar';
import CustomHeader from '../layouts/CustomHeader'
import Color from '../../../config/color'
import API from  '../../../utils/requests/apiRequests'
import moment from "moment";
import FloatButton from '../floatButton'
import UserIcon from 'react-native-vector-icons/FontAwesome';

 class SeguimientoSolicitud extends Component{
    
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
            <View style={{backgroundColor:Color.primary,
                padding:10,borderRadius:10,alignSelf:"flex-end",marginLeft:"10%",marginTop:5}}>
                    
                    <Text style={{color:"white",fontSize:16,textAlign:"left",marginBottom:5}}>{item.description}</Text>
                    <View style={{alignSelf:"flex-end"}}>
                        <Text style={{fontSize:12,color:"white"}}>{moment(item.dateExecution).format("YYYY-MM-DD")}</Text>
                    </View>
                </View>
        )
    }
    
//this.searchBar.show()
    render(){
        const { navigation } = this.props;
        const dataSolicitud = navigation.getParam('dataSolicitud', 'NO-DATA');
        console.log(dataSolicitud)
        console.log(dataSolicitud.pqr_tracings)
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
                            this.setState({data:this.state.copyData,
                            searchBar:false})}}
                            />
                    ): (
                        null
                    )
                }
                
                <CustomHeader  title={dataSolicitud.title} porcentaje="16%" 
                search={true} 
                back={true}
                actionEvent={() => this.props.navigation.goBack()}
                searchAction= {()=> this.setState({
                    searchBar:true
                })}  
                ></CustomHeader>
                <Content contentContainerStyle={{flex:1,padding:5
                }}
                >
                    
                    <ScrollView style={{flex:1,width:'100%',}}> 
                        <View style={{backgroundColor:Color.blue,
                        padding:10,borderRadius:10,alignSelf:"flex-start",marginRight:"10%"}}>
                            <View style={{flexDirection:"row"}}>
                                <View style={{justifyContent:"center", alignContent:"center",marginRight:5,marginBottom:5}}>
                                    <UserIcon name='user' size={14} color={'#FFF'}/>
                                </View>
                                <View style={{justifyContent:"center", alignContent:"center",marginRight:5,marginBottom:5}}>
                                <Text style={{color:"black",fontWeight:"bold"}}>{`${dataSolicitud.usuario}: ${dataSolicitud.title}`}</Text>
                                </View>
                                
                            </View>
                            <Text style={{color:"white",fontSize:16,textAlign:"left",marginBottom:5}}>{dataSolicitud.description}</Text>
                            <View style={{alignSelf:"flex-end"}}>
                                <Text style={{fontSize:12,color:"white"}}>{moment(dataSolicitud.dateInit).format("YYYY-MM-DD")}</Text>
                            </View>
                        </View>
                        {/* <View style={{backgroundColor:Color.primary,
                        padding:10,borderRadius:10,alignSelf:"flex-end",marginLeft:"10%",marginTop:5}}>
                            
                            <Text style={{color:"white",fontSize:16,textAlign:"left",marginBottom:5}}>{dataSolicitud.description}</Text>
                            <View style={{alignSelf:"flex-end"}}>
                                <Text style={{fontSize:12,color:"white"}}>{moment(dataSolicitud.dateInit).format("YYYY-MM-DD")}</Text>
                            </View>
                        </View> */}
                        <FlatList
                            data={dataSolicitud.pqr_tracings}  
                            renderItem={this.renderItem}
                            keyExtractor={item => item.tracingId}
                            
                        />
    
                        
                    
                    </ScrollView>
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
        elevation: 2,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
       
    }
})
export default SeguimientoSolicitud;

