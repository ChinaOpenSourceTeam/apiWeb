import React from 'react';
import { Carousel, Row, Col } from 'antd';

import styles from './writeAticle.css';

import  ArticleEditor from '../../components/write/articleEditor';
// import  UserMenu from '../../components/userManage/userSetting/usermenu';


// import { ArticleList } from '../../components/mainPage/articleList'

export default class WriteAticle extends React.Component {

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
                        <ArticleEditor />
                    </Col>
                    {/* <Col span={8} style={{paddingLeft:20}} className={styles.rowRight}>
                        {<UserMenu />                         }
                    </Col> */}
                </Row>
            </div>
        )
    }
}