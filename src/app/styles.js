import { moderateScale } from 'react-native-size-matters'
import { Dimensions } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { getBottomSpace } from 'react-native-iphone-x-helper';

//Colors
const principal = '#7CC3EA';
const secondaryBlue = '#263AC3';
const secondaryBlack = 'rgb(0,0,0)';
const secondaryGray = 'rgb(99,95,96)';
const secondaryGray2 = 'rgba(149,149,149,0.13)';
const secondaryGray3 = "#8B8B8B"
const secondaryGrayTitle = "#9D9D9D"
const white = 'rgb(255,255,255)';
const grisHex = '#9FA7B7';
const line = '#e8e8e8';
const green = "#1CCD7A";
const backgroundColor = "#FAFAFA";
const purple = "#582F8A";
const yellow = "#FFCA00";
const rose = "#FF7E7E";

module.exports = {
    colors:{
        principal,
        secondaryBlue,
        secondaryBlack,
        secondaryGray,
        secondaryGray2,
        secondaryGray3,
        white,
        grisHex,
        line,
        green,
        backgroundColor,
        purple,
        secondaryGrayTitle,
        yellow,
        rose
    },
    fontStyles:{
        title:{
            fontSize:moderateScale(25),
            fontWeight:"bold",
            color:secondaryBlack,
        },
        h1Bold:{
            fontSize:moderateScale(18),
            fontWeight:"bold",
            color:secondaryGray,
        },
        h1BoldWhite:{
            fontSize:moderateScale(18),
            fontWeight:"bold",
            color:white,
        },
        h1:{
            fontSize:moderateScale(18),
            color:secondaryBlack,
        },
        h2Bold:{
            fontSize:moderateScale(16),
            fontWeight:"bold",
            color:secondaryGray,
        },
        h2:{
            fontSize:moderateScale(16),
            color:secondaryGray,
        },
        h3Bold:{
            fontSize:moderateScale(14),
            fontWeight:"bold",
            color:secondaryGray,
        },
        h3:{
            fontSize:moderateScale(14),
            color:secondaryGray,
        },
        textBold:{
            fontSize:moderateScale(12),
            color:secondaryGray,
            fontWeight:"bold",
        },
        text:{
            fontSize:moderateScale(12),
            color:secondaryGray,
        },
        captionBold:{
            fontSize:moderateScale(8),
            color:secondaryGray,
            fontWeight:"bold",
        },
        caption:{
            fontSize:moderateScale(8),
            color:secondaryGray,
        },
    },
    themeClasses:{
        container:{
            flex:1,
            backgroundColor:backgroundColor,
        },
        horizontalRow:{
            width:"100%",
            flexDirection: "row",
        },
        paddingTop:{
            paddingTop:getStatusBarHeight(true) ? getStatusBarHeight(true) + moderateScale(10) : moderateScale(5)
        },
        paddingBottom:{
            paddingBottom:getBottomSpace()
        },
        fullCenterAlign:{
            alignItems: 'center', 
            justifyContent: 'center'
        },
        marginHorizontal:{
            paddingHorizontal:moderateScale(20)
        },
    },
    dimensions:{
        width:Dimensions.get("window").width,
        height:Dimensions.get("window").height,
    }
}
