import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters';

// import styles
const colors = require('../../styles').colors;
const themeClasses = require('../../styles').themeClasses;
const fontStyles = require('../../styles').fontStyles;
const dimensions = require('../../styles').dimensions


let styles = StyleSheet.create({
    subContain:{
        left: 0,
        right: 0,
        height:'100%',
        width:'100%',
        backgroundColor:colors.backgroundColor,
        paddingHorizontal:moderateScale(20)
    },
    containerImage:{
        width:moderateScale(120),
        alignItems:"center",
        height:moderateScale(120),
        borderRadius:moderateScale(60),
        backgroundColor:colors.secondaryBlue,
        marginTop: moderateScale(40),
    },
    image:{
        width:"100%",
        height:"100%"
    },
    subContainImage:{
        width:"100%", 
        height:"100%", 
        ...themeClasses.fullCenterAlign, 
        overflow: 'hidden', 
        borderRadius:moderateScale(60)
    },
    iconImage:{
        fontSize:moderateScale(50),
    },
    containerInput:{
        width: moderateScale(300),
        height: moderateScale(40),
        borderRadius: moderateScale(20),
        alignItems:"flex-start",
        justifyContent:"center",
        shadowColor: colors.line,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1 ,
        shadowRadius: moderateScale(10),
        backgroundColor: colors.white,
        marginTop:moderateScale(20),
        paddingLeft: moderateScale(10)
    },
    input:{
        ...fontStyles.h3Bold,
        color: colors.secondaryBlack,
    },
    buttonsLogin:{
        width: moderateScale(140),
        height: moderateScale(40),
        borderRadius: moderateScale(20),
        ...themeClasses.fullCenterAlign,
        flexDirection:"row",
        shadowColor: colors.line,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1 ,
        shadowRadius: moderateScale(10),
        backgroundColor: colors.white
    },
    titleINE:{
        ...fontStyles.h2Bold,
        marginTop: moderateScale(20)
    },
    cardINE:{
        width: moderateScale(300),
        height: moderateScale(120),
        borderRadius: moderateScale(10),
        borderColor: colors.line,
        borderWidth: 1,
        marginTop: moderateScale(20),
        ...themeClasses.fullCenterAlign,
        overflow: "hidden"
    },
    inputCompanions:{
        width: moderateScale(120),
        height: moderateScale(40),
        borderRadius: moderateScale(20),
        ...themeClasses.fullCenterAlign,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: .2 ,
        shadowRadius: moderateScale(10),
        backgroundColor: colors.white,
        paddingLeft: moderateScale(10),
    },
    containerCompanions:{
        ...themeClasses.horizontalRow,
        justifyContent: 'space-between',
        alignItems:"center",
        paddingHorizontal: moderateScale(10),
        marginTop:moderateScale(20),
    },
    iconPlus:{
        fontSize: moderateScale(18),
        color: colors.white
    },
    containerDatePicker:{
        width: dimensions.width * .85,
        height: moderateScale(280),
        backgroundColor: colors.white,
        ...themeClasses.fullCenterAlign,
        marginHorizontal: moderateScale(20)
    },
    containerEditImage:{
        width:moderateScale(30),
        height:moderateScale(30),
        borderRadius: moderateScale(15),
        position:"absolute",
        right: moderateScale(5),
        bottom: moderateScale(5),
        backgroundColor: colors.yellow,
        ...themeClasses.fullCenterAlign
    },
    iconEdit:{
        fontSize: moderateScale(15),
        color: colors.secondaryBlack
    }
})

module.exports = {
    styles
}