import React from 'react';
import { Carousel, Row, Col, Menu, Icon, Avatar, message } from 'antd';
import axios from "axios";
import { config } from "../../../utils/config";

import moment from 'moment';
import styles from './index.css';


export default class Comment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            initStatus: false,
        };
    }

    componentDidMount() {
        let _self = this;
        // let articleId = pubFunc.GetQueryString('articleId');
        // let url = `/blog/${articleId}?version=1`;
        // console.log(url);
        // axios.get(url, config)
        //     .then(function (res) {
        //         if (res.data.code == 0) {
        //             console.log(res.data.data);                    
        //             let content = _self.contentHtmlFormat(res.data.data.blog.content);
        //             _self.setState({ articleInfo: res.data.data, content:content,initStatus: true });
        //         } else {
        //             message.error('请求失败！');
        //         }
        //     })
        //     .catch(function (err) {
        //         message.error('请求失败！' + err);
        //     })

    }

    render() {
        let commentList = [{
            id: 1,
            createUserName: 'limengmeng',
            content: '文章很不错，在一个',
        }, {
            id: 2,
            createUserName: 'limengmeng',
            content: '文章很不错，在一个',
        }, {
            id: 3,
            createUserName: 'limengmeng',
            content: '文章很不错，在一个',
        }];
        return (
            <div className={styles.commentList}>
                <p style={{margin:'1.3rem 0',fontSize: '1.3rem',fontWeight: 500,textAlign: 'center',
                color: '#909090'}}>评  论</p>
                {commentList.length > 0 ?
                    commentList.map((item, index) => {
                        return (
                            <div className={styles.commentInfo}>
                                <Avatar size='size' style={{ position: 'absolute', color: '#f56a00', backgroundColor: '#fde3cf', fontSize: 12 }}>{(item.createUserName + '').substr(0, 1)}</Avatar>
                                <div className={styles.contnetMain}>
                                    <div className={styles.head}>
                                        <div className={styles.userName}>{item.createUserName}</div>
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