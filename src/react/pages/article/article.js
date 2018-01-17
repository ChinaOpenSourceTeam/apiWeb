import React from 'react';
import { Carousel, Row, Col } from 'antd';

import styles from './article.css';

import  ArticleContent from '../../components/article/article';

export default class Aticle extends React.Component {

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
                    <Col span={24} className={styles.rowLeft}>
                        <ArticleContent />
                    </Col>
                    {/* <Col span={8} style={{paddingLeft:20}} className={styles.rowRight}>
                        {<UserMenu />                         }
                    </Col> */}
                </Row>
            </div>
        )
    }
}