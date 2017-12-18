/* 
 * @Title: $undefined 
 * @Description: Todo 
 * @Author: weijq (韦继强) 
 * @Date: 2017-12-06 18:56:03 
 * @Last Modified time: 2017-12-06 18:56:03 
 * @Version:V1.0 
 * Copyright: Copyright (c) 2017' 
 */

import React from 'react';
import styles from './loginForm.css';
// import logImg from "../../../public/images/landun_logo.png";
import logImg from "../../../idea_large.svg";
import { Form, Icon, Input, Button, Checkbox, Tooltip, message } from 'antd';
import { config } from '../../../utils/config'
import axios from 'axios';
const FormItem = Form.Item;

axios.defaults.headers.common['Authorization'] = localStorage.getItem('access_token');

class LoginF extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            loginFlag: 0,
            reg_loading: 0,
            loginTable: true
        };
        //this.handleSubmit=this.handleSubmit.bind(this);
    }
    componentDidMount() {
        if (this.props.location.state && this.props.location.state.opt) {
            let opt = true;
            this.props.location.state.opt == 'login' ? opt = true : opt = false;
            this.setState({ loginTable: opt });
        }

    }

    componentWillReceiveProps(nextProps) {
        if (this.state.loading) {
            ///登录成功
            debugger;
            if (nextProps.loginRet === 0) {
                nextProps.location.pathname = '/main';
                nextProps.history.push(nextProps.location);

                // //请求数据字典
                // this.props.querySysdic();
                console.log(localStorage.getItem('access_token'));
                // axios.get('/system/user/findUserByLoginName?loginName=' + 'liqiwei', config)
                //     .then(function (res) {
                //         debugger;
                //         if (res.data.code == 0) {
                //             message.success('请求成功！')
                //         } else {
                //             message.error('请求失败！')
                //         }
                //     })
                //     .catch(function (err) {
                //         message.success('请求失败！')
                //     })

            } else {
                this.setState({ loading: false, loginFlag: nextProps.loginRet });
            }
        }

    }

    handleLoginSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let param = {
                    loginName: values.loginName,
                    password: values.password
                };
                this.setState({ loading: true, loginFlag: 0 });
                this.props.submitClick(param);
            }
        });
    };

    handleRegSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let param = {
                    loginName: values.loginName,
                    password: values.password
                };
                this.setState({ loading: true, loginFlag: 0 });
                this.props.submitClick(param);
            }
        });
    };

    lor = (e) => {
        this.setState({
            loginTable: (e.target.id == 'login' ? true : false)
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        let activeStyle = {
            padding: '10px',
            fontWeight: 700,
            color: '#ea6f5a',
            borderBottom: '2px solid #ea6f5a'
        }

        let unActiveStyle = {
            padding: '10px',
            color: '#969696'
        }

        return (

            <div className={styles.formLogin}>
                <h4 className={styles.title}>
                    <div className={styles.header}>
                        <a id='login' style={this.state.loginTable ? activeStyle : unActiveStyle}
                            onClick={this.lor}>
                            登录
                        </a>
                        <b>·</b>
                        <a id='reg' style={!this.state.loginTable ? activeStyle : unActiveStyle} onClick={this.lor}>
                            注册
                        </a>
                    </div >
                </h4>
                {this.state.loginTable
                    ? <Form onSubmit={this.handleLoginSubmit} className={styles.loginForm}>
                        <FormItem >
                            {getFieldDecorator('loginName', {
                                rules: [{
                                    required: true,
                                    message: '请输入用户名!'
                                }]
                            })(
                                <Input prefix={< Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
                                )}
                        </FormItem>
                        <FormItem >
                            {getFieldDecorator('password', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入密码!'
                                    }
                                ]
                            })(
                                <Input prefix={< Icon type="lock" style={{ fontSize: 13 }} />}
                                    type="password"
                                    placeholder="密码" />
                                )}
                        </FormItem>

                        <FormItem >
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true
                                })(
                                    <Checkbox >
                                        记住密码
                                        </Checkbox>
                                    )}
                                <a style={{ color: 'gray' }}>
                                    登录遇到问题？
                                    </a>
                            </div>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className={styles.loginFormButton}
                                loading={this.state.loading}>
                                登陆
                                </Button>

                            <div style={{
                                display: this.state.loginFlag > 0 ? 'block' : 'none'
                            }}>
                                <Tooltip title="登录失败">
                                    <span
                                        style={{
                                            color: "red"
                                        }}>用户名密码不匹配.
                                        </span>
                                </Tooltip >
                            </div>
                        </FormItem >
                        <div title="社交账号登录" className={styles.box}>
                            <div className={styles.iconLogo}>
                                <div className={styles.ball1}><i className="fa fa-weibo"></i></div>
                                <div className={styles.ball2}><i className="fa fa-weixin"></i></div>
                                <div className={styles.ball3}><i className="fa fa fa-qq"></i></div>
                                <div className={styles.ball4}><span>其他</span></div>
                            </div>
                        </div>

                    </Form>
                    : <Form onSubmit={this.handleRegSubmit} className={styles.loginForm}>
                        <FormItem >
                            {getFieldDecorator('reg_name', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入用户名!'
                                    }
                                ]
                            })(
                                <Input
                                    prefix={< Icon type="user" style={{ fontSize: 13 }} />}
                                    placeholder="用户名" />
                                )}
                        </FormItem>
                        <FormItem >
                            {getFieldDecorator('tel', {
                                rules: [
                                    {
                                        required: true,
                                        message: '手机号!'
                                    }
                                ]
                            })(
                                <Input
                                    prefix={< Icon type="tablet" style={{ fontSize: 13 }} />}
                                    placeholder="手机号" />
                                )}
                        </FormItem>
                        <FormItem >
                            {getFieldDecorator('reg_password', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入密码!'
                                    }
                                ]
                            })(
                                <Input
                                    prefix={< Icon type="lock" style={{ fontSize: 13 }} />}
                                    type="password"
                                    placeholder="密码" />
                                )}
                        </FormItem>
                        <FormItem >
                            <div className="reg_btn">
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className={styles.loginFormButton}
                                    loading={this.state.reg_loading}>
                                    注册
                            </Button>
                            </div>
                            <div
                                style={{
                                    display: this.state.loginFlag > 0
                                        ? 'block'
                                        : 'none'
                                }}>
                                <Tooltip title="注册失败">
                                    <span
                                        style={{
                                            color: "red"
                                        }}>用户名密码不匹配.
                                    </span>
                                </Tooltip >
                            </div>
                        </FormItem >
                        <FormItem >
                            <p style={{
                                padding: 0,
                                textAlign: 'center',
                                fontSize: '12px',
                                lineHeight: '20px',
                                color: '#969696'
                            }}>
                                点击 “注册” 即表示您同意并愿意遵守雕虫
                                <br />
                                <a href="">用户协议 </a>和 <a href="">隐私政策</a> 。
                            </p>
                        </FormItem >
                        <div title="社交账号注册" className={styles.box}>
                            <div className={styles.iconLogo}>
                                <div className={styles.ball1}><i className="fa fa-weibo"></i></div>
                                <div className={styles.ball2}><i className="fa fa-weixin"></i></div>
                                <div className={styles.ball3}><i className="fa fa fa-qq"></i></div>
                            </div>
                        </div>
                    </Form>
                }

            </div >

        );
    }
}
LoginF.propTypes = {
    submitClick: React.PropTypes.func.isRequired
};

const LoginForm = Form.create()(LoginF);
export default LoginForm;