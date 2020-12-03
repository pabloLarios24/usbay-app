import React from 'react'
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Image,
    Alert,
    StatusBar, 
    ScrollView
} from 'react-native'
import { moderateScale } from 'react-native-size-matters';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import Spinner from 'react-native-loading-spinner-overlay';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';

//import querys
import { login, post } from '../../../API/Services'
import { setUserInfo } from '../../../common/userInfo';

//import components 
import Shadow from '../../components/dynamicShadow'
//import strings err
import { ErrTitle, ErrLogin } from '../../../common/err.string';

//import styles
const styles = require('./styles').styles;
const fontStyles = require('../../styles').fontStyles;
const colors = require('../../styles').colors;
const themeClasses = require('../../styles').themeClasses;

export default class Login extends React.Component{
    constructor(){
        super();
        this.state = {
            email: "",
            password: "",
            isLoading: false
        }
    }

    async login(){
        const data = {
            "password":this.state.password,
            "email":this.state.email,
        }
        const res = await post(data,"AppUsers/login", "")
        if(!res.error){
            const data = {
                "token": res.id,
                "userId": res.userId,
            }
            setUserInfo(JSON.stringify(data))
            Actions.reset("Home")
        }
        else{
            Alert.alert(ErrTitle, ErrLogin)
        }
    }

    render(){
        return(
            <ScrollView
                contentContainerStyle={{paddingBottom: moderateScale(100)}}
            >

                <View style={[styles.containerMain, themeClasses.container, themeClasses.paddingTop]}>
                    <StatusBar  barStyle={'dark-content'}/>
                    <Spinner
                        visible={this.state.isLoading}
                        textContent={'Cargando...'}
                    />
                    <ScrollView>
                        <View style={[styles.containerImage]}>
                            <Image source={require("../../../images/logo.png")} resizeMode={"contain"} style={{width: "100%", height: "92%", marginTop: moderateScale(50)}} />
                        </View>
                        <View style={styles.container}>
                            <Text style={[fontStyles.h1Bold, { color: colors.white}]}>Iniciar sesión en<Text style={[fontStyles.h1Bold, { fontStyle: "italic", color: colors.white }]}> SafeU</Text></Text>
                            <Text style={[fontStyles.h2, { textAlign: "center", marginTop: moderateScale(10), color: colors.white }]}>Bienvenido</Text>
                        </View>
                        {/* Buttons */}
                        <View
                            style={styles.container}
                        >
                            <Shadow
                                style={styles.containerInput}
                                removeTop
                            >
                                <TextInput 
                                    style={styles.input}
                                    placeholder={"Correo electrónico ó Usuario"}
                                    placeholderTextColor={colors.grisHex}
                                    onChangeText={(email)=>{
                                        this.setState({email})
                                    }}
                                    textContentType={"emailAddress"}
                                    autoCapitalize={"none"}
                                />
                            </Shadow>
                            <Shadow
                                style={styles.containerInput}
                                removeTop
                            >
                                <TextInput 
                                    style={styles.input}
                                    placeholder={"Contraseña"}
                                    placeholderTextColor={colors.grisHex}
                                    onChangeText={(password)=>{
                                        this.setState({password})
                                    }}
                                    secureTextEntry={true}
                                    textContentType={"password"}
                                />
                            </Shadow>
                            
                            <TouchableOpacity
                                style={[styles.buttonsLogin ,{marginTop: moderateScale(50)}]}
                                onPress={()=>{
                                    this.login()
                                }}
                            >
                                <Text style={[fontStyles.h3Bold, { marginLeft: moderateScale(10), color: colors.white }]}>Iniciar sesión</Text>
                            </TouchableOpacity>
                        </View>
                        <KeyboardSpacer/>
                    </ScrollView>
                </View>
            </ScrollView>
        )
    }
}