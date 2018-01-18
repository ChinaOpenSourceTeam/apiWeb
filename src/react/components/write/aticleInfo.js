import React from 'react';
import { Form, Input, Tooltip, Icon, Carousel, Row, Col, Button, Select ,message} from 'antd';
import axios from "axios";
import { config } from "../../../utils/config";
import styles from './articleInfo.css';

// import { ArticleList } from '../../components/mainPage/articleList'
const FormItem = Form.Item;
const Option = Select.Option;
class AticleInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            size: 'large',
            tags: ''
        };
    }

    handleChange = (value) => {
        console.log(`Selected: ${value}`);
        if (value.length > 2) {
            // this.props.form.setFieldsValue({ tags: value.slice(0, 3) });
            // this.setState({ tags: value.slice(0, 3) });
        } else {
            // this.props.form.setFieldsValue({ tags: value });
        }
    }

    articleSubmit = (type) => {
        let _self = this;
        console.log(this.props);
        this.props.form.validateFields((err, values) => {
            let contnet = _self.props.Editor.getContent() || '';
            let tags = values.tags.join(',');
            // debugger;
            let userId = JSON.parse(localStorage.getItem('userInfo')).id;
            let articleInfo = {
                "createUser":userId,
                "title": values.title,
                "tags": tags,
                "content": contnet,
                "status": type
            }
            
            axios.post('/blog/saveBlog',articleInfo,config)
            .then(function(res){
                if (res.data.code == 0) {
                    message.success('操作成功！');
                } else {
                    message.error('操作失败');
                }
            })
            .catch(function(err){
                message.error('操作失败'+err);
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

        const children = [];
        for (let i = 10; i < 36; i++) {
            children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
        }

        return (
            <div >
                <Form onSubmit={this.handleSubmit}>

                    <FormItem
                        {...formItemLayout}
                        label="文章标题:"
                    >
                        {getFieldDecorator('title', {
                            rules: [{
                                required: true, message: '',
                            }],
                        })(
                            <Input />
                            )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="文章标签:"
                    >
                        {getFieldDecorator('tags', {
                            rules: [{
                                required: true, message: '',
                            }],
                        })(
                            <Select
                                mode="multiple"
                                size={size}
                                maxTagCount={3}
                                placeholder="Please select"
                                onChange={this.handleChange}
                                style={{ width: '100%' }}
                            >
                                {children}
                            </Select>
                            )}
                    </FormItem>

                    <div className={styles.publishPosition}>
                        <button className={styles.save} htmlType="submit" onClick={this.articleSubmit.bind(this,0)}>保存</button>
                        <button className={styles.publish} htmlType="submit" onClick={this.articleSubmit.bind(this,1)}>发布</button>
                    </div>

                </Form>
            </div>
        )
    }
}

const AticleInfoForm = Form.create()(AticleInfo);
export default AticleInfoForm;