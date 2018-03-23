import React from 'react'
import BaseScreen from "./BaseScreen";
import {
    View, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity, Text,
} from 'react-native'
import BaseStyle from "../style/BaseStyles";
import Color from '../style/Color'
import {connect} from "react-redux";
import {Toast} from "antd-mobile";
import Icon from "react-native-vector-icons/FontAwesome";
import NavigationActions from "react-navigation/src/NavigationActions";
import DoubleButton from "../component/DoubleButton";
import AppUtil from "../utils/AppUtil";
import Slider from "react-native-slider";
import {Switch} from 'react-native-switch'

@connect()
export default class SettingScreen extends BaseScreen {

    static defaultProps = {
        title: 'SETTINGS'
    };

    showRight() {
        return false
    }

    showLeft() {
        return true
    }

    resetPass = () => {
        Toast.info('reset password')
    };

    toAccount = () => {
        this.props.dispatch(NavigationActions.navigate({routeName: 'Account'}))
    };

    logout = () => {
        Toast.info('logout', 1)
    };

    deleteAccount = () => {
        Toast.info('delete account', 1)
    };

    onValueChange = (value) => {
        this.setState({value: value})
    };

    renderContent() {
        return (
            <ScrollView style={BaseStyle.container}>
                //用户信息
                <View style={styles.userInfo}>
                    //头像
                    <Image style={styles.userAvatar} source={require('../images/jobs.jpeg')}/>
                    //信息
                    <View style={styles.rightInfo}>
                        <TextInput style={styles.input} placeholder='FIRST NAME' placeholderTextColor={Color.gray}
                                   numberOfLines={1}/>
                        <TextInput style={styles.input} placeholder='LAST NAME' placeholderTextColor={Color.gray}
                                   numberOfLines={1}/>
                        <TextInput style={styles.input} placeholder='USERNAME' placeholderTextColor={Color.gray}
                                   numberOfLines={1}/>
                        <TouchableOpacity
                            style={styles.resetButton}
                            onPress={this.resetPass}
                        >
                            <Text style={styles.resetText}>PASSWORD RESET</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                //其他信息
                <View style={styles.content}>
                    //兴趣
                    <TextInput style={styles.underLineInput} placeholder='INSTERSTS' placeholderTextColor={Color.gray}
                               numberOfLines={1}/>
                    //地址
                    <TextInput style={styles.underLineInput} placeholder='LOCATION' placeholderTextColor={Color.gray}
                               numberOfLines={1}/>
                    //距离
                    <Text style={styles.label}>MAX.DISTANCE</Text>
                    <Slider
                        style={styles.slider}
                        trackStyle={styles.track}
                        thumbStyle={styles.thumb}
                        minimumTrackTintColor={Color.Teal}
                    />
                    //年龄
                    <Text style={styles.label}>AGE</Text>
                    <Slider
                        style={styles.slider}
                        trackStyle={styles.track}
                        thumbStyle={styles.thumb}
                        minimumTrackTintColor={Color.Teal}
                    />
                    //公开信息
                    <View style={styles.underLine}>
                        <Text style={BaseStyle.graytext}>PUBLIC PROFILE</Text>
                        <Switch
                            value={true}
                            onValueChange={(val) => console.log(val)}
                            disabled={false}
                            activeText={''}
                            inActiveText={''}
                            circleSize={30}
                            barHeight={30}
                            circleBorderWidth={1}
                            backgroundActive={Color.BabyBlue}
                            backgroundInactive={Color.gray}
                            circleActiveColor={Color.white}
                            circleInActiveColor={Color.white}
                        />
                    </View>
                    //消息推送
                    <View style={styles.underLine}>
                        <Text style={BaseStyle.graytext}>PUSH NOTIFICATIONS</Text>
                        <Switch
                            value={true}
                            onValueChange={(val) => console.log(val)}
                            disabled={false}
                            activeText={''}
                            inActiveText={''}
                            circleSize={30}
                            barHeight={30}
                            circleBorderWidth={1}
                            backgroundActive={Color.BabyBlue}
                            backgroundInactive={Color.gray}
                            circleActiveColor={Color.white}
                            circleInActiveColor={Color.white}
                        />
                    </View>
                    //震动和声音
                    <View style={styles.underLine}>
                        <Text style={BaseStyle.graytext}>APP SOUNDS/VIBRATION</Text>
                        <Switch
                            value={true}
                            onValueChange={(val) => console.log(val)}
                            disabled={false}
                            activeText={''}
                            inActiveText={''}
                            circleSize={30}
                            barHeight={30}
                            circleBorderWidth={1}
                            backgroundActive={Color.BabyBlue}
                            backgroundInactive={Color.gray}
                            circleActiveColor={Color.white}
                            circleInActiveColor={Color.white}
                        />
                    </View>
                    //账户
                    <TouchableOpacity style={styles.underLine}
                                      onPress={this.toAccount}
                    >
                        <Text style={BaseStyle.graytext}>ACCOUNT</Text>
                        <Icon name='angle-right' color={Color.gray} size={30} style={{marginRight: 15}}/>
                    </TouchableOpacity>

                    //注销登录
                    <DoubleButton
                        frontColor={Color.Teal}
                        backColor={Color.BabyBlue}
                        content={(
                            <Text style={BaseStyle.text}>LOG OUT</Text>
                        )}
                        style={{width: AppUtil.windowWidth - 46, height: 48, marginVertical: 30}}
                        onPress={this.logout}
                    />

                    //删除用户
                    <TouchableOpacity
                        onPress={this.deleteAccount}
                        style={{marginBottom: 20, borderColor: Color.gray, borderBottomWidth: 1}}
                    >
                        <Text style={{fontSize: 10, color: Color.gray}}>DELETE ACCOUNT</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    userInfo: {
        flexDirection: 'row',
        height: 160,
        width: '100%'
    },
    userAvatar: {
        width: 160,
        height: 160,
        borderWidth: 1,
        borderColor: Color.gray
    },
    rightInfo: {
        flex: 1,
        paddingHorizontal: 20,
    },
    input: {
        fontSize: 14,
        color: Color.gray,
        borderColor: Color.gray,
        borderBottomWidth: 1,
        flex: 1,
        marginVertical: 10
    },
    resetButton: {
        alignSelf: 'flex-end',
        padding: 5,
        borderColor: Color.gray,
        borderWidth: 1
    },
    resetText: {
        fontSize: 8,
        color: Color.gray
    },
    content: {
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    underLine: {
        width: '100%',
        height: 38,
        marginTop: 10,
        borderColor: Color.gray,
        borderBottomWidth: 1,
        paddingLeft: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    underLineInput: {
        width: '100%',
        height: 30,
        marginTop: 20,
        borderColor: Color.gray,
        borderBottomWidth: 1,
        paddingLeft: 3,
        fontSize: 14,
        color: Color.gray,
    },
    label: {
        width: '100%',
        height: 30,
        marginTop: 20,
        paddingLeft: 3,
        fontSize: 14,
        color: Color.gray,
    },
    slider: {
        marginVertical: 5,
        width: '100%',
    },
    track: {
        height: 4,
        borderRadius: 2,
    },
    thumb: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: Color.BabyBlue,
        borderColor: Color.gray,
        borderWidth: 1,
    },

});
