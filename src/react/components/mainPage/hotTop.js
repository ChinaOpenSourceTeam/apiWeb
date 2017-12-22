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
                    <li style={{background:'rgba(169, 141, 244,.7)'}}><a href="">最新文章 ></a></li>
                    <li style={{background:'rgba(62, 190, 240,.7)'}}><a href="">一周最热 ></a></li>
                    <li style={{background:'rgb(198, 227, 118)'}}><a href="">一月最热 ></a></li>
                    <li style={{background:'rgba(235, 84, 91,.7)'}}><a href="">季度最热 ></a></li>
                    <li style={{background:'rgba(255, 157, 165,.7)'}}><a href="">年度最热 ></a></li>
                </ul>
            </div>
        )
    }
}