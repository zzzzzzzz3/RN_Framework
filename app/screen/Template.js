import React from 'react'
import BaseScreen from "./BaseScreen";
import {
    View,StyleSheet
} from 'react-native'
import {connect} from "react-redux";


@connect()
export default class AcountScreen extends BaseScreen{

    static defaultProps = {
        title:'ACCOUNT'
    };

    showLeft(){
        return true
    }

    showRight(){
        return false
    }

    renderContent(){
        return(
            <View></View>
        )
    }

}

const styles = StyleSheet.create({

});