import React from 'react';
import { Form, Input, Tooltip, Icon, Carousel, Row, Col, Button, Select, message } from 'antd';
import axios from "axios";
// import { config } from "../../../utils/config";
import styles from './articleInfo.css';

const FormItem = Form.Item;
const Option = Select.Option;
class addTag extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        };
    }

    componentDidMount() {

    }

    articleSubmit = (type) => {
        let _self = this;
        console.log(this.props);
        this.props.form.validateFields((err, values) => {
            let contnet = _self.props.Editor.getContent() || '';
            let contentBase64 = Base64.encode(contnet);
            let tags = values.tags.join(',');
            // debugger;
            let userId = JSON.parse(localStorage.getItem('userInfo')).id;
            let articleInfo = {
                "createUser": userId,
                "title": values.title,
                "tags": "1,2",
                "content": contentBase64,
                "status": type
            }

            axios.post('/blog/saveBlog', articleInfo, config)
                .then(function (res) {
                    if (res.data.code == 0) {
                        message.success('操作成功！');
                    } else {
                        message.error('操作失败');
                    }
                })
                .catch(function (err) {
                    message.error('操作失败' + err);
                })
        });
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
        const { size } = this.state;

        return (
            <div >
                <Form onSubmit={this.handleSubmit}>

                    <FormItem
                        {...formItemLayout}
                        label="标签名称:"
                        >
                        {getFieldDecorator('pids', {
                            rules: [{
                                required: true, message: '',
                            }],
                        })(
                            <Input />
                            )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="所属类别:"
                        >
                        {getFieldDecorator('pids', {
                            rules: [{
                                required: true, message: '',
                            }],
                        })(
                            <Select
                                mode="multiple"
                                size={size}
                                maxTagCount={3}
                                placeholder="标签"
                                onChange={this.handleChange}
                                style={{ width: '100%' }}
                                /* onSearch={} */
                                tokenSeparators={[',']}
                                >
                                {this.props.tagList}
                            </Select>
                            )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="标签描述:"
                        >
                        {getFieldDecorator('description', {
                            rules: [{
                                required: true, message: '',
                            }],
                        })(
                             <Input type="textarea"/> 
                            )}
                    </FormItem>
                </Form>
            </div>
        )
    }
}

const AticleInfoForm = Form.create()(AticleInfo);
export default AticleInfoForm;