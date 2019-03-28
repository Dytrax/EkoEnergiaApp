import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from "react-native";
import Color from '../../../config/color'

import { Header, Body, Title, Content, Left, Icon, Right, Button } from 'native-base'
let deviceWidth = Dimensions.get('window').width
function CustomHeader (props){
   
    return (
       
        <Header  style={{ backgroundColor: Color.primary}} >
            <Left>
            {
                props.back ? (
                        <Button transparent  onPress={()=>{props.actionEvent()}}>
                            <Icon  name='ios-arrow-back' style={{color:'#FFF'}}/>
                        </Button>
                    ): <Button transparent  onPress={()=>{props.actionEvent()}}>
                            <Icon  name='ios-menu' style={{color:'#FFF'}}/>
                        </Button>
            }
                {/* <Icon name="ios-menu" onPress={props.actionEvent} style={{color:'#FFF',height:30,width:30}}  /> */}
            </Left>
            <Body >
                <Title style={{color:'#FFF',width:deviceWidth-200}} >{props.title}</Title>
            </Body>
            <Right>
                {
                    props.search ? (
                        <Button transparent  onPress={()=>{props.searchAction()}}>
                            <Icon  name='ios-search' style={{color:'#FFF'}}/>
                        </Button>
                    ): null
                }
            </Right>
            {/* <Right/> */}
                
            
            
            {/* <Content>
                
            </Content> */}
                
                
                    
               
              
            </Header>
        );
    }

export default CustomHeader;



