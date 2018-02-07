import React from 'react';
import { Carousel, Row, Col, Menu, Icon, Avatar, message,Input,Button } from 'antd';
import axios from "axios";
import { config } from "../../../utils/config";

import moment from 'moment';
import styles from './writeComment.css';

const { TextArea } = Input;
export default class WriteComment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            initStatus: false,
            showBtn:{
                marginRight:0,
                display:'none'
            },
        };
    }

    componentDidMount() {
        let _self = this;
        // let articleId = pubFunc.GetQueryString('articleId');
        // let url = `/blog/${articleId}?version=1`;
        // console.log(url);
        // axios.get(url, config)
        //     .then(function (res) {
        //         if (res.data.code == 0) {
        //             console.log(res.data.data);                    
        //             let content = _self.contentHtmlFormat(res.data.data.blog.content);
        //             _self.setState({ articleInfo: res.data.data, content:content,initStatus: true });
        //         } else {
        //             message.error('请求失败！');
        //         }
        //     })
        //     .catch(function (err) {
        //         message.error('请求失败！' + err);
        //     })

    }

    focusText =()=>{
        this.setState({showBtn:{marginRight:0}});
    }

    blurText =(e)=>{
        debugger;
        this.setState({showBtn:{marginRight:0,display:'none'}});        
    }

    render() {

        return (
            <div className={styles.contentArea}>
                <div className={styles.commentInfo}>
                    <Avatar size='large' style={{ position: 'absolute', color: '#f56a00', backgroundColor: '#fde3cf', fontSize: 12,marginTop:4 }}>{'liqwei'.substr(0, 1)}</Avatar>
                    <div className={styles.contnetMain}>
                        <div className={styles.head}>
                            <TextArea placeholder="说你想说的" autosize={{ minRows: 2, maxRows: 6 }} onFocus={this.focusText} onBlur={(e)=>this.blurText(e)}/>
                            <div className={styles.commentBtn} style={this.state.showBtn}>
                            <Button type="">取消</Button>
                            <Button type="primary" style={{marginLeft:4}}>确定</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}