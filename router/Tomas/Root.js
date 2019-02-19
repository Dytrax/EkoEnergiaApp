import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";


import Tomas from '../../src/components/Tomas/Tomas'
import Add from '../../src/components/Tomas/Add'
import Color from '../../config/color'


const Submenu = createStackNavigator(
  {
    Tomas: {
        screen:Tomas,
        navigationOptions:{
            header: null,
            gesturesEnabled: false,
            headerStyle: {
            backgroundColor: Color.primary,
            },
        }
    },
    Add: {
        screen:Add,
        navigationOptions:{
            headerStyle: {
                backgroundColor: Color.primary,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            title:'Adicionar toma',
            titleStyle: {
                textAlign: 'center'
            },
            }
        },
    }
);

export default Submenu
  