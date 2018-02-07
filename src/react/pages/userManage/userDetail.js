import React from 'react';


export default class UserDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }

    render() {
        return (
            <div className="userDetail">
                详细信息
            </div>
        )
    }
}