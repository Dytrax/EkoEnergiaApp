import { createDrawerNavigator} from "react-navigation";
import Solicitudes from '../src/components/Solicitudes/Solicitudes'
import SideMenu from '../src/components/sideMenu'
import SolicitudesRoot from './Solicitudes/Root'
const MyDrawer = createDrawerNavigator({
  Solicitudes:{
    screen:SolicitudesRoot
  },

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