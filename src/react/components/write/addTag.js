import React from 'react';
import { Form, Input, Tooltip, Icon, Carousel, Row, Col, Button, Select, message, Modal } from 'antd';
import axios from "axios";
import { config } from "../../../utils/config";
import styles from './articleInfo.css';

const FormItem = Form.Item;
const Option = Select.Option;
class AddTag extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            formDataObj: {}
        };
    }

    componentDidMount() {

    }

    //form 表单嵌套处理比较麻烦
    getName = (e) => {
        if (e.target.value) {
            this.state.formDataObj.name = e.target.value;
        }
    }

    getPids = (value) => {
        if (value) {
            this.state.formDataObj.pids ? this.state.formDataObj.pids.length == 0 : null;
            this.state.formDataObj.pids = value;

        }
    }

    getDescription = (e) => {
        if (e.target.value) {
            this.state.formDataObj.description = e.target.value;
        }
    }

    getFormContent = () => {
        return this.state.formDataObj;
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
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
                <Form >
                    <FormItem
                        {...formItemLayout}
                        label="标签名称:"
                        >
                        {getFieldDecorator('name', {
                            rules: [{
                                required: true, message: '',
                            }],
                        })(
                            <Input onChange={this.getName.bind(this)} />
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
                                onChange={this.getPids}
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
                            <Input type="textarea" onChange={this.getDescription.bind(this)} />
                            )}
                    </FormItem>
                </Form>
            </div>
        )
    }
}

const AddTagForm = Form.create({ withRef: true })(AddTag);

class AddDataFormM extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }

    componentWillMount() {
        if (this.props.addModalVisible) {
            this.setState({
                visible: this.props.addModalVisible
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.addModalVisible !== this.state.visiblle) {
            this.setState({
                visible: nextProps.addModalVisible
            });
        }
    }

    handleAddTags = (e) => {
        let _self = this;
        //获取被antd form 包装的表单
        let values = _self.refs.AddTag.refs.wrappedComponent.getFormContent();
        if (values.name && values.pids) {
            let userId = JSON.parse(localStorage.getItem('userInfo')).id;
            let pids = values.pids.join(',');
            let tagInfo = {
                createUser: userId,
                name: values.name,
                pids: pids,
                description: values.description || ""
            }
            axios.post('/node/saveNode', tagInfo, config)
                .then(function (res) {
                    if (res.data.code == 0) {
                        message.success('添加成功！');
                        _self.props.changeModalState();
                        _self.props.getAllTags();
                    } else {
                        message.error('添加失败');
                    }
                })
                .catch(function (err) {
                    message.error('添加失败' + err);
                })
        } else {
            message.warning('格式不正确');
        }
        // _self.refs.AddTagFormInfo.validateFields((err, values) => {

        // });
    }

    handleCancel = () => {
        this.setState({
            visible: false
        });
        this.props.changeModalState();
    }

    render() {
        return (
            <div>
                <Modal
                    title='新建标签'
                    visible={this.state.visible}
                    onOk={this.handleAddTags}
                    onCancel={this.handleCancel}
                    maskClosable={false}
                    width={660}
                    >
                    <AddTagForm {...this.props} ref="AddTag" />
                </Modal>
            </div>
        )
    }
}

// AddDataFormM.propTypes = {
//     handleOk: React.PropTypes.func.isRequired,
//     handleCancel: React.PropTypes.func.isRequired
// }

export default AddDataFormM;
