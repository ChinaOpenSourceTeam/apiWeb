import React from 'react';
import { Tabs, Icon } from 'antd';

import styles from './userMenu.css';
import UserInfo from './UserInfo';
import UserDetail from './userDetail';
import UserRelativeNum from './userRelativeNum';
import AwardSetting from './awardSetting';
const TabPane = Tabs.TabPane;

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
                <Tabs defaultActiveKey="1" tabPosition="left">
                    <TabPane tab={ <span><Icon type="apple"/>基础信息</span> } key="1">
                        <UserInfo/>
                    </TabPane>
                    <TabPane tab={ <span><Icon type="apple"/>详细信息</span> } key="2">
                        <UserDetail/>
                    </TabPane>
                    <TabPane tab={ <span><Icon type="apple"/>关联账号</span> } key="3">
                        <UserRelativeNum/>
                    </TabPane>
                    <TabPane tab={ <span><Icon type="apple"/>赞赏设置</span> } key="4">
                        <AwardSetting/>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
