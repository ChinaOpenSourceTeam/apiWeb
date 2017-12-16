/* 
 * @Title: $undefined 
 * @Description: Todo 
 * @Author: weijq (韦继强) 
 * @Date: 2017-12-06 18:52:59 
 * @Last Modified time: 2017-12-06 18:52:59 
 * @Version:V1.0 
 * Copyright: Copyright (c) 2017' 
 */

import axios from 'axios';
import { config } from './config';
import qs from 'qs';
axios.defaults.headers.common['Authorization'] = localStorage.getItem('access_token');

export const dataService = {
    postRequest: (params) => {
        return new Promise(function (resolve, reject) {
            const access_token = localStorage.getItem('access_token');
            const username = localStorage.getItem('username');
            axios.post(params.reqUrl + '?access_token=' + access_token + '&username=' + username, params.reqParam, config)
                .then(function (res) {
                    resolve(res);
                })
                .catch(function (err) {
                    reject(err);
                })
        });
    },
    getRequest: (params) => {
        return new Promise(function (resolve, reject) {
            const access_token = localStorage.getItem('access_token');
            const username = localStorage.getItem('username');
            axios.get(params.reqUrl + '?access_token=' + access_token + '&username=' + username, config)
                .then(function (res) {
                    resolve(res);
                })
                .catch(function (err) {
                    reject(err);
                })
        });
    },

    reqUrl: {
        login: '/system/login/signIn',
        register: 'register',
        userlist: '/user/list',

    },
};