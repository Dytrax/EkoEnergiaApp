import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";


import Solicitudes from '../../src/components/Solicitudes/Solicitudes'
import Detalle from '../../src/components/Solicitudes/Detalle'
import Crear from '../../src/components/Solicitudes/Crear'
import Color from '../../config/color'


const Submenu = createStackNavigator(
  {
    Solicitudes: {
        screen:Solicitudes,
        navigationOptions:{
          header: null,
          gesturesEnabled: false,
          headerStyle: {
            backgroundColor: Color.primary,
          },
        }},
        Detalle: {
            screen:Detalle,
            navigationOptions:{
                headerStyle: {
                  backgroundColor: Color.primary,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                title:'Solicitud Detalle',
                titleStyle: {

                  textAlign: 'center'
                },
              }},
        Crear: {
          screen:Crear,
          navigationOptions:{
            
              headerStyle: {
                backgroundColor: Color.primary,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              title:'Crear Solicitud',
              titleStyle: {
                
                textAlign: 'center'
              },
            }}
    }
);

export default Submenu
  