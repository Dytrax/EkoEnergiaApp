import { createStackNavigator } from "react-navigation"
import LoginScreen from "../src/components/Login/Login"
import RecuperarScreen from "../src/components/Login/Recuperar"
import Color from '../config/color'
import Menu from "./Menu";
import MenuV2 from './MenuV2'
const Root = createStackNavigator(
  {
    Login: {screen:LoginScreen,
            navigationOptions:{
              header: null,
              gesturesEnabled: false
            }},
    Recuperar: {screen:RecuperarScreen,
                navigationOptions:{
                    headerStyle: {
                      backgroundColor: Color.primary,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                    title:'Recuperar'
                  }
                },
    Menu: { 
        screen:MenuV2,
        navigationOptions:{
          header: null,
          gesturesEnabled: false
        }}
  }

  
);

export default Root
