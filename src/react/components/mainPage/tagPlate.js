import React from 'react';
import { Carousel ,Row} from 'antd';
import styles from './tagPlate.css';

export class TagPlate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }

    tagSelect=(type)=>{
        let url;
        console.log(process.env.NODE_ENV+'process type');
        if (process.env.NODE_ENV === 'development') {
            url = 'http://localhost:8081/blogAssort';
        } else {
            url = 'http://www.chinaopensource.top:8081/blogAssort';
        }
        const w = window.open(url);
    }

    render() {

        return (
            <div className={styles.tagContent}>
            <div>
                 <a className={styles.tag} onClick={this.tagSelect.bind(this,'it')}><div></div><span>@IT互联网</span></a>
                 <a className={styles.tag}><div></div><span>人文社科</span></a>
                 <a className={styles.tag}><div></div><span>历史</span></a>
                 <a className={styles.tag}><div></div><span>热点新闻</span></a>
                 </div>
                 <div>
                 <a className={styles.tag}><div></div><span>读书</span></a>
                 <a className={styles.tag}><div></div><span>音乐</span></a>
                 <a className={styles.tag}><div></div><span>电影</span></a>
                 <a className={styles.tag}><div></div><span>趣事百科</span></a>
                 <a className={styles.tag}><span>更多...</span></a>
                 </div>
                 
            </div>
        )
    }
}