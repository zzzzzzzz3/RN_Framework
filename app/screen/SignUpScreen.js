import React ,{Component} from 'react'
import BaseScreen from "./BaseScreen";
import {View, Text, TextInput} from "react-native";
import Color from "../style/Color";
import DoubleButton from "../component/DoubleButton";
import NavigationActions from "react-navigation/src/NavigationActions";
import {connect} from "react-redux";
import {default as styles} from '../style/SignUpScreenStyle'

@connect()
export default class SignUpScreen extends BaseScreen {


    constructor(props) {
        super(props);
    }

    renderNavbar() {
        return null
    }

    signUp = () => {
        this.props.dispatch(NavigationActions.reset({
            index:0,
            actions:[NavigationActions.navigate({routeName:'Main'})]
        }))
    };

    onNameChange = (name) => {

    };

    onEmailChange = (email) => {

    };

    onPassChange = (pass) => {

    };

    onComfirmChange = (pass) => {

    };

    renderContent() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>CREATE AN ACCOUNT</Text>
                {/* name */}
                <Input
                    hint={'First Name or Last Name'}
                    onTextChange={this.onNameChange}
                />
                {/* email */}
                <Input
                    hint={'Email'}
                    onTextChange={this.onEmailChange}
                />
                {/* password */}
                <Input
                    hint={'Password'}
                    onTextChange={this.onPassChange}
                />
                {/* comfirm */}
                <Input
                    hint={'Comfirm Password'}
                    onTextChange={this.onComfirmChange}
                />


                <DoubleButton
                    onPress={this.signUp}
                    style={[styles.button,{marginTop:30}]}
                    title={'SIGN UP'}
                />

                <Text style={styles.bottomText}>By signing up,you agree with our terms & conditions</Text>
            </View>
        )
    }
}

class Input extends Component{

    render(){
        return(
            <DoubleButton
                frontColor={Color.white}
                backColor={Color.BabyBlue}
                style={styles.button}
                content={(
                    <TextInput
                        underlineColorAndroid='transparent'
                        placeholderTextColor={Color.red}
                        placeholder={this.props.hint}
                        onChangeText={this.props.onTextChange}
                        numberOfLines={1}
                        style={styles.input}/>
                )}
            />
        )
    }
}
