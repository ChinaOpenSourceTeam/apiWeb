/**
 * Created by zll on 2017/10/11.
 */
import { createAction } from 'redux-actions';

//登录
export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';
export const loginSubmit= createAction(LOGIN_SUBMIT);

//登录成功
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const loginSuccess= createAction(LOGIN_SUCCESS);

//登录失败
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const loginFail= createAction(LOGIN_FAIL);