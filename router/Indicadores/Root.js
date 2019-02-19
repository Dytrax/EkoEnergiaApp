import React, { Component } from "react";
import { createBottomTabNavigator } from "react-navigation";

import {Image} from "react-native";
import Indicadores from "../../src/components/Indicadores/Indicadores"
import Consumos from "../../src/components/Indicadores/Consumos"
import Color from '../../config/color'


const Tab = createBottomTabNavigator(
  {
    Indicadores:{ 
      screen: Indicadores,
      navigationOptions: {
        title:'Consumo Real',
        size:60,
        tabBarIcon: ({ focused }) => (
          focused ?
          <Image source={require('../../src/assents/img/icon_tab/ic-consumo-naranja.png')} style={{ height:25,width:25}}/> :
          <Image source={require('../../src/assents/img/icon_tab/ic-consumo-gris.png')} style={{ height:25,width:25}} />
        )
      }
    },
    Consumos:{ 
      screen: Consumos,
      navigationOptions: {
        title:'Reporte Simulador',
        tabBarIcon: ({ focused }) => (
          focused ?
          <Image source={require('../../src/assents/img/icon_tab/ic-reportes-naranja.png')} style={{ height:25,width:25}}/> :
          <Image source={require('../../src/assents/img/icon_tab/ic-reportes-gris.png')} style={{ height:25,width:25}} />
        )
      }    
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Color.primary,
      activeBackgroundColor: 'transparent',
      inactiveTintColor: Color.tex_color_grid,
      inactiveBackgroundColor: 'transparent',
      labelStyle: {
        fontSize: 16,
        marginLeft: 10,
      }
    }
  }
);

export default Tab
  