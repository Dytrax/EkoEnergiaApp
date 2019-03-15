import  React,{ Component } from 'react'
import {StyleSheet,Text,View,ScrollView,TouchableHighlight,Image, FlatList,TouchableOpacity, Button} from "react-native";
import {Container,Content,Card,CardItem,Body,Icon, } from 'native-base'
import SearchBar from 'react-native-searchbar';
import CustomHeader from '../layouts/CustomHeader'
import Color from '../../../config/color'
import API from  '../../../utils/requests/apiRequests'
import moment from "moment";
import FloatButton from '../floatButton'
import * as actions from '../../actionsCreators/actions'
import {connect} from 'react-redux'

 class SeleccionarContrato extends Component{
    
    constructor(){
        super()
        this.state={
            data:[],
            copyData:[],
            buscador:false
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
        /* const typeSolicitudes = this.props.navigation.getParam('typeSolicitudes', 'NO-TYPE');
        console.log(typeSolicitudes) */
    }

    

    renderItem = ({item}) =>{
        
        return(
        <TouchableOpacity onPress={()=>{this.reduxerStateChaange(item)
        this.props.navigation.goBack()}}>
        <View style={[{flexDirection:"row",backgroundColor:"white",marginBottom:5,padding:10},styles.sombra]}>
        <View style={{alignSelf:"center",width:"90%"}}>
            
            <Text style={{ }}>{`${item.number}`}</Text>
            
        </View>
        
            
            {
                this.props.contratos.id === item.id ? (
                    <View style={{justifyContent:"center",alignItems:"center",width:"10%"}}>
                        <Icon name={'ios-checkmark'} style={{color:Color.primary}}/>
                    </View>
                ) :  (null)
            }
            
        </View>
        </TouchableOpacity>
        )
    }
    
    reduxerStateChaange(item){
        this.props.setContrato({
            id:item.id,
            number:item.number
        })
    }

    render(){
        const { navigation } = this.props;
        const contratos = navigation.getParam('contratos', 'NO-CONTRACT');
        console.log("contratos")
        console.log(contratos)
        return ( 
            <Container style={{backgroundColor:"rgb(255,255,255)"}}>
                {
                    this.state.buscador ? (
                        <SearchBar
                        ref={(ref) => this.searchBar = ref}
                        data={this.state.copyData}
                        handleResults={this._handleResults}
                        showOnLoad
                        placeholder={"Buscar"}
                        onBack = {()=> {console.log("Atras presionado")
                        this.searchBar.hide()
                        this.setState({data:this.state.copyData})}}
                        />
                    ) : (null)
                }
                
                <CustomHeader  title="Seleccionar" porcentaje="16%" 
                search={true} 
                back={true}
                actionEvent={() => this.props.navigation.goBack()} 
                searchAction= {()=>//this.searchBar.show()
                this.setState({
                    buscador:true
                })
                }  
                ></CustomHeader>
                <Content contentContainerStyle={{flex:1,padding:5
                }}
                >
                    
                    <ScrollView style={{flex:1,width:'100%',}}> 
                    {/* <TouchableOpacity onPress={()=>{this.reduxerStateChaange()}}>
                        <Text>Boton Reducer Example</Text>
                    </TouchableOpacity> */}
                    

                        <FlatList
                            data={contratos}
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
       
    }
})
const mapStateToProps = state => {
    return {
        contratos : state.contrato,
    }
}
export default connect(mapStateToProps,actions)(SeleccionarContrato); 
