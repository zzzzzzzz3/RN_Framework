import React from 'react'
import BaseScreen from "./BaseScreen";
import {
    View,
    StyleSheet,
    Text,
} from "react-native";
import {connect} from "react-redux";
import Color from "../style/Color";
import DoubleButton from "../component/DoubleButton";
import NavigationActions from "react-navigation/src/NavigationActions";


@connect(({app}) => ({...app}))
export default class SplashScreen extends BaseScreen {

    componentDidMount() {
        setTimeout(() => {
            let screen;
            if (this.props.login) {
                screen = 'Main'
            } else {
                screen = 'Login'
            }

            this.props.dispatch(NavigationActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({routeName: screen})]
            }))
        }, 1000)
    }


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

            </View>
        )
    }

}


const styles = StyleSheet.create({
    bg: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Color.Teal
    },
    logo: {
        fontSize: 80,
        fontWeight: '800',
        marginTop: '20%',
        color: Color.white
    },
    labelBtnText: {
        fontSize: 22,
        fontWeight: '500',
        color: Color.white
    },
    labelButton: {
        width: 200,
        height: 50
    },
});