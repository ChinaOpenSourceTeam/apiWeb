/**
 * Created by zll on 2017/10/11.
 */

import { call, put, takeEvery } from 'redux-saga/effects';
import { dataService } from '../../utils/request';
import * as actMsg from '../actions/msgTip';
import * as act from '../actions/share';

function* querySysdic(action) {
    try {
        // 数据请求参数构造
        let param = {
            reqUrl: dataService.reqUrl.sysDic,
            reqAuth: '',
            // reqParam:action.payload
        };
        const response = yield call(dataService.getRequest, param);

        //处理返回结果
        if (response) {
            if (response.data.ret === 0)
                yield put(act.querySysdicFail());
            else {
                yield put(act.querySysdicSuccess(response.data.datas));
            }
        }
    } catch (error) {
        //处理异常
        yield put(actMsg.optFail(error.message));
    }
}

function* queryArea(action) {
    try {
        // 数据请求参数构造
        let param = {
            reqUrl: dataService.reqUrl.area,
            reqAuth: '',
            // reqParam:action.payload
        };
        const response = yield call(dataService.postRequest, param);

        //处理返回结果
        if (response) {
            if (response.data.ret === 0)
                yield put(act.queryAreaFail());
            else {
                yield put(act.queryAreaSuccess(response.data.datas));
            }
        }
    } catch (error) {
        //处理异常  
        yield put(actMsg.optFail(error.message));
    }
}

function* queryFactor(action) {
    try {
        // 数据请求参数构造
        let param = {
            reqUrl: dataService.reqUrl.factor,
            reqAuth: '',
            // reqParam:action.payload
        };
        const response = yield call(dataService.postRequest, param);

        //处理返回结果
        if (response) {
            if (response.data.ret === 0)
                yield put(act.queryFactorFail());
            else {
                yield put(act.queryFactorSuccess(response.data));
            }
        }
    } catch (error) {
        //处理异常
        yield put(actMsg.optFail(error.message));
    }
}

function* queryMonitorSite(action) {
    try {
        // 数据请求参数构造
        let param = {
            reqUrl: dataService.reqUrl.monitorSite,
            reqAuth: '',
            // reqParam:action.payload
        };
        const response = yield call(dataService.postRequest, param);

        //处理返回结果
        if (response) {
            if (response.data.ret === 0)
                yield put(act.querySysSiteFail());
            else {
                yield put(act.querySysSiteSuccess(response.data.datas));
            }
        }
    } catch (error) {
        //处理异常
        yield put(actMsg.optFail(error.message));
    }
}

//区域关联站点分组
function* queryMSG(action) {
    try {
        // 数据请求参数构造
        let param = {
            reqUrl: dataService.reqUrl.monitorSiteGroup,
            reqAuth: '',
            // reqParam:action.payload
        };
        const response = yield call(dataService.getRequest, param);

        //处理返回结果
        if (response) {
            if (response.data.ret === 0)
                yield put(act.querySiteGroupFail());
            else {
                yield put(act.querySiteGroupSuccess(response.data.datas));
            }
        }
    } catch (error) {
        //处理异常
        yield put(actMsg.optFail(error.message));
    }
}

export default function* shareSaga() {
    yield takeEvery(act.QUERY_SYSDIC, querySysdic);
    yield takeEvery(act.QUERY_AREA, queryArea);
    yield takeEvery(act.QUERY_FACTOR, queryFactor);
    yield takeEvery(act.QUERY_SYS_SITE, queryMonitorSite);
    yield takeEvery(act.G_QUERY_SYS_SITE, queryMSG);

}

