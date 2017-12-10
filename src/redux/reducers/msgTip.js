/**
 * Created by weijq on 2017/10/11.
 */
import * as act from '../actions/msgTip';

const initState = {
    msg:'',
    type:-1,
    opt:''
};

export default function MsgTip(state = initState, action) {
    switch (action.type) {
        case act.OPT_SUCCESS:
            return  {
                ...state,
                type: 0,
                msg:action.payload
            };
        case act.OPT_FAIL:
            return  {
                ...state,
                type: 1,
                msg:action.payload
            };
        default:
            return state;
    }
}