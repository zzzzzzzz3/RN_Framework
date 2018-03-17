import {createAction,Storage} from "../utils";
import NavigationActions from "react-navigation/src/NavigationActions";
import * as authService from '../service/auth';
import HttpRequest from '../utils/HttpRequest'

const AppModel =  {
    //命名空间
    namespace:"app",
    //model的数据
    state:{
        login: false,
        loading: true,
        fetching: false,
        title: 'Home'
    },
    //修改数据的唯一途径,同步方式
    reducers:{
        updateState(state, { payload }) {
            return { ...state, ...payload }
        },
    },
    //异步方式，最终会通过reducers修改数据
    effects:{
        //加载缓存
        *loadStorage(action, { call, put }) {
            const login = yield call(Storage.get, 'login', false);
            yield put(createAction('updateState')({ login, loading: false }))
        },
        //请求登录
        *login({ payload }, { call, put }) {
            yield put(createAction('updateState')({ fetching: true }));
            const login = yield call(authService.login, payload);
            if (login) {
                //重置导航栈
                yield put(
                    NavigationActions.reset({
                        index: 0,
                        actions: [NavigationActions.navigate({ routeName: 'Main' })],
                    })
                )
            }
            yield put(createAction('updateState')({ login, fetching: false }));
            Storage.set('login', login)
        },
        *logout(action, { call, put }) {
            yield call(Storage.set, 'login', false);
            yield put(createAction('updateState')({ login: false }))
        },
        *getData(action,{call,put}){
            const data = yield call(fetchData,'http://www.wanandroid.com/article/list/1/json');
            yield put(createAction('updateState')({data:data}));
        },
    },
    //用于订阅数据源，例如键盘输入等
    subscriptions:{
        //在app载入时触发
        setup({ dispatch }) {
            dispatch({ type: 'loadStorage' })
        },
    }
};

/**
 * 请求数据的例子
 * */
async function fetchData(url){
    try{
        return await HttpRequest.get(url).then( data => data);
    }catch(e){
        console.error(e);
    }

}

export default AppModel