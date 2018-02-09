import React from 'react';
import { Carousel, Row, Col, Menu, Icon, Avatar, message, Input, Button } from 'antd';
import axios from "axios";
import { config } from "../../../utils/config";
import { pubFunc } from '../../../utils/pubFnc';

import moment from 'moment';
import styles from './writeComment.css';

const { TextArea } = Input;
export default class WriteComment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            initStatus: false,
            showBtn: {
                marginRight: 0,
                display: 'none',
                commentContent:''
            },
        };
    }

    componentDidMount() {
        
    }

    focusText = () => {
        this.setState({ showBtn: { marginRight: 0 } });
    }

    blurText = (e) => {
        let showBtnFlag = { marginRight: 0, display: 'none' };
        if(e.target.value){
            showBtnFlag = { marginRight: 0 };
        }
        this.setState({ 
            showBtn: showBtnFlag,
            commentContent:e.target.value || ''
     });
    }

    saveComment = () => {
        let _self = this;
        let articleId = pubFunc.GetQueryString('articleId');
        let commentObj = {
            "blogId": articleId,
            "content": this.state.commentContent,
            "createUser": JSON.parse(localStorage.getItem('userInfo')).id || '',
        }
        let url = `/comment/saveComment`;
        axios.post(url, commentObj,config)
            .then(function (res) {
                if (res.data.code == 0) {
                    message.success('评论成功！');
                    _self.props.getCommentList();
                } else {
                    message.error('评论失败！');
                }
            })
            .catch(function (err) {
                message.error('评论失败！' + err);
            })

    }

    render() {

        return (
            <div className={styles.contentArea}>
                <div className={styles.commentInfo}>
                    <Avatar size='large' style={{ position: 'absolute', color: '#f56a00', backgroundColor: '#fde3cf', fontSize: 12, marginTop: 4 }}>{'liqwei'.substr(0, 1)}</Avatar>
                    <div className={styles.contnetMain}>
                        <div className={styles.head}>
                            <TextArea placeholder="说你想说的" autosize={{ minRows: 2, maxRows: 6 }} onFocus={this.focusText} onBlur={(e) => this.blurText(e)} />
                            <div className={styles.commentBtn} style={this.state.showBtn}>
                                <Button type="">取消</Button>
                                <Button type="primary" style={{ marginLeft: 4 }} onClick={this.saveComment}>确定</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}