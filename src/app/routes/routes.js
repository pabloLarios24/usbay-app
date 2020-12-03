//Developer: Pablo Larios

import React, { Component } from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import { Root } from 'native-base';
import { StatusBar } from 'react-native';

//Import views
import SplashScreen from '../views/splashScreen';
import Login from '../views/login';
import Home from '../views/home';
import Reserve from '../views/reserve'
import QrScann from '../views/qrScan'


//import style
const colors = require('../styles').colors;

export default class App extends Component {
  constructor(properties) {
    super(properties);
  }

  render() {
    return (
      <Root>
        <StatusBar backgroundColor={colors.secondaryBlue} barStyle={'light-content'} />
        <Router>
          <Stack hideNavBar key="root">
            <Scene
              hideNavBar
              key="SplashScreen"
              back={false}
              component={SplashScreen}
              title="SplashScreen"
              initial={true}
            />
            <Scene
              hideNavBar
              key="Login"
              back={false}
              component={Login}
              title="Login"
            />
            <Scene
              hideNavBar
              key="Home"
              back={false}
              component={Home}
              title="Home"
            /> 
            <Scene
              hideNavBar
              key="Reserve"
              back={false}
              component={Reserve}
              title="Reserve"
            /> 
            <Scene
              hideNavBar
              key="QrScann"
              back={false}
              component={QrScann}
              title="QrScann"
            /> 
            
          </Stack>
        </Router>
      </Root>
    );
  }
}
