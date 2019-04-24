import { createDrawerNavigator} from "react-navigation";
import {
  Dimensions
} from 'react-native'
import SideMenu from '../src/components/sideMenu'
import SolicitudesRoot from './Solicitudes/Root'
import NotificacionesRoot from './Notificaciones/RootNotificaciones'
import TF from './Reportes/Reportes'
import TarifasAplicadas from '../src/components/Reportes/tarifasAplicadas'
import MedidoresRoot from './Medidores/RootMedidores'
import graficaEjemploUno from '../src/components/Indicadores/Indicadores'
import GraficaDos from "../src/components/Indicadores/graficados";
import ReportesGraficasRoot from './ReportesGraficas/rootReporteGraficas'
const WIDTH = Dimensions.get('window').width
const MyDrawer = createDrawerNavigator({
  Solicitudes:{
    screen:SolicitudesRoot
  },
  Notificaciones:{
    screen:NotificacionesRoot
  },
  TarifasAplicadas:{
    screen:TF
  },
  MedidoresTab:{
    screen:MedidoresRoot
  },
  EjemploGraficaUno:{
    screen:graficaEjemploUno
  },
  EjemploGraficaDos:{
    screen:GraficaDos
  },
  ReportesGraficas:{
    screen:ReportesGraficasRoot
  }

  /* Solicitudes2:{
    screen:Solicitudes
  } *//* ,
  Notificaciones:{
    screen: RootStackCrm
  },
  Solicitud: {
    screen: RootStackSolicitud,
    
  },
  Profile: {
    screen: RootStackProfile,
    
  }, */
  
},{
  contentComponent:SideMenu,
  useNativeAnimations:true,
  drawerWidth:WIDTH-56
  
}
);

export default MyDrawer;