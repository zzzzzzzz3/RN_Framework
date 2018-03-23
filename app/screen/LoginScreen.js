import React from 'react'
import BaseScreen from "./BaseScreen";
import {
    View,
    Text,
} from "react-native";
import {connect} from "react-redux";
import NavigationActions from "react-navigation/src/NavigationActions";
import DoubleButton from "../component/DoubleButton";
import {Toast} from 'antd-mobile'
import IconButton from "../component/IconButton";
import TextButton from "../component/TextButton";
import {default as styles} from '../style/LoginScreenStyle'


@connect()
export default class LoginScreen extends BaseScreen {


    emailSignIn = () => {
        this.props.dispatch(NavigationActions.navigate({routeName:'SignIn'}))
    };

    signUp = () => {
        this.props.dispatch(NavigationActions.navigate({routeName: 'SignUp'}))
    };

    facebook = () => {
        Toast.info('facebook', 1)
    };

    linkedIn = () => {
        Toast.info('linkedIn', 1)
    };

    twitter = () => {
        Toast.info('twitter', 1)
    };


    renderNavbar() {
        return null
    }

    /**
     * 渲染登录的渠道
     * */
    renderLoginChannel() {
        const display = this.state.signIn ? 'none' : 'flex';
        return (
            <View style={{display: display}}>
                {/* Email */}
                <IconButton
                    onPress={this.emailSignIn}
                    iconName='envelope'
                    title='Sign In with Email'
                />

                {/* facebook */}
                <IconButton
                    onPress={this.facebook}
                    iconName='facebook'
                    title='Sign In with Facebook'
                />

                {/* Linkedin */}
                <IconButton
                    onPress={this.linkedIn}
                    iconName='linkedin'
                    title='Sign In with LinkedIn'
                />
                {/* Twitter */}
                <IconButton
                    onPress={this.twitter}
                    iconName='twitter'
                    title='Sign In with Twitter'
                />
            </View>
        )
    }

    /**
     * 渲染主布局
     * */
    renderContent() {
        return (
            <View style={styles.bg}>
                <Text style={styles.logo}>mixolo</Text>
                <DoubleButton
                    frontColor='#aa0000'
                    backColor='#dd0000'
                    style={styles.labelButton}
                    content={(
                        <Text style={styles.labelBtnText}>GO SOLO</Text>
                    )}
                />

                <View style={styles.content}>
                    {this.renderLoginChannel()}
                </View>

                <TextButton
                    title={"Don't have an account? Sign up"}
                    onPress={this.signUp}
                    style={styles.bottom}
                />


            </View>
        )
    }

}