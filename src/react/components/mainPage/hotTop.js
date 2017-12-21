import React from 'react';
import { Carousel } from 'antd';
import styles from './hotTop.css';

export class HotTop extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }

    render() {

        return (
            <div className={styles.hotTop}>
                <ul>
                    <li style={{background:'#A98DF4'}}><a href="">最新文章 ></a></li>
                    <li style={{background:'#3EBEF0'}}><a href="">一周最热 ></a></li>
                    <li style={{background:'#F5E000'}}><a href="">一月最热 ></a></li>
                    <li style={{background:'#EB545B'}}><a href="">季度最热 ></a></li>
                    <li style={{background:'#FF9DA5'}}><a href="">年度最热 ></a></li>
                </ul>
            </div>
        )
    }
}