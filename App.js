/**
 * Developer: Pablo Larios
 * Proyect: UsBay to Hackatlon
 */

import React from 'react';
import {
  View
} from 'react-native';

// import routes

import Routes from './src/app/routes/routes'


export default class App extends React.Component{
  constructor(){
    super()
    
  }

  componentDidMount(){
  }
  

  render(){
    return(
        <Routes/>
    )
  }
}

