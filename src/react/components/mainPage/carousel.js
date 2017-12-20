import React from 'react';
import { Carousel } from 'antd';
import styles from './carousel.css';
import c1 from '../../../public/images/c1.jpg'
import c2 from '../../../public/images/c2.jpg'
import c3 from '../../../public/images/c3.jpg'
import c4 from '../../../public/images/c4.jpg'

export class CarouselShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }

    render() {

        return (<div>
            <Carousel autoplay className={styles.carousel1}>
                <div><img src={c1} alt="" /></div>
                <div><img src={c2} alt="" /></div>
                <div><img src={c3} alt="" /></div>
                <div><img src={c4} alt="" /></div>
            </Carousel>
            <div><h2>走马灯测试中...</h2></div>
        </div>)
    }
}