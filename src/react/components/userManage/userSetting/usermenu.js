import React from 'react';
import { Carousel, Row, Col, Menu, Icon } from 'antd';

import styles from './userMenu.css';


// import { ArticleList } from '../../components/mainPage/articleList'

export default class UserMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }

    render() {

        return (
            <div className={styles.userMenuList}>
                <Menu
                    onClick={this.handleClick}
                    style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    >
                        <Menu.Item key="1">基础信息</Menu.Item>
                        <Menu.Item key="10">详细信息</Menu.Item>
                        <Menu.Item key="11">关联账号</Menu.Item>
                        <Menu.Item key="12">赞赏设置</Menu.Item>
                     
                </Menu>
            </div>
        )
    }
}