import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Modal,
  ActivityIndicator,
  Text,
  TouchableOpacity
} from 'react-native';
import Color from '../../config/color'
import { Divider } from 'react-native-elements';
import {Icon} from 'native-base'
//ios-add

class Picker extends Component {
  
  render(){
    return (
      <Modal
          transparent={true}
          animationType={'none'}
          visible={this.props.modal}>
          <View style={styles.modalBackground}>
              <View style={styles.activityIndicatorWrapper}>
                  {/* <ActivityIndicator
                      animating={this.props.loading} /> */}
                      <View style={{marginBottom:10,alignSelf:"flex-start"}}>
                        <Text>Año</Text>
                     </View>
                    <View style={{alignSelf:"center",width:"100%"}}>
                    
                     
                      <View style={{flexDirection:"row"}}>
                        <TouchableOpacity style={{justifyContent:"center",alignItems:"center"}}
                        onPress={()=>{this.props.removeYear()}}
                        >
                          <Icon  name='ios-remove' style={{color:Color.second}}/>
                        </TouchableOpacity>
                        <View style={{marginLeft:20,marginRight:20,justifyContent:"center",alignItems:"center",marginBottom:10}}>
                          <Text>{this.props.year}</Text>
                        </View>
                        <TouchableOpacity style={{justifyContent:"center",alignItems:"center"}}
                        onPress={()=>{this.props.addYear()}}
                        >
                          <Icon  name='ios-add' style={{color:Color.second}}/>
                        </TouchableOpacity>
                      </View>
                    </View>
                    {/* <View style={{width:200}}>
                    <Divider style={{ backgroundColor: Color.second,height:1 }} />
                    </View> */}
                    <View style={{marginBottom:10,alignSelf:"flex-start"}}>
                      <Text>Mes</Text>
                    </View>

                    <View style={{flexDirection:"row",flex:1,}}>
                        <TouchableOpacity onPress={()=>{this.props.stateChange("selectMonth",1)
                        this.props.setVisibleModal(false)
                        this.props.stateChange("fecha",true)}}
                        style={{margin:10}}>
                            <Text style={[styles.offText, this.props.selectMonth===1 && styles.onText] }>Ene</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this.props.stateChange("selectMonth",2)
                        this.props.setVisibleModal(false)
                        this.props.stateChange("fecha",true)}}
                        style={{margin:10}}>
                            <Text style={[styles.offText, this.props.selectMonth===2 && styles.onText] }>Feb</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this.props.stateChange("selectMonth",3)
                        this.props.setVisibleModal(false)
                        this.props.stateChange("fecha",true)}}
                        style={{margin:10}}>
                            <Text style={[styles.offText, this.props.selectMonth===3 && styles.onText] }>Mar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this.props.stateChange("selectMonth",4)
                        this.props.setVisibleModal(false)
                        this.props.stateChange("fecha",true)}}
                        style={{margin:10}}>
                            <Text style={[styles.offText, this.props.selectMonth===4 && styles.onText] }>Abr</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this.props.stateChange("selectMonth",5)
                        this.props.setVisibleModal(false)
                        this.props.stateChange("fecha",true)}}
                        style={{margin:10}}>
                            <Text style={[styles.offText, this.props.selectMonth===5 && styles.onText] }>May</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this.props.stateChange("selectMonth",6)
                        this.props.setVisibleModal(false)
                        this.props.stateChange("fecha",true)}}
                        style={{margin:10}}>
                            <Text style={[styles.offText, this.props.selectMonth===6 && styles.onText] }>Jun</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{flexDirection:"row",flex:1}}>
                        <TouchableOpacity onPress={()=>{this.props.stateChange("selectMonth",7)
                        this.props.setVisibleModal(false)
                        this.props.stateChange("fecha",true)}}
                        style={{margin:10}}>
                            <Text style={[styles.offText, this.props.selectMonth===7 && styles.onText] }>Jul</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this.props.stateChange("selectMonth",8)
                        this.props.setVisibleModal(false)
                        this.props.stateChange("fecha",true)}}                        
                        style={{margin:10}}>
                            <Text style={[styles.offText, this.props.selectMonth===8 && styles.onText] }>Ago</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this.props.stateChange("selectMonth",9)
                        this.props.setVisibleModal(false)
                        this.props.stateChange("fecha",true)}}
                        style={{margin:10}}>
                            <Text style={[styles.offText, this.props.selectMonth===9 && styles.onText] }>Sep</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this.props.stateChange("selectMonth",10)
                        this.props.setVisibleModal(false)
                        this.props.stateChange("fecha",true)}}
                        style={{margin:10}}>
                            <Text style={[styles.offText, this.props.selectMonth===10 && styles.onText] }>Oct</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this.props.stateChange("selectMonth",11)
                        this.props.setVisibleModal(false)
                        this.props.stateChange("fecha",true)}}
                        style={{margin:10}}>
                            <Text style={[styles.offText, this.props.selectMonth===11 && styles.onText] }>Nov</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this.props.stateChange("selectMonth",12)
                       this.props.setVisibleModal(false)
                        this.props.stateChange("fecha",true)}}
                        style={{margin:10}}>
                            <Text style={[styles.offText, this.props.selectMonth===12 && styles.onText] }>Dec</Text>
                        </TouchableOpacity>

                    </View>
                  
                   {/* <Text style={{position:"absolute",bottom:10,color:"grey"}}>Cargando</Text>  */}
              </View>
              
          </View>
  
  
  
  
  
      </Modal>
      )
  }
}


const styles = StyleSheet.create({
    modalBackground: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#00000040'
    },
    activityIndicatorWrapper: {
      padding:10,
      backgroundColor: '#FFFFFF',
      height: 180,
      //width: 100,
      borderRadius: 10,
      //display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    onText:{
      color:Color.primary
    }
  });
export default Picker;