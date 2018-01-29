import React from 'react';
import { Carousel, Row, Col, Menu, Icon } from 'antd';

import styles from './siderContent.css';


// import { ArticleList } from '../../components/mainPage/articleList'

export default class SiderContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }

    render() {

        return (
            <div className={styles.userMenuList}>
                 siderContent
            </div>
        )
    }
}