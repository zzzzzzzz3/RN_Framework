import React from 'react';
import {
    View,
    Text, Alert, Image
} from "react-native";
import {connect} from 'react-redux';
import MainScreenStyle from '../style/MainScreenStyle'
import BaseStyle from "../style/BaseStyles";
import {createAction} from "../utils";
import BaseScreen from "./BaseScreen";
import Color from '../style/Color'
import {Button} from 'antd-mobile'


@connect(({app}) => ({...app}))
export default class MainScreen extends BaseScreen {

    componentWillMount(){
        this.getData()
    }


    getData() {
        this.props.dispatch(createAction('app/getData')());
    }

    rightPress() {
        Alert.alert("left click")
    }

    renderContent() {
        const {data} = this.props;
        return (
            <View style={[BaseStyle.container, MainScreenStyle.container]}>
                <Button onClick={this.getData.bind(this)} type='primary'>get data</Button>
                <Text>hello{data != undefined ? data.data.datas[0].chapterName : ""}</Text>
            </View>
        );
    }
}
