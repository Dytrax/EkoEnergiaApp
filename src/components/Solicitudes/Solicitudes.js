import  React,{ Component } from 'react'
import {StyleSheet,Text,View,ScrollView,TouchableHighlight,Image, FlatList,TouchableOpacity, Button} from "react-native";
import {Container,Content,Card,CardItem,Body,Icon, } from 'native-base'
import SearchBar from 'react-native-searchbar';
import CustomHeader from '../layouts/CustomHeader'
import Color from '../../../config/color'
import API from  '../../../utils/requests/apiRequests'
import moment from "moment";
import FloatButton from '../floatButton'


 class Solicitudes extends Component{
    
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
        /* this.searchBar.hide() */
        var solicitudData = await API.getList()
        let solicitudAbiertas = []
        let solicitudCerradas = []
        let data = []
        solicitudData = solicitudData[1].map(s=>{
            if(s.state===0){
                s.estado = "Cerrada"
                s.color = "rgb(186,21,32)"
                solicitudCerradas.push(s)
            } else{
                s.estado = "Abierta"
                s.color = "rgb(48,178,32)"
                solicitudAbiertas.push(s)
                
            }
            data.push(s)
        })
        
        this.setState({data:solicitudAbiertas,
            copyData:solicitudAbiertas})
    }

    seguimientoSolicitud(item){
        this.props.navigation.navigate('Seguimiento', {
            dataSolicitud: item
          });
    }
    

    renderItem = ({item}) =>{
        return(
        <TouchableOpacity onPress={()=>{this.seguimientoSolicitud(item)}}>
        <View style={[{flexDirection:"row",backgroundColor:"white",marginBottom:5,padding:10},styles.sombra]}>
        <View style={{alignSelf:"center",width:"70%"}}>
            <View style={{}}>
                <Text style={{color:Color.second,fontSize:15,}}>{`Proceso #${item.process_number}`}</Text>
                <Text style={{color:'rgb(133,133,133)',fontSize:15,}}>{`${item.usuario} - ${ moment(item.dateInit).format("YYYY-MM-DD")}`}</Text>
            </View>
            <View style={{marginTop:10}}>
                <Text style={{color:'rgb(99,99,99)',fontWeight:"bold", fontSize:16,}}>{`${item.title}`}</Text>
            </View>
        </View>
        <View style={{justifyContent:"center",alignItems:"center",width:"30%"}}>
            <Text style={{color:item.color}}>{item.estado}</Text>
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
                
                <CustomHeader  title="Solicitudes" porcentaje="16%" 
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
                <FloatButton add={()=>this.props.navigation.navigate('Crear')}/>
                {/* <TouchableHighlight  style={styles.buttonfloat} onPress={()=>this.props.navigation.navigate('Crear')}>
                    <Image
                    style={{width: 70, height: 70}}
                    source={require('../../assents/img/button/boton-agregar.png')}
                    />
                </TouchableHighlight> */}
                {/* <DropdownAlert ref={ref => this.dropdown = ref} /> */}
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
export default Solicitudes

