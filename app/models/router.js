import {routerReducer} from "../Router";
import NavigationActions from "react-navigation/src/NavigationActions";
import {delay} from "../utils";

const actions = [
    NavigationActions.BACK,
    NavigationActions.INIT,
    NavigationActions.NAVIGATE,
    NavigationActions.RESET,
    NavigationActions.SET_PARAMS,
    NavigationActions.URI,
];

export default {
    namespace: 'router',
    state: {
        ...routerReducer(),
    },
    reducers: {
        //改变路由状态
        apply(state, { payload: action }) {
            return routerReducer(state, action)
        },
    },
    effects: {
        //监视所有的事件
        watch: [
            function* watch({ take, call, put }) {
                while (true) {
                    const payload = yield take(actions);
                    yield put({
                        type: 'apply',
                        payload,
                    });
                    if (payload.type === 'Navigation/NAVIGATE') {
                        yield call(delay, 500)
                    }
                }
            },
            { type: 'watcher' },
        ],
    },
}