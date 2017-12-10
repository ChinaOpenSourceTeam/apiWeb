/**
 * Created by zll on 2017/10/11.
 */
import { createAction } from 'redux-actions';

//操作成功
export const OPT_SUCCESS = 'OPT_SUCCESS';
export const optSuccess= createAction(OPT_SUCCESS);

//操作失败
export const OPT_FAIL = 'OPT_FAIL';
export const optFail= createAction(OPT_FAIL);

