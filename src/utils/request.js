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

export const dataService = {
    postRequest: (params) => {
        return new Promise(function (resolve, reject) {
            axios.post(params.reqUrl, params.reqParam, config)
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
            axios.get(params.reqUrl, config)
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