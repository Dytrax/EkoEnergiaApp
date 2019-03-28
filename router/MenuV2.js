import { createDrawerNavigator} from "react-navigation";
import SideMenu from '../src/components/sideMenu'
import SolicitudesRoot from './Solicitudes/Root'
import NotificacionesRoot from './Notificaciones/RootNotificaciones'
import TF from './Reportes/Reportes'
import TarifasAplicadas from '../src/components/Reportes/tarifasAplicadas'
import MedidoresRoot from './Medidores/RootMedidores'
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