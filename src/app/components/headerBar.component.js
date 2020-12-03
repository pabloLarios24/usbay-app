import React from 'react'
import { View , Alert, StyleSheet, Text, TouchableOpacity, Platform} from 'react-native'
import { moderateScale } from 'react-native-size-matters';
import { Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Spinner from 'react-native-loading-spinner-overlay';
import LinearGradient from 'react-native-linear-gradient';

//import components 
import Shadow from './dynamicShadow'

//import styles
var colors = require('../styles').colors;
var fontStyles = require('../styles').fontStyles;
var themeClasses = require('../styles').themeClasses;
var dimensions = require('../styles').dimensions;

export default class Header extends React.Component{
    constructor(){
        super()
        this.state={
            isLoading:false,
            isVisible:false
        }
    }

    async logOut(){
       
    }

    render(){
        const { isBack , title, isNotifications, isNothing } = this.props;
        return(
            <View
                style={styles.container}
            >    
                <View style={{width:"25%", height:"100%", justifyContent:"center", paddingLeft: moderateScale(20)}}>
                    {
                        isBack ?
                            <TouchableOpacity
                                onPress={()=>{
                                    Actions.pop()
                                }}
                            >

                                <Icon 
                                    type={"FontAwesome5"} 
                                    name="chevron-left" 
                                    style={[styles.icon ]} 
                                />
                            </TouchableOpacity>
                        :
                            null
                    }
                </View>
                <View style={[{width:"50%", height:"100%"}, themeClasses.fullCenterAlign]}>
                    <Text style={[fontStyles.h1Bold, { color: colors.white }]}>{title ? title : "Challenge"}</Text>
                </View>
                <TouchableOpacity 
                    style={{width:"25%", height:"100%", alignItems:"flex-end", justifyContent:"center"}}
                    onPress={()=>{
                    if( isNotifications ){
                        Actions.Notifications();
                    }else if( !isNothing ){
                            Actions.Profile();
                    }
                    }}
                >
                    {
                        isNotifications ?
                            <Icon 
                                type={'Octicons'} 
                                name={"bell"}
                                style={[styles.icon]} 
                            />
                        :
                            !isNothing ?
                                <Icon 
                                    type={'Octicons'} 
                                    name={"person"} 
                                    style={[styles.icon]} 
                                />
                            :
                                null
                    }
                    
                </TouchableOpacity>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    container:{
        width: dimensions.width,
        backgroundColor:colors.principal,
        height:moderateScale(Platform.OS === 'ios' ? 80 : 40),
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:moderateScale(20), 
        ...themeClasses.paddingTop, 
        shadowColor: colors.line,
        shadowOffset: {
            width: 0,
            height:5,
        },
        shadowOpacity: 1 ,
        shadowRadius: moderateScale(5),
    },
    icon:{
        ...fontStyles.h1BoldWhite, 
        fontSize: moderateScale(20),
        color: colors.white
    },
    
})