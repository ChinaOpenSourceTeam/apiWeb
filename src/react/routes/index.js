/**
 * Created by weijq on 2017/10/9.
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import { systemMenu } from '../../utils/menu';
import Login from '../../react/pages/login';
import mainPage from '../../react/pages';

import test from '../../react/pages/testPage'

import Store from '../../redux';
import './index.css';
const store = Store();
const { Content } = Layout;

const HomePage = () => <div>Home Page</div>
const DownloadApp = () => <div>DownloadApp Page</div>
const Discover = () => <div>Discover Page</div>
const Fork = () => <div>Fork Page</div>

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
                            <Route path="/" component={mainPage} />
                            <Redirect from='*' to='/' />
                        </Switch>
                    </div>
                </BrowserRouter>
            </Provider>
        )
    }
};

export class HeaderRoute extends React.Component {

    render() {
        return (
            <Content style={{ width: '100%', height: '100%', overflow: 'auto' }} className="menu">
                <Switch>
                    <Route path="/downloadApp" component={DownloadApp} />
                    <Route path="/discover" component={Discover} />
                    <Route path="/forks" component={Fork} />
                    <Route path="/message" component={test} />
                    <Route path="/writeAticle" component={test} />
                    <Route component={HomePage} />
                </Switch>
            </Content>
        );
    }
}