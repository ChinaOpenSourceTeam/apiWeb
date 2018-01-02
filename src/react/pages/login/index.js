
import React from 'react';
import { connect } from 'react-redux';
import { message } from 'antd';
import * as act from '../../../redux/actions/login'
import * as shareAct from '../../../redux/actions/share'
import styles from './login.css';
import LoginForm from '../../components/loginForm/loginForm';

class Login extends React.Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.msgTip !== this.props.msgTip) {
            message.error(nextProps.msgTip);
        }
    }
    render() {
        return (
            <div style={{
                display: 'flex',
                height:'100%',
                minHeight: '150hv',
                flexDirection: 'column',
                backgroundColor: 'rgb(241, 241, 241)',
                // overflow: 'auto'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '56px',
                    marginLeft: '50px', fontFamily: 'monospace', fontSize: 50, fontWeight: 'bold',
                    letterSpacing: -16, color: '#ea6f5a'
                }}>
                    <span>雕·虫</span>
                </div>
                <div style={{
                    position: 'absolute',
                    top: '114px',
                    marginLeft: '33px', fontFamily: 'monospace', fontSize: 25, fontWeight: 'bold',
                    letterSpacing:4, color: '#FFF'
                }}>
                    <span>DIAOCHONG</span></div>
                <LoginForm {...this.props} />

                <footer style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', flex: 1 }}>
                    <div style={{ color: '#49a9ee' }}>
                        支持谷歌浏览器 版权所有 @2B青年团队
                    </div>
                </footer>


            </div>
        )
    }
}

// Login.propTypes = {
//     submitClick: React.PropTypes.func.isRequired
// };


function mapStateToProps(state) {
    return {
        loginRet: state.Login.loginRet,
        userInfo: state.Login.userInfo,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        submitClick: (param) => {
            dispatch(act.loginSubmit(param))
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);