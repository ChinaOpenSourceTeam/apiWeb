import React from 'react';
import { Carousel, Row, Col, Menu, Icon } from 'antd';

import styles from './articleEditor.css';


// import { ArticleList } from '../../components/mainPage/articleList'

export default class ArticeEditor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }

    render() {

        return (
            <div className={styles.userMenuList}>
                aticle editor
            </div>
        )
    }
}