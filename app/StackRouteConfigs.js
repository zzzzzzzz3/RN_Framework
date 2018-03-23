import React from "react";
import SplashScreen from "./screen/SplashScreen";
import MainNavigator from "./screen/MainNavigator";
import SignUpScreen from "./screen/SignUpScreen";
import LoginScreen from "./screen/LoginScreen";
import SettingScreen from "./screen/SettingScreen";
import AcountScreen from "./screen/AccountScreen";
import FeedbackScreen from "./screen/FeedbackScreen";
import HowMixoloScreen from "./screen/HowMixoloScreen";
import CustomerServiceScreen from "./screen/CustomerServiceScreen";
import MessagesScreen from "./screen/MessagesScreen";
import ChatScreen from "./screen/ChatScreen";
import SignInScreen from "./screen/SignInScreen";

//路由页面配置
const StackRouteConfigs = {
    Splash: {
        screen: SplashScreen
    },
    SignUp: {
        screen: SignUpScreen
    },
    Messages:{
        screen: MessagesScreen
    },
    Setting: {
        screen: SettingScreen
    },
    Main: {
        screen: MainNavigator
    },
    CustomerService:{
        screen: CustomerServiceScreen
    },
    HowMixoloWorks:{
        screen: HowMixoloScreen
    },
    Account:{
        screen: AcountScreen
    },
    Feedback:{
        screen: FeedbackScreen
    },
    Login: {
        screen: LoginScreen
    },
    Chat:{
        screen: ChatScreen
    },
    SignIn:{
        screen:SignInScreen
    }



};

export default StackRouteConfigs