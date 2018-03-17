import React, {PureComponent} from 'react'
import {createAction} from "../utils";
import {Alert, StyleSheet, Text, View} from "react-native";
import NavigationBar from "../component/NavigationBar";
import {NavigationActions} from '../utils'
import Color from "../style/Color";

export default class BaseScreen extends PureComponent {

    constructor(props) {
        super(props);
        // 绘制内容
        this.renderContent = this.renderContent.bind(this);
        this.renderNavbar = this.renderNavbar.bind(this);
        this.leftPress = this.leftPress.bind(this);
        this.rightPress = this.rightPress.bind(this);
        this.showLeft = this.showLeft.bind(this);
        this.showRight = this.showRight.bind(this);
        this.renderTitle = this.renderTitle.bind(this);
    }


    componentWillMount() {
        console.log(`${this.props.title} willmount`)
    }

    componentDidMount() {
        console.log(`${this.props.title} didmount`)
    }

    componentWillUnmount() {
        console.log(`${this.props.title} unmount`);
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderNavbar()}
                {this.renderContent()}
            </View>
        )
    }

    /**
     * 绘制导航栏
     * */
    renderNavbar() {
        return (
            <NavigationBar
                onLeftPress={this.leftPress}
                onRightPress={this.rightPress}
                title={this.props.title}
                rightIcon={this.rightIcon()}
                showLeft={this.showLeft()}
                showRight={this.showRight()}
                titleContent={this.renderTitle()}
            />
        )
    }

    renderTitle(){
        return null
    }

    leftPress() {
        this.props.dispatch(NavigationActions.back())
    }

    rightPress() {
    }

    /**
     * 绘制UI组件主体View
     */
    renderContent() {
        return null
    }

    showLeft() {
        return true
    }

    showRight() {
        return false
    }

    rightIcon() {
        return {name: 'rocket', size: 25, color: Color.red}
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});