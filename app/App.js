import React from "react";
import dva from './utils/Dva';
import Router from './Router';

//model
import AppModel from './models/AppModel'
import RouterModel from './models/RouterModel';
//action
import {routerMiddleware} from './Router';

//定义dva的参数
const options = {
    initialState: {},
    //注册的models
    models: [AppModel, RouterModel],
    //注册的事件
    onAction: [routerMiddleware],
    //异常处理，所有的异常都会通过这里
    onError(e) {
        console.log("Error", e);
    }
};
const app = dva(options);
const App = app.start(<Router/>);

export default App