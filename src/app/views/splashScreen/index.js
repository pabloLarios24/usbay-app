import React from 'react'
import { AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { getUserInfo } from '../../../common/userInfo'
import moment from 'moment'

export default class SplashScreenView extends React.Component{
    constructor(){
        super()
    }

    componentDidMount(){
       this.init()
    }

    async init(){
        const userInfo = JSON.parse(await getUserInfo());
        console.log(userInfo, "show")
        if(userInfo){
            if(userInfo.userId){
                Actions.reset("Home")
            }else{
                Actions.reset("Login")
            }
        }else{
            Actions.reset("Login")
        }
        
    }

    render(){
        return(
            null
        )
    }
}