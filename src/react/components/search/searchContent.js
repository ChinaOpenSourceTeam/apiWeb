import React from 'react';
import { Form, Input, Tooltip, Icon, Carousel, Row, Col, Button, Avatar, Tabs, List, message } from 'antd';
import moment from 'moment';
import axios from "axios";
import { config } from "../../../utils/config";
import { Base64 } from 'js-base64';
import { pubFunc } from '../../../utils/pubFnc';

import styles from './searchContent.css';
import { ArticleList } from '../mainPage/articleList.js';
const TabPane = Tabs.TabPane;


class SearchContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }

    componentDidMount() {
        let _self = this;
        let keyword = pubFunc.GetQueryString('keyword');
        //搜索框赋值
        document.getElementById("search_keyword").value = keyword;
        console.log(keyword, 666);
        let url = `/solr/findBlogBySolr?name=${keyword}`
        axios.get(url, config)
            .then(function (res) {
                if (res.data.code == 0) {
                    console.log(res.data.data, 1000);
                    debugger;
                    if (res.data.data.length > 0) {
                        let blogList = [];
                        let contnet = '';
                        let i = 0;
                        for (i in res.data.data) {
                            res.data.data[i].content = _self.contentHtmlFormat(res.data.data[i].content);
                        }
                        _self.setState({ articleInfo: res.data.data, content: res.data.data, initStatus: true });
                    }
                } else {
                    message.error('请求失败！');
                }
            })
            .catch(function (err) {
                message.error('请求失败！' + err);
            })
    }

    contentHtmlFormat = (articleContent) => {
        debugger;
        let content = Base64.decode(articleContent);
        content = content.replace(/<.*?>/ig, "");
        content = content.replace(/<\/?.+?>/g, "");
        content = content.replace(/[\r\n]/g, "");
        content.substr(0, 160);

        //content是后台返回的未知的一长串字符串，可能是'<p>内容<div>一个div</div></p>',也可能是'内容\r\n任何格式'
        // let reg = new RegExp('^<([^>\s]+)[^>]*>(.*?<\/\\1>)?$');
        // let format = reg.test(content); //content有可能是有格式的（带html标签），也可能无格式
        // if (!format) {  
        //     content = content && content.split('\n').map((item, i) => <p key={i}>{item.replace(/(^\s*)|(\s*$)/g, "")}</p>);
        // } else {
        //     content = content && content.replace(/\n/g, "<br />");
        //     //带格式的可能含有换行的/n，要转化为<br />
        // }

        let contentHtml1 = <article id='contentHtml' className='content' style={{ fontSize: 14, letterSpacing: 0, marginTop: 0 }} dangerouslySetInnerHTML={{ __html: content }}></article>;
        let contentHtml2 = <article id='contentHtml' className='content no-fomat'>{content}</article>;
        // let contentHtml = format ? contentHtml1 : contentHtml2;
        return contentHtml1;
    }

    render() {
        return (
            <div className={styles.articleContent}>
                <div className={styles.authorContent}>
                    <ul>
                        <li>
                            <p>
                                <span>综合排序：</span>
                                <span>热门文章</span>
                                <span>最新文章</span>
                            </p>
                        </li>
                    </ul>
                </div>
                <div>
                    <ArticleList articleList={this.state.content} />
                </div>
            </div>
        )
    }
}


export default SearchContent;