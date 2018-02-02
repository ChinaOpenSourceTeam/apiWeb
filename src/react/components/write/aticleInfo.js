import React from 'react';
import { Form, Input, Tooltip, Icon, Carousel, Row, Col, Button, Select, message, Modal } from 'antd';
import axios from "axios";
import _ from 'lodash';
import { Base64 } from 'js-base64';
import { config } from "../../../utils/config";
import styles from './articleInfo.css';
import AddDataFormM from './addTag';

// import { ArticleList } from '../../components/mainPage/articleList'
const FormItem = Form.Item;
const Option = Select.Option;
class AticleInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            size: 'large',
            tags: '',
            tagList: [],
            addModalVisible: false,//添加模态框状态
        };
    }

    componentDidMount() {
        //请求tag list
        this.getAllTags();
    }

    getAllTags = () => {
        let _self = this;
        axios.get('/node/findAllNodes', config)
            .then(function (res) {
                // console.log(res);
                if (res.data.code == 0) {
                    let tagArr = _.cloneDeep(res.data.data);
                    let tagList = new Array();
                    tagArr.map(function (item) {
                        tagList.push(<Option key={item.id}>{item.name}</Option>);
                    });
                    _self.setState({ tagList: tagList });
                } else {
                    message.error('操作失败');
                }
            })
            .catch(function (err) {
                message.error('操作失败' + err);
            })
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
            let contentBase64 = Base64.encode(contnet);
            let tags = values.tags.join(',');
            // debugger;
            let userId = JSON.parse(localStorage.getItem('userInfo')).id;
            let articleInfo = {
                "createUser": userId,
                "title": values.title,
                "tags": tags,
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

    changeModalState = () => {
        this.setState({
            addModalVisible: false,
        });
    }

    addTags = () => {
        this.setState({
            addModalVisible: true,
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
                        <div className={styles.tagsBox}>
                            {getFieldDecorator('tags', {
                                rules: [{
                                    required: true, message: '',
                                }],
                            })(
                                <Select
                                    mode="multiple"
                                    
                                    maxTagCount={3}
                                    placeholder="标签"
                                    onChange={this.handleChange}
                                    style={{ width: '100%' }}
                                    /* onSearch={} */
                                    tokenSeparators={[',']}
                                    >
                                    {this.state.tagList}
                                </Select>
                                )}
                            <Button type="primary" ghost title="新建标签" onClick={this.addTags}><Icon type="plus" /></Button>
                        </div>
                    </FormItem>
                    <div className={styles.publishPosition}>
                        <button className={styles.save} htmlType="submit" onClick={this.articleSubmit.bind(this, 0)}>保存</button>
                        <button className={styles.publish} htmlType="submit" onClick={this.articleSubmit.bind(this, 1)}>发布</button>
                    </div>

                </Form>
                {this.state.addModalVisible ?
                    <AddDataFormM
                        {...this.props}
                        ref="addDataFormM"
                        tagList={this.state.tagList}
                        getAllTags={this.getAllTags}
                        addModalVisible={this.state.addModalVisible}
                        changeModalState={this.changeModalState.bind(this)}
                        /> : null}
            </div>
        )
    }
}

const AticleInfoForm = Form.create()(AticleInfo);
export default AticleInfoForm;