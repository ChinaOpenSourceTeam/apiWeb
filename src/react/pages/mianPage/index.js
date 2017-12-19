import React from 'react';
import { Carousel } from 'antd';

import { CarouselShow } from '../../components/mainPage/carousel'

export default class MainPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }

    render() {

        return (<div>
            <CarouselShow />    
        </div>)
    }
}