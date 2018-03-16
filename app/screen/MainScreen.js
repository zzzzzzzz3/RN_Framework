import React, {Component} from 'react';
import {
    View,
    Text, Button
} from "react-native";
import {connect} from 'react-redux';
import MainScreenStyle from '../style/MainScreenStyle'
import BaseStyle from "../style/BaseStyles";
import {createAction} from "../utils";


@connect(({app}) => ({...app}))
class MainScreen extends Component {

    btnClick() {
        this.props.dispatch(createAction('app/getData')());
    }

    render() {
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
    navigationOptions: {
        headerTitle: (
            <View style={MainScreenStyle.headerTitle}>
                <Text style={MainScreenStyle.headerTitleText}>Home</Text>
            </View>
        ),
    }
};

export default MainScreenConfig
