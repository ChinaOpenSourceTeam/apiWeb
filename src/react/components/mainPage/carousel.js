import React from 'react';
import { Carousel } from 'antd';
import styles from './carousel.css';

export class CarouselShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }

    render() {

        return (<div style={{width:946,height:'100%'}}>
            <Carousel autoplay>
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
            </Carousel>
            <div><h2>走马灯测试中...</h2></div>
        </div>)
    }
}