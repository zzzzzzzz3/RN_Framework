import React, {Component} from 'react'
import BaseScreen from "./BaseScreen";
import {
    View,
    Text,
    TextInput
} from "react-native";
import {connect} from "react-redux";
import Color from "../style/Color";
import NavigationActions from "react-navigation/src/NavigationActions";
import DoubleButton from "../component/DoubleButton";
import {Toast} from 'antd-mobile'
import {createAction} from "../utils";
import TextButton from "../component/TextButton";
import {default as styles} from '../style/LoginScreenStyle'


@connect()
export default class SignInScreen extends BaseScreen {


    signUp = () => {
        this.props.dispatch(NavigationActions.navigate({routeName: 'SignUp'}))
    };


    signIn = () => {
        this.props.dispatch(createAction('app/login')({email: this.state.email, password: this.state.password}))
    };

    forgotPass = () => {
        Toast.info('forgot password', 1)
    };

    onEmailChange = (email) => {
        this.setState(previousState => {
            return {...previousState, email: email};
        });
    };

    onPassworkChange = (pass) => {
        this.setState(previousState => {
            return {...previousState, password: pass};
        });
    };


    renderNavbar() {
        return null
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
                    {/* Email */}
                    <Input
                        hint={'Email'}
                        onTextChange={this.onEmailChange}
                    />
                    {/* password */}
                    <Input
                        hint={'Password'}
                        onTextChange={this.onPassworkChange}
                    />
                    {/* forgot password */}
                    <TextButton
                        onPress={this.forgotPass}
                        title="Forgot password?"
                        style={styles.forgot}
                    />
                    {/* sign in */}
                    <DoubleButton
                        onPress={this.signIn}
                        style={styles.button}
                        title='SIGN IN'
                    />
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

class Input extends Component {

    render() {
        return (
            <DoubleButton
                frontColor={Color.white}
                backColor={Color.BabyBlue}
                style={styles.button}
                content={(

                    <TextInput
                        underlineColorAndroid="transparent"
                        placeholderTextColor={Color.red}
                        placeholder={this.props.hint}
                        onChangeText={this.props.onChangeText}
                        numberOfLines={1}
                        style={styles.input}/>

                )}
            />
        )
    }
}