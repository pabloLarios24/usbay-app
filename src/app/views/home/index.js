import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Spinner from 'react-native-loading-spinner-overlay';
import MapView,{Marker} from 'react-native-maps'
import * as Animatable from 'react-native-animatable';

//import components
import Header from '../../components/headerBar.component'
import { getFilter } from '../../../API/Services';
import { getUserInfo } from '../../../common/userInfo';



//import styles
const styles = require('./styles').styles;
const themeClasses = require('../../styles').themeClasses;
const dimensions = require('../../styles').dimensions;




export default class Map extends Component {
     constructor(props) {
         super(props)
         this.state={
             isLoading: false,
             bays: Array()
         }
    }

    componentDidMount(){
        this.init()
    }

    async init(){
        await this.setState({
            isLoading: true
        })
        const userInfo = JSON.parse(await getUserInfo());
        const filter = {
            "where":{
                "status": "open"
            }
        }
        const bays = await getFilter(filter, "Bays", null, userInfo.token);
        if(bays.length){
            await this.setState({
                bays,
                isLoading: false
            })
        }else{
            await this.setState({
                isLoading: false
            })
        }
    }

    toScan(){
        Actions.QrScann()
    }

    render() {
        return (
            <View style={[themeClasses.container]}>
                <Spinner
                    visible={this.state.isLoading}
                    textContent={'Cargando...'}
                />
                <Header title={"Bahías"}/>
                <View style={{width:"100%"}}>
                    {/* Visit */}
                    <View style={{width:"100%", flexDirection:"row",  flexWrap:"wrap"}}>
                        <MapView
                            style={{width:'100%',height: dimensions.height}}
                            region={{
                                latitude:20.659698,
                                longitude:-103.349609,
                                latitudeDelta:0.0922,
                                longitudeDelta:0.0421
                            }}
                        >
                            {
                                this.state.bays.length ?
                                    this.state.bays.map((item)=>(
                                        <Marker
                                            coordinate={{
                                                latitude:item.location.lat,
                                                longitude:item.location.lng,
                                            }}
                                            title={item.name}
                                            onPress={()=>{
                                                Actions.Reserve({
                                                    bay: item
                                                })
                                            }}
                                        >
                                            
                                                <Icon style={[styles.iconImage]} name={"truck-loading"} type={"FontAwesome5"}/>
                                           
                                        </Marker>
                                    ))
                                :
                                    null
                            }
                        </MapView>
                    </View>                    
                    <Animatable.View 
                        animation={'fadeInUpBig'} 
                        style={styles.flotingButton}           
                    >
                        <TouchableOpacity 
                             
                            onPress={()=>{
                                this.toScan()
                            }}
                        >
                            <Icon style={styles.iconPlus} type={'AntDesign'} name={'qrcode'} />
                        </TouchableOpacity>
                    </Animatable.View>

                </View>
        </View>
        );
    }
}
