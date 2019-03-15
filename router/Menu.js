import React, { Component } from "react";
import Config from '../config/config'
import Color from '../config/color'

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,AsyncStorage
} from "react-native";
import { Container, Content, Icon, Header, Body } from 'native-base'
import { createDrawerNavigator, StackNavigator, DrawerItems, SafeAreaView,NavigationActions } from 'react-navigation'

import Simulador from '../src/components/Simulador/Simulador'


import Configuracion from '../src/components/Configuracion/Configuracion'
import Salir from '../src/components/Salir/Salir'
import CustomImg from '../src/components/layouts/CustomDrawer'

import Dashboard from "./Indicadores/Root";
import Solicitudes from './Solicitudes/Root'
import Tomas from './Tomas/Root'


const CustomDrawerContentComponent = (props) => { 
  
  return (
    <Container >
        <CustomImg />
      <Content>
        <DrawerItems {...props} />
      </Content>
      
    </Container>
  )
}

const Menu = createDrawerNavigator(
  {
   
    Indicadores: {
      screen: Dashboard,
      navigationOptions:{
        header: null,
        drawerIcon:({ focused }) => (
          focused ?
          <Image  source={require('../src/assents/img/icon_menu/ic-indicadores-naranja.png')} style={{ height:35,width:35}}/> :
          <Image  source={require('../src/assents/img/icon_menu/ic-indicadores-gris.png')} style={{ height:35,width:35}}/>
        )
        
      }
    },
    Simulador: {
      screen: Simulador,
      navigationOptions:{
        header: null,
        drawerIcon:({ focused }) => (
          focused ?
          <Image  source={require('../src/assents/img/icon_menu/ic-reportes-naranja.png')} style={{ height:35,width:35}}/> :
          <Image  source={require('../src/assents/img/icon_menu/ic-reportes-gris.png')} style={{ height:35,width:35}}/>
        )
      }
    },
    Tomas: {
        screen: Tomas,
        navigationOptions:{
          header: null,
          drawerIcon:({ focused }) => (
            focused ?
            <Image  source={require('../src/assents/img/icon_menu/ic-tomas-gris.png')} style={{ height:35,width:35}}/> :
            <Image  source={require('../src/assents/img/icon_menu/ic-tomas-gris.png')} style={{ height:35,width:35}}/>
          )
        }
      },
    Solicitudes: {
        screen: Solicitudes,
        navigationOptions:{
          header: null,
          drawerIcon:({ focused }) => (
            focused ?
            <Image  source={require('../src/assents/img/icon_menu/ic-solicitudes-naranja.png')}  style={{ height:35,width:35}}/>:
            <Image  source={require('../src/assents/img/icon_menu/ic-solicitudes-gris.png')}  style={{ height:35,width:35}}/>
          )
        }
      },
    Configuracion: {
      screen: Configuracion,
      navigationOptions:{
        header: null,
        drawerIcon:({ focused }) => (
          focused ?
          <Image  source={require('../src/assents/img/icon_menu/ic-configuraciones-naranja.png')} style={{ height:35,width:35}}/>:
          <Image  source={require('../src/assents/img/icon_menu/ic-configuraciones-gris.png')} style={{ height:35,width:35}}/>
        )
      }
    },
    Salir: {
      screen: Salir
    },
    
  },
  {
    contentOptions: {
      activeTintColor: Color.primary,
      activeBackgroundColor: 'transparent',
      inactiveTintColor: Color.tex_color_grid,
      inactiveBackgroundColor: 'transparent',
      labelStyle: {
        fontSize: 16,
        marginLeft: 10,
      },
    },
    initialRouteName: 'Indicadores',
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  }
)

export default Menu

const styles = StyleSheet.create({

  container: {
  
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EF7F1A' ,
    
  }

})