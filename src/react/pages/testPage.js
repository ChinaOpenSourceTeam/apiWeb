/* 
 * @Title: $undefined 
 * @Description: Todo 
 * @Author: weijq (韦继强) 
 * @Date: 2017-11-06 18:56:42 
 * @Last Modified time: 2017-11-06 18:56:42 
 * @Version:V1.0 
 * Copyright: Copyright (c) 2017' 
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as act from '../../redux/actions/msgTip'
import { Button} from 'antd';
class TestPage extends Component {
    constructor(props) {
        super(props);
        this.sf=this.sf.bind(this);
        this.ff=this.ff.bind(this);
    }
    componentDidMount(){

    }
    render() {
        return (
            <div style={{height:'100%'}}>
                <Button type="danger"   onClick={this.sf}>
                    操作成功112
                </Button>
                <Button type="danger"   onClick={this.ff}>
                    操作失败
                </Button>
            </div>
        )
    }

    sf(){
        this.props.sClick('我成功了');
    }
    ff(){
        this.props.fClick('我失败了');
    }
};

function mapStateToProps(state) {
    return {
        loginRet: state.Login.loginRet,
        userInfo: state.Login.userInfo,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        sClick: (param) => {
            dispatch(act.optSuccess(param))
        },
        fClick: (param) => {
            dispatch(act.optFail(param))
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TestPage);