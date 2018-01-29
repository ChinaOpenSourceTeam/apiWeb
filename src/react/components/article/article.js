import React from 'react';
import { Carousel, Row, Col, Menu, Icon, Avatar, message } from 'antd';
import axios from "axios";
import { config } from "../../../utils/config";
import { Base64 } from 'js-base64';
import moment from 'moment'; 
import styles from './article.css';



// import { ArticleList } from '../../components/mainPage/articleList'

export default class Artice extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            initStatus: false,
            articleInfo: {},
        };
    }

    componentDidMount() {
        let _self = this;
        let url = "/blog/56ec22c1-5030-4e3b-8509-066a440f8331?version=1"
        axios.get(url, config)
            .then(function (res) {
                if (res.data.code == 0) {
                    let content = _self.contentHtmlFormat(res.data.data.blog.content);
                    console.log(content);
                    _self.setState({ articleInfo: res.data.data, content:content,initStatus: true });
                } else {
                    message.error('请求失败！');
                }
            })
            .catch(function (err) {
                message.error('请求失败！' + err);
            })

    }

    contentHtmlFormat = (articleContent) => {
        let content = Base64.decode(articleContent);//content是后台返回的未知的一长串字符串，可能是'<p>内容<div>一个div</div></p>',也可能是'内容\r\n任何格式'
        let reg = new RegExp('^<([^>\s]+)[^>]*>(.*?<\/\\1>)?$');
        let format = reg.test(content); //content有可能是有格式的（带html标签），也可能无格式
        if (!format) {
            content = content && content.split('\n').map((item, i) => <p key={i}>{item.replace(/(^\s*)|(\s*$)/g, "")}</p>);
        } else {
            content = content && content.replace(/\n/g, "<br />");
            //带格式的可能含有换行的/n，要转化为<br />
        }

        let contentHtml1 = <article id='contentHtml' className='content' dangerouslySetInnerHTML={{ __html: content }}></article>;
        let contentHtml2 = <article id='contentHtml' className='content no-fomat'>{content}</article>;
        let contentHtml = format ? contentHtml1 : contentHtml2;
        return contentHtml;
    }

    render() {
        debugger;
        return (
            <div className={styles.articleContent}>
                    <div>
                        <h1 className={styles.title}>{this.state.initStatus ? this.state.articleInfo.blog.title : null}</h1>
                        <div className={styles.authorContent}>
                            <ul>
                                <li>
                                    <a className={styles.userImg} id="userImg"><Avatar size='large' style={{ color: '#f56a00', backgroundColor: '#fde3cf', fontSize: 16 }}>{this.state.initStatus ? this.state.articleInfo.user.loginName.substr(0, 1) : null}</Avatar></a>
                                    <a className={styles.follow}>
                                        <i className="fa fa-plus" aria-hidden="true"></i> 关注</a>
                                    <a className={styles.name}>{this.state.initStatus ? this.state.articleInfo.user.loginName : null}</a>
                                    <p>
                                        <span>{moment(this.state.initStatus ?this.state.articleInfo.blog.updateTime:'').format('YYYY.MM.DD HH:mm')}</span>
                                        <span>字数 2000</span>
                                        <span> 阅读 1000</span>
                                        <span>喜欢 210</span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <article>
                        {this.state.initStatus ? this.state.content : null}
                    </article>
                    <footer></footer>
                

            </div>

        )
    }
}