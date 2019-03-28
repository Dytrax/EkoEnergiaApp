import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";



import Color from '../../config/color'
import Medidores from '../../src/components/Medidores/medidores'
const rootMedidores = createStackNavigator(
  {
    InformacionMedidores: {
        screen:Medidores,
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
export default rootMedidores
  