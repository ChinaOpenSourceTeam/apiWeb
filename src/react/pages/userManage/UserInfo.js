import React from 'react';
import {Form, Input, Button} from 'antd';
import axios from 'axios';

import styles from './userInfo.css';
import {config} from "../../../utils/config";

const FormItem = Form.Item;

class UserInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            disabled: true,
            token: localStorage.getItem('access_token'),
            data: {
                "address": "来自世界那一头",
                "age": 0,
                "createTime": 1517498148000,
                "deleteFlag": 0,
                "email": "2452403243123@qq.com",
                "id": 12,
                "loginName": "liqiwei123",
                "nickName": "李其伟",
                "password": "BB9C8F908B5A07CC623ECE29FE6B339B",
                "phone": "13721525656",
                "photo": "",
                "status": 1,
                "verificationCode": "0463BB290075F4676BC3E794554215E1"
            }
        }
    }

    fetchData = (e) => {
        e.preventDefault();
        let url = `/system/user/findUserById/`;
        axios.get(url, config).then(response => {
            this.setState({data: response.data.data})
        }).catch(err => {
            console.log(err);
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log(values);
                let leftObj = {};
                values.id = this.state.data.id;
                axios.post('/system/user/updateUser', values).then(function (response) {
                    console.log(response);
                }).catch(err => console.log(err));
            }
        });
    };

    render() {
        const {data} = this.state;
        const {getFieldDecorator} = this.props.form;

        const formItemLayout = {
            labelCol: {span: 2},
            wrapperCol: {span: 10},
        };
        return (
            <div>
                {this.fetchData} <Button onClick={this.fetchData}>点击</Button> <Form onSubmit={this.handleSubmit}>
                <FormItem {...formItemLayout} label="头像"> <span
                    className={styles.wordName}>{data.nickName.substr(0, 1)}</span> </FormItem>
                <FormItem {...formItemLayout} label="昵称">
                    {getFieldDecorator('nickName', {
                        initialValue: data.nickName,
                        rules: [{required: true, message: 'Please input your username!'}],
                    })(
                        <Input className="nickName"/>
                    )}

                </FormItem> <FormItem {...formItemLayout} label="电话">
                {getFieldDecorator('phone', {
                    initialValue: data.phone,
                    rules: [{required: true, message: 'Please input your phone!'}],
                })(
                    <Input className="phone"/>
                )}
            </FormItem> <FormItem {...formItemLayout} label="邮箱">
                {
                    getFieldDecorator('email', {
                        initialValue: data.email,
                        rules: [
                            {
                                type: 'email',
                                required: true,
                                message: '邮箱'
                            }
                        ]
                    })(
                        <Input className="email"/>
                    )
                }
            </FormItem> <FormItem {...formItemLayout} label="地址">
                {
                    getFieldDecorator('address', {
                        initialValue: data.address,
                        rules: [
                            {
                                required: true,
                                message: '地址'
                            }
                        ]
                    })(
                        <Input className="address"/>
                    )
                }
            </FormItem> <FormItem {...formItemLayout} label="年龄">
                {
                    getFieldDecorator('age', {
                        initialValue: data.age,
                        rules: [
                            {
                                required: false,
                                message: '年龄'
                            }
                        ]
                    })(
                        <Input className="age"/>
                    )
                }
            </FormItem> <FormItem {...formItemLayout} label=" "> <Button type="primary" htmlType="submit">保存</Button>
            </FormItem> </Form>

            </div>
        )
    }
}

const UserInfos = Form.create()(UserInfo);

export default UserInfos;
