
import  React,{ Component } from 'react'
import  {StyleSheet,View,SafeAreaView,ScrollView,Text,TextInput,TouchableHighlight,Image,TouchableOpacity} from 'react-native'
import {Container,Icon,InputGroup} from 'native-base'
import moment from 'moment'
import Color from '../../../config/color'


import  DropdownAlert from 'react-native-dropdownalert'
import DateTimePicker from 'react-native-modal-datetime-picker';
class Add extends Component{
    state = {
        isDateTimePickerVisible: false,
        isDateTimePickerHoursVisible: false,
        fechaToma:"",
        horaToma:"",
        valorToma:"",
    };
    constructor(props) {
        super(props)
        
    }
     /* set de la fecha */  
    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true});
    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
    _handleDatePicked = (date) => {
    date =  moment(date).format("YYYY-MM-DD")
    this.setState({
        fechaToma: ""+date
    });
    this._hideDateTimePicker();
    };


    /* set de la hora */ 
    _showDateTimePickerHours = () => this.setState({ isDateTimePickerHoursVisible: true});
    _hideDateTimePickerHours = () => this.setState({ isDateTimePickerHoursVisible: false });
    _handleDatePickedHours = (hours) => {
        hours=moment(hours).format("hh:mm:ss")
        this.setState({
            horaToma: ""+hours
        });
        this._hideDateTimePickerHours();
    };


    //cambio de vatiables
    stateChange = (stateToChange, value) => {
        this.state[stateToChange] = value;
    }; 
 

    render(){
        const { navigation } = this.props;
        const itemId = navigation.getParam('medidor');
        console.log(itemId)

        
        return (
            <Container>
            
                <ScrollView style={{backgroundColor:'#fff',padding:15}}>
                    <SafeAreaView >
                        <View style={{flex: 1, flexDirection: 'row'}}> 
                            
                            <Text style={styles.body}>*Seleccionar fecha : </Text>
                            <InputGroup style={styles.inputBox} >        
                                
                                    <TextInput  
                                    onTouchStart={this._showDateTimePicker}
                                    underlineColorAndroid='rgba(0,0,0,0)' 
                                    placeholder=""
                                    placeholderTextColor = "#C6C6C6"
                                    pointerEvents="none"
                                    value={this.state.fechaToma}
                                    
                                    />  
                                
                            </InputGroup>
                            <DateTimePicker
                                isVisible={this.state.isDateTimePickerVisible}
                                onConfirm={this._handleDatePicked}
                                onCancel={this._hideDateTimePicker} 
                            />

                        </View> 
                        <View style={{flex: 1, flexDirection: 'row'}}> 
                            <Text style={styles.body}>*Seleccionar hora : </Text>
                            <InputGroup borderType="underline" style={styles.inputBox}>        
                                <TextInput  
                                onTouchStart={this._showDateTimePickerHours}
                                underlineColorAndroid='rgba(0,0,0,0)' 
                                placeholder=""
                                placeholderTextColor = "#C6C6C6"
                                value={this.state.horaToma}
                                />  
                            </InputGroup>
                            <DateTimePicker
                                isVisible={this.state.isDateTimePickerHoursVisible}
                                onConfirm={this._handleDatePickedHours}
                                onCancel={this._hideDateTimePickerHours}
                                mode={'time'}
                            />
                        </View> 
                        <View style={{flex: 1, flexDirection: 'row'}}> 
                            <Text style={styles.body}>*Ingresar Lecturas : </Text>
                            <InputGroup borderType="underline" style={styles.inputBox}>        
                                <TextInput 
                                onChangeText={(val) => this.stateChange("valorToma",val)}
                                underlineColorAndroid='rgba(0,0,0,0)' 
                                placeholder=""
                                placeholderTextColor = "#C6C6C6"
                                
                                />  
                            </InputGroup>
                        </View> 

                         
                        
                    </SafeAreaView>
                    <DropdownAlert ref={ref => this.dropdown = ref} />
                </ScrollView>
                <TouchableHighlight  style={styles.buttonfloat} onPress={(val) => this.props.navigation.navigate('Tomas')}>
                    <Image
                    style={{width: 50, height: 50,backgroundColor:'#fff'}}
                    source={require('../../assents/img/button/ic-cancelar.png')}
                    />
                </TouchableHighlight>
                <TouchableHighlight  style={styles.buttonfloatleft} onPress={(val) => this.requestCreate()}>
                    <Image
                    style={{width: 50, height: 50,backgroundColor:'#fff'}}
                    source={require('../../assents/img/button/ic-aceptar.png')}
                    />
                </TouchableHighlight>
            </Container>
        
            
        )
    }
}
export default Add
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
        bottom: 20,                                                    
        right: '20%', 
    },
    buttonfloatleft:{
        width: 50,  
        height: 50,   
        borderRadius: 30,                     
        position: 'absolute',                                          
        bottom: 20,                                                    
        left: '20%'},
    body:{
            fontSize: 16,
            marginTop:20,
            fontWeight: 'bold',
            padding:10
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

