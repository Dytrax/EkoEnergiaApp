import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";



import Color from '../../config/color'
import TarifasAplicadas from '../../src/components/Reportes/tarifasAplicadas'
import SeleccionarMedidores from '../../src/components/Reportes/seleccionarMedidores'
import ConsultaTA from '../../src/components/Reportes/consultaTarifasAplicadas'
const rootReportes = createStackNavigator(
  {
    Tarifas: {
        screen:TarifasAplicadas,
        navigationOptions:{
          header: null,
          gesturesEnabled: false,
          headerStyle: {
            backgroundColor: Color.primary,
          },
        }
      
      
      },
      Medidores: {
        screen:SeleccionarMedidores,
        navigationOptions:{
          header: null,
          gesturesEnabled: false,
          headerStyle: {
            backgroundColor: Color.primary,
          },
        }},
        ConsultaTA: {
          screen:ConsultaTA,
          navigationOptions:{
            header: null,
            gesturesEnabled: false,
            headerStyle: {
              backgroundColor: Color.primary,
            },
          }}
      
        
                
        
    }
);
export default rootReportes;
  