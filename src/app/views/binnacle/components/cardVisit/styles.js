import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters';

// import styles
const colors = require('../../../../styles').colors;
const themeClasses = require('../../../../styles').themeClasses;
const dimensions = require('../../../../styles').dimensions

let styles = StyleSheet.create({
    container:{
        shadowColor: colors.line,
        shadowOffset: {
            width: moderateScale(5),
            height: moderateScale(10),
        },
        shadowOpacity: 1 ,
        shadowRadius: moderateScale(10),
        width:dimensions.width * .95, 
        height:moderateScale(100), 
        borderRadius:moderateScale(10),
    },
    subContainer:{
        height:"100%", 
        width:"100%", 
        flexDirection:"row", 
        paddingVertical:moderateScale(10)
    },
    containerSubTitle:{
        borderBottomColor: colors.white,
        borderBottomWidth: 1,
        padding: moderateScale(5)
    },
    containerImage:{
        width:moderateScale(80),
        alignItems:"center",
        height:moderateScale(80),
        borderRadius:moderateScale(10),
        backgroundColor:colors.principal,
        marginLeft:moderateScale(10)
    }, 
    containerText:{
        width:moderateScale(190),
        height:moderateScale(80),
        justifyContent:"center",
        marginLeft:moderateScale(10)
    },
    containerIcons:{
        width:moderateScale(70),
        height:moderateScale(80),
        alignItems:"center"
    },
    containerIcon:{
        width:moderateScale(25),
        height:moderateScale(25),
        borderRadius:moderateScale(12.5),
        backgroundColor: colors.principal,
        marginBottom:moderateScale(10),
        ...themeClasses.fullCenterAlign
    },
    icon:{
        fontSize:moderateScale(14),
        color: colors.white
    },
    iconImage:{
        fontSize:moderateScale(40),
    }

})

module.exports = {
    styles
}