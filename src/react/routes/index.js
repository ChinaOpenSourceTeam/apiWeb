/**
 * Created by weijq on 2017/10/9.
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import { qsMenu, analysisMenu, deviceMenu, reportMenu, systemMenu } from '../../utils/menu';
import Login from '../../react/pages/login';
import mainPage from '../../react/pages';

import test from '../../react/pages/testPage'

import Store from '../../redux';
import './index.css';
const store = Store();
const {Content } = Layout;
export default class Routes extends Component {
    componentDidMount() {

    }
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter >
                    <div style={{ width: '100%', height: '100%' }}>
                        <div className="listen"></div>
                        <Switch>
                            <Route path="/login" component={Login} />
                            <Route exact strict path="/" component={mainPage} />
                            <Redirect from='*' to='/' />
                        </Switch>
                    </div>
                </BrowserRouter>
            </Provider>
        )
    }
};