import React, {Component} from 'react'
import Root from './router/Root'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import Reducers from './src/reducers/reducerIndex'
import FlashMessage from "react-native-flash-message";
import moment from 'moment'
require('moment/locale/es.js');
moment.locale('es');
export default class App extends Component {
  render() { 
    return (
      <Provider store={createStore(Reducers)}>
        <Root />
        <FlashMessage position="top" />
      </Provider>
      
    );
  }
}

