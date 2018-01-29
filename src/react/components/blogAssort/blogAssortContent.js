import React from 'react';
import { Form, Input, Tooltip, Icon, Carousel, Row, Col, Button,Avatar } from 'antd';
import moment from 'moment'; 

import styles from './blogAssortContent.css';


class BlogAssortContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }

    render() {
        

        return (
            <div className={styles.articleContent}>
                <div className={styles.authorContent}>
                            <ul>
                                <li>
                                    <a className={styles.userImg} id="blogAssort"><Avatar shape="square" size='large' style={{ color: '#f56a00', backgroundColor: '#fde3cf', fontSize: 16 }}>{this.state.initStatus ? this.state.articleInfo.user.loginName.substr(0, 1) : null}</Avatar></a>
                                    <a className={styles.follow}>
                                        <i className="fa fa-plus" aria-hidden="true"></i> 关注</a>
                                    <a className={styles.name}>{this.state.initStatus ? this.state.articleInfo.user.loginName : null}</a>
                                    <p>
                                        <span>{moment(this.state.initStatus ?this.state.articleInfo.blog.updateTime:'').format('YYYY.MM.DD HH:mm')}</span>
                                        <span>字数 2000</span>
                                        <span> 阅读 1000</span>
                                        <span>喜欢 210</span>
                                    </p>
                                </li>
                            </ul>
                        </div>
            </div>
        )
    }
}

 
export default BlogAssortContent;