import  React,{ Component } from 'react'
import {StyleSheet,Text,View,ScrollView,TouchableHighlight,Image, FlatList,TouchableOpacity, Button} from "react-native";
import {Container,Content,Card,CardItem,Body,Icon, } from 'native-base'
import SearchBar from 'react-native-searchbar';
import CustomHeader from '../layouts/CustomHeader'
import Color from '../../../config/color'
import API from  '../../../utils/requests/apiRequests'
import moment from "moment";


 class Notificaciones extends Component{
    
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
        var notificacionesData = await API.getListNotificaciones()
        console.log(notificacionesData)
        if (notificacionesData[0]==200){
            this.setState({
                data:notificacionesData[1]
            })
        }
        
    }

    
    

    renderItem = ({item}) =>{
        console.log(item.dateNotification)
        return(
        <TouchableOpacity 
        >
        <View style={[{backgroundColor:"white",padding:10,marginBottom:5},styles.sombra]}>
        <View style={{alignSelf:"flex-start",}}>
                
                    <Text style={{color:'rgb(99,99,99)',fontWeight:"bold", fontSize:16,}}>{`Medidor #${item.measurerCode}`}</Text>
                    <Text style={{color:item.color,fontSize:15}}>{`Desviacion ${item.percentage}%`}</Text>
                
                
                
                <View style={{marginTop:10,marginBottom:10}}>
                <Text style={{color:'rgb(99,99,99)', fontSize:15,}}>{`${item.message}`}</Text>
                </View>
                <View style={{alignSelf:"flex-end"}}>
                    <Text style={{color:'rgb(133,133,133)',fontSize:12,}}>{`${item.origin} - ${ moment(item.dateNotification.slice(0, 10)).format("MMMM Do YYYY, h:mm:ss a")}`}</Text>
                </View>
                <View style={{borderBottomColor: item.color,borderBottomWidth: 1,marginTop:5}}/>
            
        </View>
    
        </View>
        </TouchableOpacity>
        )
    }
    
//this.searchBar.show()
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
                
                <CustomHeader  title="Notificaciones" porcentaje="16%" 
                search={true} 
                actionEvent={() => this.props.navigation.openDrawer()} 
                searchAction= {()=> this.setState({
                    searchBar:true
                })}  
                ></CustomHeader>
                <Content contentContainerStyle={{flex:1,padding:5
                }}
                >
                    
                    <ScrollView style={{flex:1,width:'100%',}}> 
                        <FlatList
                            data={this.state.data}
                            renderItem={this.renderItem}
                            keyExtractor={item => item.id.toString()}
                            
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
export default Notificaciones

