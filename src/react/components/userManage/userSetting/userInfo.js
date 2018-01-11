import React from 'react';
import { Form, Input, Tooltip, Icon, Carousel, Row, Col, Button } from 'antd';

import styles from './userInfo.css';

import user from '../../../../public/images/vip.png';


// import { ArticleList } from '../../components/mainPage/articleList'
const FormItem = Form.Item;
class UserInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 4,
                },
            },
        };

        return (
            <div >
                <Form onSubmit={this.handleSubmit}>
                    <FormItem
                        {...formItemLayout}
                        label="头像：">
                        <img src={user} alt="" className={styles.userImg} />
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="昵称："
                        >
                        {getFieldDecorator('email', {
                            rules: [{
                                type: 'email', message: '',
                            }, {
                                required: true, message: '',
                            }],
                        })(
                            <Input />
                            )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="邮箱："
                        >
                        {getFieldDecorator('password', {
                            rules: [{
                                required: true, message: '',
                            }, {
                                validator: this.checkConfirm,
                            }],
                        })(
                            <Input type="password" />
                            )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="手机号："
                        >
                        {getFieldDecorator('confirm', {
                            rules: [{
                                required: true, message: '',
                            }, {
                                validator: this.checkPassword,
                            }],
                        })(
                            <Input type="password" onBlur={this.handleConfirmBlur} />
                            )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="住址："
                        >
                        {getFieldDecorator('addr', {
                            rules: [{
                                required: true, message: 'Please confirm your password!',
                            }, {
                                validator: this.checkPassword,
                            }],
                        })(
                            <Input type="password" onBlur={this.handleConfirmBlur} />
                            )}
                    </FormItem>


                    <FormItem {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">保存</Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}

const UserInfoForm = Form.create()(UserInfo);
export default UserInfoForm;