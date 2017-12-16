/**
 * Created by weijq on 2017/11/9.
 */
import Qs from 'qs';

export let config = {
    baseURL: 'http://www.chinaopensource.top:9080',
    //测试url
    // baseURL: 'http://192.168.10.150:3000',
    // transformRequest: [function (data) {
    //     // 这里可以在发送请求之前对请求数据做处理，比如form-data格式化等，这里可以使用开头引入的Qs（这个模块在安装axios的时候就已经安装了，不需要另外安装）
    //     data = Qs.stringify(data);
    //     return data;
    // }],
    // transformRequest: [function(data) {
    //     // Do whatever you want to transform the data
    //     let ret = '';
    //     for (let it in data) {
    //         ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    //     }
    //     return ret
    // }],


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

    //parameter参数
    // params: {
    //     ID: 12345
    // },
    //mode : 'cors' ,
    //设置超时时间
    timeout: 10000,
    //返回数据类型
    responseType: 'json',
    imgServer: '192.168.10.192',

    minHeight: 0,
    maxHeight: 10005,
    heightStep: 15, // 高度步进
    heightIntervalLength: 20, //高度间隔下拉框长度
};