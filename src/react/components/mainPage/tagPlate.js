import React from 'react';
import { Carousel, Row, message } from 'antd';
import styles from './tagPlate.css';
import axios from "axios";
import { config } from "../../../utils/config";

export class TagPlate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            tagList: []
        };
    }

    componentDidMount() {
        this.getAllTags();
    }

    getAllTags = () => {
        let _self = this;
        axios.get('/node/findAllNodes', config)
            .then(function (res) {
                if (res.data.code == 0) {
                    let tagList = res.data.data;
                    console.log(res.data.data, 777777);

                    _self.setState({ tagList: tagList });
                } else {
                    message.error('操作失败');
                }
            })
            .catch(function (err) {
                message.error('操作失败' + err);
            })
    }

    tagSelect = (tagId) => {
        let url;
        if (process.env.NODE_ENV === 'development') {
            url = 'http://localhost:8081/blogAssort?node_id=' + tagId;
        } else {
            url = 'http://www.chinaopensource.top:8081/blogAssort?node_id=' + tagId;
        }
        const w = window.open(url);
    }

    tagMore = () => {

    }

    render() {

        return (
            <div className={styles.tagContent}>
                <div>
                    {this.state.tagList.length > 0 ? this.state.tagList.map((item, index) => {
                        return (<a key={index} className={styles.tag} onClick={this.tagSelect.bind(this, item.id)}><div></div><span>{item.name}</span></a>)
                    }) : null}
                    <a className={styles.tag} onClick={this.tagMore}><div></div><span>更多...</span></a>
                </div>

            </div>
        )
    }
}