import React from 'react';
import { Carousel, Row, Col } from 'antd';

import styles from './index.css';

import { CarouselShow } from '../../components/mainPage/carousel'
import { HotTop } from '../../components/mainPage/hotTop'
import { TagPlate } from '../../components/mainPage/tagPlate'
import { AuthorRe } from '../../components/mainPage/authorRe'
import { ArticleList } from '../../components/mainPage/articleList'

export default class MainPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }

    render() {

        return (
            <div className={styles.row}>
                <Row gutter={24}>
                    <Col span={16} style={{paddingRight:20}}>
                        <CarouselShow />
                        <TagPlate />                 
                        <ArticleList />
                    </Col>
                    <Col span={8} style={{paddingLeft:20}}>
                    <HotTop />
                    <AuthorRe />
                    </Col>
                </Row>
            </div>
        )
    }
}