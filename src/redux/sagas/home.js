/**
 * Created by zdjie on 2017/10/16.
 */
import { call, put, takeEvery } from 'redux-saga/effects';
import {dataService}  from '../../utils/request';
import * as actMsg from '../actions/msgTip';
import * as act from '../actions/home';

function* loginSubmit(action) {
    console.log("home ---submit");
    try {
        // 数据请求参数构造
        let param={
            reqUrl:dataService.reqUrl.login,
            reqAuth:'',
            reqParam:action.payload
        };
        const response = yield call(dataService.postRequest,param);

        //处理返回结果
        if (response) {
            if(response.data.ret===0)
                yield put(act.loginFail());
            else {
                yield put(act.loginSuccess(response.data.userData[0]));
            }
        }
    } catch (error) {
        //处理异常
        yield put(actMsg.optFail(error.message));
    }
}

export default function* loginSaga() {
    yield takeEvery(act.LOGIN_SUBMIT,loginSubmit);

}