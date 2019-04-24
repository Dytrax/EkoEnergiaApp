import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import Color from '../../config/color'
import MenuReportes from '../../src/components/ReportesGraficas/reportesGraficasMenu'
import InformeFactura from '../../src/components/ReportesGraficas/informeFactura'
import menuGraficasDias_Semanas from "../../src/components/ReportesGraficas/menuGraficasDias_Semanas";
import GraficasReportesDiasSemanas from '../../src/components/ReportesGraficas/reporteGrafica'
import SeleccionarMedidoresReportes from '../../src/components/ReportesGraficas/seleccionarMedidores'

const rootReporteGraficas = createStackNavigator(
  {
    MenuReporte: {
        screen:MenuReportes,
        navigationOptions:{
          header: null,
          gesturesEnabled: false,
          headerStyle: {
            backgroundColor: Color.primary,
          },
        }},
        OpcionesInformeFactura: {
          screen:InformeFactura,
          navigationOptions:{
            header: null,
            gesturesEnabled: false,
            headerStyle: {
              backgroundColor: Color.primary,
            },
          }},
          MenuGraficasDiasSemanas:{
            screen:menuGraficasDias_Semanas,
            navigationOptions:{
              header: null,
              gesturesEnabled: false,
              headerStyle: {
                backgroundColor: Color.primary,
              },
            }},
            GraficasReportesDiasSemanas:{
              screen:GraficasReportesDiasSemanas,
              navigationOptions:{
                header: null,
                gesturesEnabled: false,
                headerStyle: {
                  backgroundColor: Color.primary,
                },
              }},
              SeleccionarMedidoresReportes:{
                screen:SeleccionarMedidoresReportes,
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
export default rootReporteGraficas
  //CalendarConsumoDiario