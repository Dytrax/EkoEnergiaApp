import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";


import Solicitudes from '../../src/components/Solicitudes/Solicitudes'
import Detalle from '../../src/components/Solicitudes/Detalle'
import Crear from '../../src/components/Solicitudes/Crear'
import TipoSolicitudes from '../../src/components/Solicitudes/TipoSolicitudes'
import Contratos from '../../src/components/Solicitudes/seleccionarContrato'
import Color from '../../config/color'
import TabsSolicitudes from './TabRootSolicitudes'
import SeguimientoSolicitud from '../../src/components/Solicitudes/seguimientoSolicitud'
const Submenu = createStackNavigator(
  {
    Solicitudes: {
        screen:TabsSolicitudes,
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
              headerBackTitle: null,
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
            }},
        typeSolicitudes: {
              screen:TipoSolicitudes,
              navigationOptions:{
                header: null,
                gesturesEnabled: false,
                headerStyle: {
                  backgroundColor: Color.primary,
                },
                /* headerTruncatedBackTitle:'',
                headerStyle: {
                  backgroundColor: Color.primary,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                title:'Seleccionar Solicitud',
                
                titleStyle: {
                  
                  textAlign: 'center'
                }, */
                
              }},
              Contratos: {
                screen:Contratos,
                navigationOptions:{
                  header: null,
                  gesturesEnabled: false,
                  headerStyle: {
                    backgroundColor: Color.primary,
                  },
                }},
                Seguimiento: {
                  screen:SeguimientoSolicitud,
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
export default Submenu
  