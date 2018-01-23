import React from 'react';
import { Carousel, Row, Col, Menu, Icon, Avatar} from 'antd';

import styles from './article.css';


// import { ArticleList } from '../../components/mainPage/articleList'

export default class Artice extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }

    render() {


        return (
            <div className={styles.articleContent}>
                <div>
                    <h1 className={styles.title}>花开后花又落 轮回也没结果</h1>
                    
                    <a className={styles.userImg} id="userImg">
                        <Avatar size='size' style={{ color: '#f56a00', backgroundColor: '#fde3cf', fontSize: 12 }}>U</Avatar>
                        <span className={styles.name}>尤为</span>
                        <span className={styles.time}>2小时前</span>
                        <span>{new Date()}</span>
                    </a>
                </div>
                <article></article>
                <footer></footer>
            </div>
        )
    }
}