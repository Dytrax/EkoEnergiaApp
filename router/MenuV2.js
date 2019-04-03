import { createDrawerNavigator} from "react-navigation";
import SideMenu from '../src/components/sideMenu'
import SolicitudesRoot from './Solicitudes/Root'
import NotificacionesRoot from './Notificaciones/RootNotificaciones'
import TF from './Reportes/Reportes'
import TarifasAplicadas from '../src/components/Reportes/tarifasAplicadas'
import MedidoresRoot from './Medidores/RootMedidores'
import graficaEjemploUno from '../src/components/Indicadores/Indicadores'
import GraficaDos from "../src/components/Indicadores/graficados";
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
  useNativeAnimations:true
}
);

export default MyDrawer;