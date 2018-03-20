import React, {PureComponent} from 'react'
import {createAction} from "../utils";
import {Alert, StatusBar, StyleSheet, Text, View} from "react-native";
import NavigationBar from "../component/NavigationBar";
import {NavigationActions} from '../utils'
import Color from "../style/Color";
import AppUtil from "../utils/AppUtil";

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

        this.state = {
            animated: true,
            backgroundColor: Color.status_bar,
            barStyle: 'dark-content',
            networkActivityIndicatorVisible: false,
            hidden: true,
            showHideTransition: 'fade'
        }
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

    statusBar() {
        if (this.state.hidden) {
            return null
        } else {
            return (<View style={styles.statubar}/>)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={this.state.backgroundColor}
                    translucent={this.state.translucent}
                    hidden={this.state.hidden}
                    showHideTransition={this.state.showHideTransition}
                    animated={this.state.animated}
                    barStyle={this.state.barStyle}
                    networkActivityIndicatorVisible={this.state.networkActivityIndicatorVisible}
                >
                </StatusBar>
                {this.statusBar()}
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
                leftIcon={this.leftIcon()}
                showLeft={this.showLeft()}
                showRight={this.showRight()}
                titleContent={this.renderTitle()}
            />
        )
    }

    renderTitle() {
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
        return false
    }

    showRight() {
        return false
    }

    rightIcon() {
        return null
    }

    leftIcon() {
        return {name: 'arrow-left', size: 25, color: Color.white}
    }
}

const h = AppUtil.isAnfroid() ? 0 : 20;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    statubar: {
        width: '100%',
        height: h,
        backgroundColor: Color.status_bar
    },
});