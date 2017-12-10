/**
 * 公用数据
*/

import { createAction } from 'redux-actions';

//字典
export const QUERY_SYSDIC = 'QUERY_SYSDIC';
export const querySysdic= createAction(QUERY_SYSDIC);

//字典成功
export const QUERY_SYSDIC_SUCCESS = 'QUERY_SYSDIC_SUCCESS';
export const querySysdicSuccess= createAction(QUERY_SYSDIC_SUCCESS);

//字典失败
export const QUERY_SYSDIC_FAIL = 'QUERY_SYSDIC_FAIL';
export const querySysdicFail= createAction(QUERY_SYSDIC_FAIL); 


//行政区划
export const QUERY_AREA = 'QUERY_AREA';
export const queryArea= createAction(QUERY_AREA);

//行政区划
export const QUERY_AREA_SUCCESS = 'QUERY_AREA_SUCCESS';
export const queryAreaSuccess= createAction(QUERY_AREA_SUCCESS);

//行政区划
export const QUERY_AREA_FAIL = 'QUERY_AREA_FAIL';
export const queryAreaFail= createAction(QUERY_AREA_FAIL); 

//监测因子
export const QUERY_FACTOR = 'QUERY_FACTOR';
export const queryFactor= createAction(QUERY_FACTOR);

//监测因子
export const QUERY_FACTOR_SUCCESS = 'QUERY_FACTOR_SUCCESS';
export const queryFactorSuccess= createAction(QUERY_FACTOR_SUCCESS);

//监测因子
export const QUERY_FACTOR_FAIL = 'QUERY_FACTOR_FAIL';
export const queryFactorFail= createAction(QUERY_FACTOR_FAIL);

//监测站点
export const QUERY_SYS_SITE = 'QUERY_SYS_SITE';
export const querySysSite= createAction(QUERY_SYS_SITE);

//监测站点
export const QUERY_SYS_SITE_SUCCESS = 'QUERY_SYS_SITE_SUCCESS';
export const querySysSiteSuccess= createAction(QUERY_SYS_SITE_SUCCESS);

//监测站点
export const QUERY_SYS_SITE_FAIL = 'QUERY_SYS_SITE_FAIL';
export const querySysSiteFail= createAction(QUERY_SYS_SITE_FAIL);

//token过期登出
export const LOGIN_OUT = 'LOGIN_OUT';
export const loginOut= createAction(LOGIN_OUT);

//监测站点分组
export const G_QUERY_SYS_SITE = 'G_QUERY_SYS_SITE';
export const querySiteGroup= createAction(G_QUERY_SYS_SITE);

//监测站点分组
export const G_QUERY_SYS_SITE_SUCCESS = 'G_QUERY_SYS_SITE_SUCCESS';
export const querySiteGroupSuccess= createAction(G_QUERY_SYS_SITE_SUCCESS);

//监测站点分组
export const G_QUERY_SYS_SITE_FAIL = 'G_QUERY_SYS_SITE_FAIL';
export const querySiteGroupFail= createAction(G_QUERY_SYS_SITE_FAIL);
