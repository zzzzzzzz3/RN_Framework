import React, {Component} from 'react';
import {
    View,
    Text, Button, Alert, Image
} from "react-native";
import {connect} from 'react-redux';
import MainScreenStyle from '../style/MainScreenStyle'
import BaseStyle from "../style/BaseStyles";
import {createAction} from "../utils";
import BaseScreen from "./BaseScreen";


@connect(({app}) => ({...app}))
class MainScreen extends BaseScreen {

    btnClick() {
        this.props.dispatch(createAction('app/getData')());
    }

    rightPress() {
        Alert.alert("left click")
    }

    showLeft(){
        return false
    }

    showRight(){
        return false
    }

    renderTitle(){
        return(
            <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <Image source = {require('../images/github.png')} style={{width:50,height:50,borderRadius:25,marginRight:10}}/>
                <Text style={BaseStyle.title}>{this.props.title}</Text>
            </View>
        )
    }

    renderContent() {
        const {data} = this.props;
        return (
            <View style={[BaseStyle.container, MainScreenStyle.container]}>
                <Button title="get data" onPress={this.btnClick.bind(this)}/>
                <Text>hello{data != undefined ? data.data.datas[0].chapterName : ""}</Text>
            </View>
        );
    }
}

const MainScreenConfig = {
    screen: MainScreen,
    // navigationOptions: {
    //     headerTitle: (
    //         <View style={MainScreenStyle.headerTitle}>
    //             <Text style={MainScreenStyle.headerTitleText}>Home</Text>
    //         </View>
    //     ),
    // }
};

export default MainScreenConfig
