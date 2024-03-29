import  React,{ Component } from 'react'
import {AppRegistry} from 'react-native';
import App from './App';
import Splash from './src/components/Splash/Splash';

import {name as appName} from './app.json';

//localLocale.locale(false);
class Main extends Component{

    constructor(props){
        super(props)
        this.state = { currentScreen: 'Splash'}
        setTimeout(() => {
            this.setState({ currentScreen: 'App'})
        }, 3000);
    } 
    render(){
        const { currentScreen } = this.state
        let mainScreen = currentScreen=== 'Splash' ? <Splash /> : <App />
        return mainScreen
    }
}

AppRegistry.registerComponent(appName, () => Main);
//AppRegistry.registerComponent(appName, () => Login);
