import React from "react";
import MainScreen from './screen/MainScreen';
import SplashScreen from "./screen/SplashScreen";
import MainNavigator from "./screen/MainNavigator";
import SearchScreen from "./screen/SearchScreen";

//路由页面配置
const StackRouteConfigs = {
    Splash:{
        screen:SplashScreen
    },
    Main: {
        screen:MainNavigator
    },

};

export default StackRouteConfigs