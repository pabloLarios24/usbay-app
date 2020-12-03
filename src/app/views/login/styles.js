import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters';

// import styles
const fontStyles = require('../../styles').fontStyles;
const colors = require('../../styles').colors;
const themeClasses = require('../../styles').themeClasses;
const dimensions = require('../../styles').dimensions

let styles = StyleSheet.create({
    containerImage:{
        width: "100%", 
        height: dimensions.height * .38, 
        overflow: "hidden"
    },
    containerOver:{
        position:"absolute",
        top: dimensions.height * .33,
    },
    iconHeader:{
        color:colors.secondaryBlue,
        fontSize: moderateScale(25)
    },
    iconButton:{
        color:colors.white,
        fontSize: moderateScale(20)
    },
    containerIconsHeader:{
        width:"100%", 
        flexDirection:"row", 
        ...themeClasses.marginHorizontal, 
        justifyContent:"space-between",
        marginTop: moderateScale(10)
    },
    container:{
        width:"100%", 
        ...themeClasses.fullCenterAlign, 
        ...themeClasses.marginHorizontal, 
        marginTop: moderateScale(30)
    },
    containerMain:{
        width: dimensions.width,
        height: dimensions.height,
    },
    buttonsLogin:{
        width: moderateScale(240),
        height: moderateScale(40),
        borderRadius: moderateScale(20),
        ...themeClasses.fullCenterAlign,
        flexDirection:"row",
        backgroundColor: colors.principal,
    },
    containerInput:{
        width: moderateScale(220),
        height: moderateScale(40),
        borderRadius: moderateScale(20),
        ...themeClasses.fullCenterAlign,
        backgroundColor: colors.white,
        marginTop:moderateScale(20),
        paddingLeft: moderateScale(10),
        shadowColor: colors.principal,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: .51 ,
        shadowRadius: moderateScale(10),
    },
    input:{
        ...fontStyles.h3Bold,
        color: colors.secondaryBlack,
    }
})

module.exports = {
    styles
}