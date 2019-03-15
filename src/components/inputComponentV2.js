import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import {Container,Icon,InputGroup,Item,Input} from 'native-base'
import { ThemeConsumer } from '../../node_modules/react-native-elements';


class InputComponentV2 extends Component{

    constructor(){
        super()
        this.state = {
            input:'',
            success:false,
        }
    }

    logicText(text){
        console.log(text.length)
        this.props.stateChange(this.props.state,text)
        if (text){
            this.setState(
                {
                    success:true
                }
            )
        }else{
            this.setState(
                {
                    success:false
                }
            )
        }
    }

    render(){
        return(
            <Item  success={this.state.success ? true:false} 
                error={this.state.success ? false:true}
            >
                    <Input placeholder={this.props.placeholder}
                    multiline={this.props.multiline}
                    onChangeText={(text)=>{
                        console.log(text)
                        this.logicText(text)}}
                    />
                    {
                        this.state.success ? (
                            <Icon name='checkmark-circle' />
                        ):(
                            <Icon name='close-circle' />
                        )
                    }
                    {/* <Icon name={this.props.iconName} /> */}
            </Item>
        )
    }
        
        
    
}

export default InputComponentV2;