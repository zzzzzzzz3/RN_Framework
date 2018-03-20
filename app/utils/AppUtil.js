import {Dimensions,Platform} from "react-native";

export default class AppUtil{
    static windowWidth  = Dimensions.get('window').width;
    static windowHeight  = Dimensions.get('window').height;

    static isAnfroid(){
        return Platform.OS === 'android'
    }

    static version = Platform.Version;
}