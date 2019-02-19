import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import Color from '../../../config/color'

import { Header, Body, Title, Content, Left, Icon, Right } from 'native-base'

function CustomHeader (props){
    
    return (
       
        <Header style={{ backgroundColor: Color.primary  }} >
                <Left>
                    <Icon name="ios-menu" onPress={props.actionEvent} style={{color:'#FFF',height:30,width:30}}  />
                </Left>
                <Body >
                    <Title style={{justifyContent: "center",alignItems: "center", marginLeft:props.porcentaje}} >{props.title}</Title>
                </Body>
              
            </Header>
        );
    }

export default CustomHeader;



