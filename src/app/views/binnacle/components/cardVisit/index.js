import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import {moderateScale} from 'react-native-size-matters'
import { Icon } from 'native-base';
import moment from 'moment';
import { Actions } from 'react-native-router-flux';
import * as Animatable from 'react-native-animatable';

//import componentes
import Shadow from '../../../../components/dynamicShadow'

//import styles
const fontStyles = require('../../../../styles').fontStyles;
const colors = require('../../../../styles').colors;
const themeClasses = require('../../../../styles').themeClasses;
const styles = require('./styles').styles;

const VisitDetails = ({ name, status, createdAt, item, animationLeft }) =>{
    return(
        <Animatable.View 
            animation={animationLeft ? 'fadeInLeft' : 'fadeInRight'}
            style={{margin:moderateScale(10)}}
            
        >
            <Shadow removeTop 
                style={{
                    ...styles.container,
                    height: moderateScale(100),
                    backgroundColor: colors.white 
                }}> 
                    <View style={styles.subContainer}>
                        <View style={[styles.containerImage, themeClasses.fullCenterAlign]}>
                            <Icon style={[styles.iconImage]} name={"truck-loading"} type={"FontAwesome5"} />
                        </View>

                        <View style={styles.containerText}>
                            <Text numberOfLines={1} style={[fontStyles.h1Bold, {color: "black"}]} >{name ? name : "N/A"}</Text>
                            <Text style={[fontStyles.h3, { marginTop: moderateScale(5) }]} >{createdAt ? moment(createdAt).format("DD/MM/YYYY HH a").toString() : "N/A"}</Text>
                            <Text style={[fontStyles.h3, { marginTop: moderateScale(10) }]}>Estatus: <Text style={[fontStyles.h2, {color: "black"}]}>{status ? status : "0"}</Text></Text>
                        </View>

                        <View style={styles.containerIcons}>
                            <TouchableOpacity 
                                style={styles.containerIcon} 
                                onPress={()=>{
                                    Actions.Visit({
                                        edit: true,
                                        item: item,
                                    })
                                }}
                            >
                                <Icon style={styles.icon} name={"map"} type={"Feather"} />
                            </TouchableOpacity>
                        </View>
                    </View>
            </Shadow>
        </Animatable.View>
    )
}

export default VisitDetails;