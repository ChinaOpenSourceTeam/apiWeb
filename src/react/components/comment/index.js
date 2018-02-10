import React from 'react';
import { Carousel, Row, Col, Menu, Icon, Avatar, message } from 'antd';
import axios from "axios";
import { config } from "../../../utils/config";
import { pubFunc } from '../../../utils/pubFnc';

import moment from 'moment';
import styles from './index.css';

import WriteComment from './writeComment';


export default class Comment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            initStatus: false,
            commentList: []
        };
    }

    componentDidMount() {
        this.getCommentList();
    }

    getCommentList = () => {
        let _self = this;
        let articleId = pubFunc.GetQueryString('articleId');
        let url = `/comment/findCommentByBlogId?blogId=` + articleId;
        axios.get(url, config)
            .then(function (res) {
                console.log(res);
                if (res.data.code == 0) {
                    _self.setState({ commentList: res.data.data.list });
                } else {
                    message.error('请求失败！');
                }
            })
            .catch(function (err) {
                message.error('请求失败！' + err);
            })
    }

    render() {

        return (
            <div className={styles.commentList}>
                <p style={{
                    margin: '1.3rem 0', fontSize: '1.3rem', fontWeight: 500, textAlign: 'center',
                    color: '#909090'
                }}>评  论</p>
                <WriteComment getCommentList={this.getCommentList}/>
                {this.state.commentList.length > 0 ?
                    this.state.commentList.map((item, index) => {
                        return (
                            <div className={styles.commentInfo} key={index}>
                                <Avatar size='size' style={{ position: 'absolute', color: '#f56a00', backgroundColor: '#fde3cf', fontSize: 12 }}>{(item.createUserName + '').substr(0, 1)}</Avatar>
                                <div className={styles.contnetMain}>
                                    <div className={styles.head}>
                                        <span className={styles.userName}>{item.createUserName}</span>
                                        <span className={styles.createTime}>{item.createTime?moment(item.createTime).format('YYYY.MM.DD HH:mm'):''}</span>
                                    </div>
                                    <div className={styles.content}>{item.content}</div>
                                    <div className={styles.footer}>
                                        <a href=""><i className="fa fa-thumbs-o-up" aria-hidden="true"></i>2000</a>
                                        <a href=""><i className="fa fa-heart" aria-hidden="true"> 200</i></a>
                                        <a href=""><i className="fa fa-commenting-o" aria-hidden="true"></i>15</a>
                                    </div>
                                </div>
                            </div>
                        )
                    }) : null}
            </div>

        )
    }
}