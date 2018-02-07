import React from 'react';


export default class AwardSetting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }

    render() {
        return (
            <div className="awardSetting">
                奖励设置
            </div>
        )
    }
}