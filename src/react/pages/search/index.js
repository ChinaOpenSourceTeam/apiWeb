import React from 'react';
import { Carousel, Row, Col ,Tabs,} from 'antd';

import {pubFunc} from '../../../utils/pubFnc'
import styles from './index.css';

import  BlogAssortContent from '../../components/blogAssort/blogAssortContent';
import  SiderContent from '../../components/blogAssort/siderContent';


// import { ArticleList } from '../../components/mainPage/articleList'
export default class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };

    }

    componentDidMount(){
        let param = pubFunc.GetQueryString('keyword');
        console.log(param);
    }

    render() {

        return (
            <div className={styles.row}>
                <Row className={styles.leftRowList} gutter={24}>
                <Col span={16}  style={{paddingRight:20}} className={styles.rowLeft}>
                        {/* <BlogAssortContent />                          */}
                        seacher data
                    </Col>
                    <Col span={8}  style={{paddingLeft:20}} className={styles.rowRight}>
                        {/* <SiderContent /> */}
                    </Col>
                </Row>
            </div>
        )
    }
}