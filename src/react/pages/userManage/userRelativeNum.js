import React from 'react';


export default class UserRelativeNum extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }

    render() {
        return (
            <div className="userRelativeNum">
                关联账号
            </div>
        )
    }
}