import React, { Component } from "react";

import { View, Text, Alert} from "react-native"
import QRCodeScanner from "react-native-qrcode-scanner"
import { Actions } from "react-native-router-flux";
import { moderateScale } from "react-native-size-matters"
import { getFilter } from "../../../API/Services";
import { getUserInfo } from "../../../common/userInfo";

//styles
const dimensions = require('../../styles').dimensions
const styles = require('./styles').styles;

class QrCodeCamera extends Component {
  constructor(){
    super()
    this.state={
      modalQr:false,
      QRDa:"",
      item:{}
    }
  }
  onSuccess(e) {
    this.check(e.data) 
  }

  async check(data){
    const userInfo = JSON.parse(await getUserInfo());
    console.log(data)
    const filter = {
        "where":{
            "id": data
        }
    }
    const bay = await getFilter(filter, "Bays", null,userInfo.token);
    if(!bay.error){
        if(bay.length){
            Actions.Reserve({
                bay: bay[0]
            })
        }
    }
  }

  lookSummary(){
    
  }
  componentWillMount(){
    
  }
  render() {
    return (
      <View >
        <QRCodeScanner
          showMarker
          ref={(node) => { this.scanner = node }}
          onRead={this.onSuccess.bind(this)}
          cameraStyle={{ height: dimensions.height }}
          customMarker={
            <View style={styles.rectangleContainer}>
              <View style={styles.topOverlay}>
                <Text style={{ fontSize: moderateScale(22), color: "white", textAlign:'center'}}>
                  Coloque el lector sobre el código QR.
                </Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={styles.leftAndRightOverlay} />

                <View style={styles.rectangle}>
            
                </View>

                <View style={styles.leftAndRightOverlay} />
              </View>

              <View style={styles.bottomOverlay} />
            </View>
          }
        />
      </View>
    );
  }
}


export default QrCodeCamera;
