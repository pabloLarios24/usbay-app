import AsyncStorage from "@react-native-community/async-storage";

export var userId = {}


export async function setUserInfo(info){
    await AsyncStorage.setItem("user", info);
    userId = info;
}

export async function getUserInfo(){
    let info = await AsyncStorage.getItem("user");
    userId = info;
    return info;
}
