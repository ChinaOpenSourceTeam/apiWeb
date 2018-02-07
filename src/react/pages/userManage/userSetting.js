import React from 'react';
import {Row} from 'antd';

import styles from './userSetting.css';
import UserMenu from './usermenu';


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
                <Row className={styles.leftRowList} gutter={24}> <UserMenu/> </Row>
            </div>
        )
    }
}