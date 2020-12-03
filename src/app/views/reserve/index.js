import React, { Component } from 'react'
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput, 
    Image,
    Alert
} from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { Icon } from 'native-base'
import { ScrollView } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
import Spinner from 'react-native-loading-spinner-overlay';
import DatePicker from 'react-native-date-picker'
import moment, { now } from 'moment'
import Popover from 'react-native-popover-view';
import ImagePicker from 'react-native-image-picker';

//import components
import Header from '../../components/headerBar.component'
import Shadow from '../../components/dynamicShadow';

// imports querys
import { post, functionDelete, getFilter, patch } from '../../../API/Services';

//import strings err
import { ErrTitle, ErrContentVoid, ErrCreateUser, ErrCreateVeacle, ErrCreateVisit } from '../../../common/err.string';
import { questionDeleteTitleVisit, questionDeleteVisit } from '../../../common/equestions.string';
import { getUserInfo } from '../../../common/userInfo';

//import styles
const fontStyles = require('../../styles').fontStyles;
const colors = require('../../styles').colors;
const themeClasses = require('../../styles').themeClasses;
const styles = require('./styles').styles;

//options camera
const options = {
    title: 'Select Avatar',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

export default class Reserve extends Component {
     constructor(props) {
         super(props)
         this.state={
            vehicles: Array(),
            creditCards: Array(),
            vechileSelect: null,
            creditCardSelect: null,
            showPopOver:false,
            showPopOverCar: false
         }
         this.buttonVehicle = React.createRef()
         this.buttonCreditCard = React.createRef()
    }

    showPopOver(show){
        this.setState({
            showPopOver: true,
            [show]: true
        })
    }

    async reserve(){
        const {bay} = this.props;
        const userInfo = JSON.parse(await getUserInfo());
        const data = {
            "date": moment().toDate(),
            "dateFinish": moment().add("minutes", Number.parseInt(this.state.minutes)).toDate(),
            "totalTime": this.state.minutes,
            "bayId": bay.id,
            "appUserId": userInfo.userId,
            "cardId": this.state.creditCardSelect.id,
            "price": Number.parseInt(this.state.minutes) * 2.5
        }
        const res = await post(data, "Reservations",userInfo.token)
        const pas = await patch("Bays", bay.id, {"status":"reserve"}, userInfo.token)
        if(!res.error){
            Alert.alert(
                "Exito.", 
                "La reserva a sido creada con exito.",
                [
                    { 
                        text: "Continuar", 
                        onPress: () => {
                        Actions.reset("Home")
                        } 
                    }
                ]
            )
        }
    }

    componentDidMount(){
        this.init()
    }

    async selectCreditCard(item){
        this.setState({
            creditCardSelect: item,
            showPopOver: false
        })
    }

    async selectVehicle(item){
        this.setState({
            vechileSelect: item,
            showPopOverCar: false
        })
    }

    async init(){
        const userInfo = JSON.parse(await getUserInfo());
        const filter = {
            "where":{
                "id": userInfo.userId
            },
            "include":[
                {
                    "relation":"vehicles"
                },
                {
                    "relation":"creditCards"
                }
            ]
        }
        const userData = await getFilter(filter, "AppUsers", null,userInfo.token);
        if(!userData.error){
            if(userData.length){
                await this.setState({
                    vehicles: userData[0].vehicles,
                    creditCards: userData[0].creditCards
                })
            }
        }
    }

    
    

    render() {
        let { bay } = this.props;
        let { creditCardSelect, vechileSelect, minutes } = this.state;
        return (
            <View style={themeClasses.container}>
                 <Spinner
                    visible={this.state.isLoading}
                    textContent={'Cargando...'}
                />
                <Header isBack title={ bay.name }/>  
                <View style={styles.subContain} >
                    <ScrollView
                        contentContainerStyle={{paddingBottom:moderateScale(100)}}
                    >
                        <View style={{flex:1, ...themeClasses.fullCenterAlign}}>
                            <View style={{marginTop: moderateScale(40)}}>
                                <Shadow removeTop style={styles.containerInput}>
                                    <Text style={styles.input}>
                                        Nombre de la bahia: {bay.name}
                                    </Text>
                                </Shadow>
                            </View>
                            <Shadow removeTop style={{...styles.containerInput,  shadowColor: colors.principal}}>
                                <TextInput 
                                    style={[styles.input]}
                                    placeholder={"Minutos a reservar"}
                                    placeholderTextColor={colors.grisHex}
                                    onChangeText={(minutes)=>{
                                        this.setState({minutes})
                                    }}
                                    value={this.state.minutes}
                                />
                            </Shadow>
                            <TouchableOpacity
                             ref={this.buttonCreditCard }
                             onPress={()=>{
                                 this.setState({
                                     showPopOver:true
                                 })
                             }}
                            >
                                <Shadow removeTop style={styles.containerInput}>
                                    <Text style={styles.input}>
                                        Metodo de pago: {creditCardSelect ? creditCardSelect.lastFour : ""}
                                    </Text>
                                </Shadow>
                            </TouchableOpacity>
                            <Shadow removeTop style={styles.containerInput}>
                                <Text style={styles.input}>
                                    Pago: { minutes ? Number.parseInt(minutes) * 2.5 : 0}
                                </Text>
                            </Shadow>
                            <TouchableOpacity
                             ref={this.buttonVehicle }
                             onPress={()=>{
                                this.setState({
                                    showPopOverCar:true
                                })
                            }}
                            >
                                <Text style={styles.titleINE}>Vehiculo</Text>
                            </TouchableOpacity>
                            <Shadow removeTop style={styles.containerInput}>
                                <Text style={styles.input}>
                                    Marca: {vechileSelect ? vechileSelect.brand : ""}
                                </Text>
                            </Shadow>
                            <Shadow removeTop style={styles.containerInput}>
                                <Text style={styles.input}>
                                    Modelo: {vechileSelect ? vechileSelect.model : ""}
                                </Text>
                            </Shadow>
                            <Shadow removeTop style={styles.containerInput}>
                                <Text style={styles.input}>
                                    Color: {vechileSelect ? vechileSelect.color : ""}
                                </Text>
                            </Shadow>
                            <Shadow removeTop style={styles.containerInput}>
                                <Text style={styles.input}>
                                    Placas: {vechileSelect ? vechileSelect.license_plate : ""}
                                </Text>
                            </Shadow>
                            
                            
                            {/* Buttons */}
                            <View style={[themeClasses.horizontalRow, { justifyContent: 'space-around' }]}>
                                <TouchableOpacity
                                    style={{marginTop: moderateScale(80)}}
                                    onPress={()=>{
                                       Actions.pop()
                                    }}
                                >
                                    <Shadow removeTop style={styles.buttonsLogin}>
                                    <Text style={[fontStyles.h3Bold]}>{ "Cancelar" }</Text>
                                    </Shadow>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{marginTop: moderateScale(80)}}
                                    onPress={()=>{
                                        this.reserve()
                                    }}
                                >
                                    <Shadow removeTop style={{...styles.buttonsLogin, backgroundColor: colors.principal}}>
                                        <Text style={[fontStyles.h3Bold, { color: colors.white }]}>{ "Pagar" }</Text>
                                    </Shadow>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                    <Popover
                        isVisible={this.state.showPopOver}
                        onRequestClose={()=>
                            this.setState({
                                showPopOver: false
                            })
                        }
                        from={this.buttonCreditCard}
                       
                    >   
                        <View style={{width: moderateScale(300), borderRadius: moderateScale(10)}}>
                            {
                                this.state.creditCards.length ?
                                    this.state.creditCards.map((item)=>(
                                        <TouchableOpacity 
                                            onPress={()=>{
                                                this.selectCreditCard(item)
                                            }}
                                            style={{width: "100%", height: moderateScale(40), justifyContent:'center', paddingLeft: moderateScale(15)}}
                                        >
                                            <Text>xxxx{item.lastFour}</Text>
                                        </TouchableOpacity>
                                    ))
                                :
                                    null
                            }
                        </View>
                    </Popover>

                    <Popover
                        isVisible={this.state.showPopOverCar}
                        onRequestClose={()=>
                            this.setState({
                                showPopOverCar: false
                            })
                        }
                        from={this.buttonVehicle}
                    >   
                        <View style={{width: moderateScale(300), borderRadius: moderateScale(10)}}>
                            {
                                this.state.vehicles.length ?
                                    this.state.vehicles.map((item)=>(
                                        <TouchableOpacity 
                                            onPress={()=>{
                                                this.selectVehicle(item)
                                            }}
                                            style={{width: "100%", height: moderateScale(40), justifyContent:'center', paddingLeft: moderateScale(15)}}
                                        >
                                            <Text>{item.license_plate}</Text>
                                        </TouchableOpacity>
                                    ))
                                :
                                    null
                            }
                        </View>
                    </Popover>
                </View>
            </View>
        );
    }
}