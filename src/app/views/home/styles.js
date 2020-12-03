import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters';

// import styles
const colors = require('../../styles').colors;
const themeClasses = require('../../styles').themeClasses;
const dimensions = require('../../styles').dimensions

let styles = StyleSheet.create({
    flotingButton:{
        width: moderateScale(60),
        height: moderateScale(60),
        borderRadius: moderateScale(30),
        backgroundColor: colors.principal,
        position: "absolute",
        top: dimensions.height - moderateScale(160),
        right: moderateScale(10),
        ...themeClasses.fullCenterAlign
    },
    iconPlus:{
        fontSize: moderateScale(30),
        color: colors.white
    },
    iconImage:{
        color: colors.secondaryBlue,
        fontSize: moderateScale(25)
    }
})

module.exports = {
    styles
}