import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";



import Color from '../../config/color'
import Medidores from '../../src/components/Medidores/medidores'
import DetalleFacturacion from "../../src/components/Medidores/detalleFacturacion";
import HistoricosFacturas from "../../src/components/Medidores/historicosFacturas";
import GraficaConsumoDiario from '../../src/components/Medidores/graficaConsumoDiario'
import calendarConsumoDiario from "../../src/components/Medidores/calendarConsumoDiario";
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
      DetalleFacturacion: {
          screen:DetalleFacturacion,
          navigationOptions:{
            header: null,
            gesturesEnabled: false,
            headerStyle: {
              backgroundColor: Color.primary,
            },
          }},GraficaConsumoDiario: {
            screen:GraficaConsumoDiario,
            navigationOptions:{
              header: null,
              gesturesEnabled: false,
              headerStyle: {
                backgroundColor: Color.primary,
              },
            }},CalendarioConsumoDiario: {
              screen:calendarConsumoDiario,
              navigationOptions:{
                header: null,
                gesturesEnabled: false,
                headerStyle: {
                  backgroundColor: Color.primary,
                },
              }},
          HistoricosFacturas: {
            screen:HistoricosFacturas,
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
  //CalendarConsumoDiario