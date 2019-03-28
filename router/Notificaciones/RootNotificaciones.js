import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";



import Color from '../../config/color'
import Notificaciones from '../../src/components/Notificaciones/notificaciones'

const rootNotificaciones = createStackNavigator(
  {
    Notificaciones: {
        screen:Notificaciones,
        navigationOptions:{
          header: null,
          gesturesEnabled: false,
          headerStyle: {
            backgroundColor: Color.primary,
          },
        }},
        
                
        
    }
);
//SeguimientoSolicitud
export default rootNotificaciones
  