import { moderateScale } from 'react-native-size-matters';
// import styles
const colors = require('../../styles').colors;
const dimensions = require('../../styles').dimensions

const overlayColor = "rgba(0,0,0,0.5)"; // this gives us a black color with a 50% transparency

const rectBorderWidth = dimensions.width * 0.005; // this is equivalent to 2 from a 393 device width

const scanBarWidth = dimensions.width * 0.46; // this is equivalent to 180 from a 393 device width
const scanBarHeight = dimensions.width * 0.0025; //this is equivalent to 1 from a 393 device width
const scanBarColor = "#22ff00";



const styles = {
  rectangleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },

  rectangle: {
    height: '50%',
    width: '60%',
    borderWidth: rectBorderWidth,
    borderColor:'transparent',
    borderRadius:moderateScale(100),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },

  topOverlay: {
    flex: 1,
    height: dimensions.height,
    width: dimensions.width,
    backgroundColor: overlayColor,
    justifyContent: "center",
    alignItems: "center"
  },

  bottomOverlay: {
    flex: 1,
    height: dimensions.height,
    width: dimensions.width,
    backgroundColor: overlayColor,
    paddingBottom: dimensions.width * 0.25
  },

  leftAndRightOverlay: {
    height: dimensions.width * 0.65,
    width: dimensions.width,
    backgroundColor: overlayColor
  },

  scanBar: {
    width: scanBarWidth,
    height: scanBarHeight,
    backgroundColor: scanBarColor
  }
};

module.exports = {
    styles
}