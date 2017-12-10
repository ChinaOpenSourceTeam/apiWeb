/**
 * Created by weijq on 2017/11/11.
 */
import * as act from '../actions/login';

const initState = {
    loginRet: -1,
    userInfo: {},
    outMsg:''
};

export default function Login(state = initState, action) {
    switch (action.type) {
        case act.LOGIN_SUCCESS:
            return {
                ...state,
                loginRet: 0,
                userInfo: action.payload
            };
        case act.LOGIN_FAIL:
            return {
                ...state,
                loginRet: state.loginRet + 1
            };
        default:
            return state;
    }
}