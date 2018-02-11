/**
 * Created by weijq on 2017/11/9.
 */
import Qs from 'qs';

export let config = {
    baseURL: 'http://www.chinaopensource.top:9080',

    transformResponse: [function (data) {
        // 这里提前处理返回的数据
        return data;
    }],

    // 请求头信息
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
    },
    token: localStorage.getItem('access_token'),
    username: '',

    timeout: 10000,
    //返回数据类型
    responseType: 'json',
    imgServer: '192.168.10.192',
    minHeight: 0,
    maxHeight: 10005,
    heightStep: 15, // 高度步进
    heightIntervalLength: 20, //高度间隔下拉框长度
};