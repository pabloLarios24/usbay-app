import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Spinner from 'react-native-loading-spinner-overlay';
import { showLocation } from 'react-native-map-link'

//import components
import Header from '../../components/headerBar.component'
import CardVisit from './components/cardVisit';


//import styles
const styles = require('./styles').styles;
const themeClasses = require('../../styles').themeClasses;
const fontStyles = require('../../styles').fontStyles;




export default class Binnacle extends Component {
     constructor(props) {
         super(props)
         this.state={
             users: null,
             isLoading: false,
             visits: Array()
         }
    }

    componentDidMount(){
        this.init()
    }

    async init(){
    }

    async goTo(){
        showLocation({
            latitude: 20.659698,
            longitude: -103.349609,
            title: 'Madero 20',  // optional
            googleForceLatLon: false,  // optionally force GoogleMaps to use the latlon for the query instead of the title
            alwaysIncludeGoogle: true, // optional, true will always add Google Maps to iOS and open in Safari, even if app is not installed (default: false)
            dialogTitle: 'This is the dialog Title', // optional (default: 'Open in Maps')
            dialogMessage: 'This is the amazing dialog Message', // optional (default: 'What app would you like to use?')
            cancelText: 'This is the cancel button text', // optional (default: 'Cancel')
            naverCallerName: 'com.example.myapp' // to link into Naver Map You should provide your appname which is the bundle ID in iOS and applicationId in android.
            // appTitles: { 'google-maps': 'My custom Google Maps title' } // optionally you can override default app titles
            // app: 'uber'  // optionally specify specific app to use
        })
    }

    render() {
        return (
            <View style={[themeClasses.container]}>
                <Spinner
                    visible={this.state.isLoading}
                    textContent={'Cargando...'}
                />
                <Header title={"Bitacora"}/>
                <View style={{width:"100%"}}>
                    <ScrollView
                        contentContainerStyle={{paddingBottom:moderateScale(100), width:"100%"}}
                    >
                        {/* Visit */}
                        <View style={{marginTop:moderateScale(20), width:"100%", flexDirection:"row",  flexWrap:"wrap"}}>
                            {/* {
                                this.state.visits ?
                                    this.state.visits.length ?
                                        <CardVisit 
                                                name={"Bahia Madero 20"} 
                                                noVisit={"D"} 
                                                createdAt={Date()} 
                                                item={}  
                                                animationLeft={key%2 === 0}
                                            />   
                                    :
                                        <View style={{flex:1, ...themeClasses.fullCenterAlign}}>
                                            <Text style={fontStyles.h2Bold}>Por el momento no hay visitas.</Text>
                                        </View>
                                :   
                                    <View style={{flex:1, ...themeClasses.fullCenterAlign}}>
                                        <Text style={fontStyles.h2Bold}>Por el momento no hay visitas.</Text>
                                    </View>
                            } */}
                            <TouchableOpacity
                                onPress={()=>{
                                    this.goTo()
                                }}
                            >

                                <CardVisit 
                                                name={"Bahia Madero 20"} 
                                                status={"Disponible"} 
                                                createdAt={Date()} 
                                                animationLeft={1%2 === 0}
                                            />   
                            </TouchableOpacity>
                        </View>

                    </ScrollView>
                </View>
        </View>
        );
    }
}
