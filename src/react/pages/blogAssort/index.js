import React from 'react';
import { Carousel, Row, Col } from 'antd';

import styles from './index.css';

import  BlogAssortContent from '../../components/blogAssort/blogAssortContent';
import  SiderContent from '../../components/blogAssort/siderContent';


// import { ArticleList } from '../../components/mainPage/articleList'

export default class BlogAssort extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }

    render() {

        return (
            <div className={styles.row}>
                <Row className={styles.leftRowList} gutter={24}>
                <Col span={16}  style={{paddingRight:20}} className={styles.rowRight}>
                        <BlogAssortContent />                         
                    </Col>
                    <Col span={8}  style={{paddingLeft:20}} className={styles.rowLeft}>
                        <SiderContent />
                    </Col>
                </Row>
            </div>
        )
    }
}