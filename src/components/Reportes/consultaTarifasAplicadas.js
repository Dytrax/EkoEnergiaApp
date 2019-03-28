import  React,{ Component } from 'react'
import {StyleSheet,Text,View,ScrollView,TouchableHighlight,Image, FlatList,TouchableOpacity, Button} from "react-native";
import {Container,Content,Card,CardItem,Body,Icon, } from 'native-base'
import SearchBar from 'react-native-searchbar';
import CustomHeader from '../layouts/CustomHeader'
import Color from '../../../config/color'
import LinearGradient from 'react-native-linear-gradient';


 class ConsultaTA extends Component{
    
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

    

    

    render(){
        const { navigation } = this.props;
        const dataTA = navigation.getParam('data', 'NO-DATA')[0];
        console.log("dataTA")
        console.log(dataTA)
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
                
                <CustomHeader  title="Resultado" porcentaje="16%" 
                search={false} 
                back={true}
                actionEvent={() => this.props.navigation.goBack()} 
                searchAction= {()=>//this.searchBar.show()
                this.setState({
                    buscador:true
                })
                }  
                ></CustomHeader>
                <Content contentContainerStyle={{flex:1,padding:10
                }}
                >
                    
                    <ScrollView style={{flex:1,width:'100%',}}> 
                    <LinearGradient
                        colors={['#F0A517', '#F0A517', '#F1BC59']}
                        start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                        style={[styles.sombra,{marginBottom:10,padding:10}]}
                        > 

                    
                       
                        <View style={{flexDirection:"row",flex:1}}>
                                    <View style={{flex:1,alignSelf:"flex-start"}}>
                                        <Text style={{color:'white',fontWeight:"bold", fontSize:16,}}>Consumo kWh</Text>
                                    </View>
                                    
                                    <View style={{flex:1}}>
                                        <Text style={{color:'white',fontWeight:"bold", fontSize:16,alignSelf:"flex-end"}}>{`${new Intl.NumberFormat().format(dataTA.consumo)}`}</Text>
                                    </View>
                                    
                                    {/* <Text style={{color:Color.red,fontSize:15}}>{`Desviacion `}</Text> */}                           
                            
                        </View>
                    
                    </LinearGradient>

                    <LinearGradient
                        colors={['#00ADF9', '#00ADF9', '#00ADF9']}
                        start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                        style={[styles.sombra,{marginBottom:10,}]}
                        > 

                    
                        <View style={[{padding:10,marginBottom:5}]}>
                        
                                
                                    <Text style={{color:'white',fontWeight:"bold", fontSize:16,}}>Generación y comercialización</Text>
                                    {/* <Text style={{color:Color.red,fontSize:15}}>{`Desviacion `}</Text> */}
                                
                                
                                
                                <View style={{flexDirection:"row",marginTop:10}}>
                                    <View style={{justifyContent:"center",alignItems:"center",flex:1,}}>
                                        <Text style={{color:"white",fontWeight:"800"}}>{`$${new Intl.NumberFormat().format(dataTA.compra)}`}</Text>
                                        <Text style={{color:"white",fontWeight:"800"}}>Tarifa</Text>
                                    </View>
                                    <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
                                        <Text style={{color:"white",fontWeight:"800"}}>{`$${new Intl.NumberFormat().format(dataTA.tComponenteG)}`}</Text>
                                        <Text style={{color:"white",fontWeight:"800"}}>Total</Text>
                                    </View>
                                </View>
                               
                            
                        
                    
                        </View>
                    </LinearGradient>
                    <LinearGradient
                        colors={['#949FB1', '#949FB1', '#949FB1']}
                        start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                        style={[styles.sombra,{marginBottom:10}]}
                        > 
                        <View style={[{padding:10,marginBottom:5}]}>
                                
                                    <Text style={{color:'white',fontWeight:"bold", fontSize:16,}}>Transmision</Text>
                                <View style={{flexDirection:"row",marginTop:10}}>
                                    <View style={{justifyContent:"center",alignItems:"center",flex:1,}}>
                                        <Text style={{color:"white",fontWeight:"800"}}>{`$${new Intl.NumberFormat().format(dataTA.transmision)}`}</Text>
                                        <Text style={{color:"white",fontWeight:"800"}}>Tarifa</Text>
                                    </View>
                                    <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
                                        <Text style={{color:"white",fontWeight:"800"}}>{`$${new Intl.NumberFormat().format(dataTA.tComponenteT)}`}</Text>
                                        <Text style={{color:"white",fontWeight:"800"}}>Valor</Text>
                                    </View>
                                </View>
                               
                        </View>
                    </LinearGradient>
                    <LinearGradient
                        colors={["rgb(247, 70, 74)", "rgb(247, 70, 74)", "rgb(247, 70, 74)"]}
                        start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                        style={[styles.sombra,{marginBottom:10}]}
                        > 
                        <View style={[{padding:10,marginBottom:5}]}>
                                
                                    <Text style={{color:'white',fontWeight:"bold", fontSize:16,}}>Perdidas</Text>
                                <View style={{flexDirection:"row",marginTop:10}}>
                                    <View style={{justifyContent:"center",alignItems:"center",flex:1,}}>
                                        <Text style={{color:"white",fontWeight:"800"}}>{`$${new Intl.NumberFormat().format(dataTA.componentePR)}`}</Text>
                                        <Text style={{color:"white",fontWeight:"800"}}>Tarifa</Text>
                                    </View>
                                    <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
                                        <Text style={{color:"white",fontWeight:"800"}}>{`$${new Intl.NumberFormat().format(dataTA.tComponentePR)}`}</Text>
                                        <Text style={{color:"white",fontWeight:"800"}}>Valor</Text>
                                    </View>
                                </View>
                               
                        </View>
                    </LinearGradient>
                    <LinearGradient
                        colors={['#46BFBD', '#46BFBD', '#46BFBD']}
                        start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                        style={[styles.sombra,{marginBottom:10}]}
                        > 
                        <View style={[{padding:10,marginBottom:5}]}>
                                
                                    <Text style={{color:'white',fontWeight:"bold", fontSize:16,}}>Restricciones</Text>
                                <View style={{flexDirection:"row",marginTop:10}}>
                                    <View style={{justifyContent:"center",alignItems:"center",flex:1,}}>
                                        <Text style={{color:"white",fontWeight:"800"}}>{`$${new Intl.NumberFormat().format(dataTA.componenteR)}`}</Text>
                                        <Text style={{color:"white",fontWeight:"800"}}>Tarifa</Text>
                                    </View>
                                    <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
                                        <Text style={{color:"white",fontWeight:"800"}}>{`$${new Intl.NumberFormat().format(dataTA.tComponenteR)}`}</Text>
                                        <Text style={{color:"white",fontWeight:"800"}}>Valor</Text>
                                    </View>
                                </View>
                               
                        </View>
                    </LinearGradient>
                    <LinearGradient
                        colors={['#FDB45C', '#FDB45C', '#FDB45C']}
                        start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                        style={[styles.sombra,{marginBottom:10}]}
                        > 
                        <View style={[{padding:10,marginBottom:5}]}>
                                
                                    <Text style={{color:'white',fontWeight:"bold", fontSize:16,}}>Distribucion</Text>
                                <View style={{flexDirection:"row",marginTop:10}}>
                                    <View style={{justifyContent:"center",alignItems:"center",flex:1,}}>
                                        <Text style={{color:"white",fontWeight:"800"}}>{`$${new Intl.NumberFormat().format(dataTA.distribucion)}`}</Text>
                                        <Text style={{color:"white",fontWeight:"800"}}>Tarifa</Text>
                                    </View>
                                    <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
                                        <Text style={{color:"white",fontWeight:"800"}}>{`$${new Intl.NumberFormat().format(dataTA.tComponenteD)}`}</Text>
                                        <Text style={{color:"white",fontWeight:"800"}}>Valor</Text>
                                    </View>
                                </View>
                               
                        </View>
                    </LinearGradient>


                        
                        
                    
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
        borderRadius: 6,
        borderColor: '#ddd',
        borderBottomWidth: 0,
       
    }
})

export default ConsultaTA; 
