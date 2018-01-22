import React from 'react';
import { Carousel, Row, Avatar } from 'antd';
import styles from './articleList.css';
import zgf from '../../../public/images/zgf.jpg';

export class ArticleList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }

    articleDetail = ()=>{
        let url;
        if (process.env.NODE_ENV === 'development') {
            url = 'http://localhost:8081/article';
        } else {
            url = 'http://www.chinaopensource.top:8081/article';
        }
        window.open(url);
    }


    render() {

        return (
            <div className={styles.articleContent}>
                <ul>
                    <li >
                        <a className={styles.userImg} id="userImg">
                            <Avatar size='size' style={{ color: '#f56a00', backgroundColor: '#fde3cf', fontSize: 12 }}>U</Avatar>
                            <span className={styles.name}>尤为</span>
                            <span className={styles.time}>2小时前</span>
                        </a>
                        <div className={styles.content}>
                            <div className={styles.characters}>
                                <a onClick={this.articleDetail.bind(this)}><h2>花开后花又落 轮回也没结果</h2></a>
                                <p>
                                    那些什么你说的爱我,花开后花又落轮回也没结果,苔上雪告诉我你没归来过,独揽月下萤火照亮一纸寂寞,追忆那些什么你说的爱我 花开后花又落轮回也没结果 苔上雪告诉我你没归来过,花开后花又落轮回……演唱：许嵩 乘一叶扁舟入景随风望江畔渔火...
                            </p>
                            </div>
                            <img src={zgf} alt="" />
                        </div>
                        <div className={styles.articleFooter}>
                            <a href="" className={styles.articleFlag}>中国风</a>
                            <a href=""><i className="fa fa-eye" aria-hidden="true"></i>2000</a>
                            <a href=""><i className="fa fa-heart" aria-hidden="true">200</i></a>
                            <a href=""><i className="fa fa-commenting-o" aria-hidden="true"></i>15</a>
                        </div>
                    </li>
                    <li>
                        <a className={styles.userImg} id="userImg">
                            <Avatar size='size' style={{ color: '#f56a00', backgroundColor: '#fde3cf', fontSize: 12 }}>U</Avatar>
                            <span className={styles.name}>尤为</span>
                            <span className={styles.time}>2小时前</span>
                        </a>
                        <div className={styles.content}>
                            <div className={styles.characters}>
                                <a><h2>花开后花又落 轮回也没结果</h2></a>
                                <p>
                                    那些什么你说的爱我,花开后花又落轮回也没结果,苔上雪告诉我你没归来过,独揽月下萤火照亮一纸寂寞,追忆那些什么你说的爱我 花开后花又落轮回也没结果 苔上雪告诉我你没归来过,花开后花又落轮回……演唱：许嵩 乘一叶扁舟入景随风望江畔渔火...
                            </p>
                            </div>
                            <img src={zgf} alt="" />
                        </div>
                        <div className={styles.articleFooter}>
                            <a href="" className={styles.articleFlag}>中国风</a>
                            <a href=""><i className="fa fa-eye" aria-hidden="true"></i>2000</a>
                            <a href=""><i className="fa fa-heart" aria-hidden="true">200</i></a>
                            <a href=""><i className="fa fa-commenting-o" aria-hidden="true"></i>15</a>
                        </div>
                    </li>
                    <li>
                        <a className={styles.userImg} id="userImg">
                            <Avatar size='size' style={{ color: '#f56a00', backgroundColor: '#fde3cf', fontSize: 12 }}>U</Avatar>
                            <span className={styles.name}>尤为</span>
                            <span className={styles.time}>2小时前</span>
                        </a>
                        <div className={styles.content}>
                            <div className={styles.characters}>
                                <a><h2>花开后花又落 轮回也没结果</h2></a>
                                <p>
                                    那些什么你说的爱我,花开后花又落轮回也没结果,苔上雪告诉我你没归来过,独揽月下萤火照亮一纸寂寞,追忆那些什么你说的爱我 花开后花又落轮回也没结果 苔上雪告诉我你没归来过,花开后花又落轮回……演唱：许嵩 乘一叶扁舟入景随风望江畔渔火...
                            </p>
                            </div>
                            <img src={zgf} alt="" />
                        </div>
                        <div className={styles.articleFooter}>
                            <a href="" className={styles.articleFlag}>中国风</a>
                            <a href=""><i className="fa fa-eye" aria-hidden="true"></i>2000</a>
                            <a href=""><i className="fa fa-heart" aria-hidden="true">200</i></a>
                            <a href=""><i className="fa fa-commenting-o" aria-hidden="true"></i>15</a>
                        </div>
                    </li>
                    <li>
                        <a className={styles.userImg} id="userImg">
                            <Avatar size='size' style={{ color: '#f56a00', backgroundColor: '#fde3cf', fontSize: 12 }}>U</Avatar>
                            <span className={styles.name}>尤为</span>
                            <span className={styles.time}>2小时前</span>
                        </a>
                        <div className={styles.content}>
                            <div className={styles.characters}>
                                <a><h2>花开后花又落 轮回也没结果</h2></a>
                                <p>
                                    那些什么你说的爱我,花开后花又落轮回也没结果,苔上雪告诉我你没归来过,独揽月下萤火照亮一纸寂寞,追忆那些什么你说的爱我 花开后花又落轮回也没结果 苔上雪告诉我你没归来过,花开后花又落轮回……演唱：许嵩 乘一叶扁舟入景随风望江畔渔火...
                            </p>
                            </div>
                            <img src={zgf} alt="" />
                        </div>
                        <div className={styles.articleFooter}>
                            <a href="" className={styles.articleFlag}>中国风</a>
                            <a href=""><i className="fa fa-eye" aria-hidden="true"></i>2000</a>
                            <a href=""><i className="fa fa-heart" aria-hidden="true">200</i></a>
                            <a href=""><i className="fa fa-commenting-o" aria-hidden="true"></i>15</a>
                        </div>
                    </li>
                    <li>
                        <a className={styles.userImg} id="userImg">
                            <Avatar size='size' style={{ color: '#f56a00', backgroundColor: '#fde3cf', fontSize: 12 }}>U</Avatar>
                            <span className={styles.name}>尤为</span>
                            <span className={styles.time}>2小时前</span>
                        </a>
                        <div className={styles.content}>
                            <div className={styles.characters}>
                                <a><h2>花开后花又落 轮回也没结果</h2></a>
                                <p>
                                    那些什么你说的爱我,花开后花又落轮回也没结果,苔上雪告诉我你没归来过,独揽月下萤火照亮一纸寂寞,追忆那些什么你说的爱我 花开后花又落轮回也没结果 苔上雪告诉我你没归来过,花开后花又落轮回……演唱：许嵩 乘一叶扁舟入景随风望江畔渔火...
                            </p>
                            </div>
                            <img src={zgf} alt="" />
                        </div>
                        <div className={styles.articleFooter}>
                            <a href="" className={styles.articleFlag}>中国风</a>
                            <a href=""><i className="fa fa-eye" aria-hidden="true"></i>2000</a>
                            <a href=""><i className="fa fa-heart" aria-hidden="true">200</i></a>
                            <a href=""><i className="fa fa-commenting-o" aria-hidden="true"></i>15</a>
                        </div>
                    </li>
                    <li>
                        <a className={styles.userImg} id="userImg">
                            <Avatar size='size' style={{ color: '#f56a00', backgroundColor: '#fde3cf', fontSize: 12 }}>U</Avatar>
                            <span className={styles.name}>尤为</span>
                            <span className={styles.time}>2小时前</span>
                        </a>
                        <div className={styles.content}>
                            <div className={styles.characters}>
                                <a><h2>花开后花又落 轮回也没结果</h2></a>
                                <p>
                                    那些什么你说的爱我,花开后花又落轮回也没结果,苔上雪告诉我你没归来过,独揽月下萤火照亮一纸寂寞,追忆那些什么你说的爱我 花开后花又落轮回也没结果 苔上雪告诉我你没归来过,花开后花又落轮回……演唱：许嵩 乘一叶扁舟入景随风望江畔渔火...
                            </p>
                            </div>
                            <img src={zgf} alt="" />
                        </div>
                        <div className={styles.articleFooter}>
                            <a href="" className={styles.articleFlag}>中国风</a>
                            <a href=""><i className="fa fa-eye" aria-hidden="true"></i>2000</a>
                            <a href=""><i className="fa fa-heart" aria-hidden="true">200</i></a>
                            <a href=""><i className="fa fa-commenting-o" aria-hidden="true"></i>15</a>
                        </div>
                    </li>
                </ul>
                <a className={styles.articleMore}>更多...</a>
            </div>
        )
    }
}