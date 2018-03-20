import React from 'react'
import BaseScreen from "./BaseScreen";
import {
    View,
    StyleSheet, Image, ImageBackground
} from "react-native";
import BaseStyle from "../style/BaseStyles";
import {Button} from "antd-mobile";
import {connect} from "react-redux";
import Color from "../style/Color";
import NavigationActions from "react-navigation/src/NavigationActions";


@connect()
export default class SplashScreen extends BaseScreen{

    constructor(props) {
        super(props);

        this.state = {
            animated: true,
            backgroundColor: Color.status_bar,
            barStyle:'dark-content',
            networkActivityIndicatorVisible:false,
            hidden:true,
            showHideTransition:'fade'
        }
    }

    gotoHome = () => {
        // this.props.dispatch(NavigationActions.navigate({ routeName: 'Main' }))
        this.props.dispatch(NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Main' })],
        }))
    };

    renderNavbar(){
        return null
    }

    renderContent(){
        return(
            <View style={BaseStyle.container}>
                <ImageBackground style={styles.bg} source={require('../images/bg.jpg')}>
                    <Button onClick={this.gotoHome}>GO SOLO</Button>
                </ImageBackground>
            </View>
        )
    }

}


const styles = StyleSheet.create({
    bg:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
});