import React from 'react';
import { Carousel, Row, Col } from 'antd';

import styles from './userSetting.css';

import  UserInfo from '../../components/userManage/userSetting/userInfo';
import  UserMenu from '../../components/userManage/userSetting/usermenu';


// import { ArticleList } from '../../components/mainPage/articleList'

export default class UserSetting extends React.Component {

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
                    <Col span={16} style={{paddingRight:20}} className={styles.rowLeft}>
                        <UserInfo />
                    </Col>
                    <Col span={8} style={{paddingLeft:20}} className={styles.rowRight}>
                        <UserMenu />                         
                    </Col>
                </Row>
            </div>
        )
    }
}