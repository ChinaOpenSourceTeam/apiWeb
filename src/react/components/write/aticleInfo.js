import React from 'react';
import { Form, Input, Tooltip, Icon, Carousel, Row, Col, Button } from 'antd';

import styles from './articleInfo.css';

// import { ArticleList } from '../../components/mainPage/articleList'
const FormItem = Form.Item;
class AticleInfo extends React.Component {

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
                sm: { span: 2 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 },
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
                        label="文章标题:"
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
                        label="文章分类:"
                    >
                        {getFieldDecorator('type', {
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
                        label="文章标签:"
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

                    <div className={styles.publishPosition}>
                        <button className={styles.publish} htmlType="submit">发布</button>
                    </div>

                </Form>
            </div>
        )
    }
}

const AticleInfoForm = Form.create()(AticleInfo);
export default AticleInfoForm;