/**
 * Created by weijq on 2017/10/9.
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import { systemMenu } from '../../utils/menu';
import Login from '../../react/pages/login';
import MainPage from '../../react/pages';
import HomePage from '../../react/pages/mianPage';

import UserSetting from '../../react/pages/userManage/userSetting';
import WriteAticle from '../../react/pages/write/writeAticle'
import Article from '../../react/pages/article/article'
import BlogAssort from '../../react/pages/blogAssort'
import Search from '../../react/pages/search'

import test from '../../react/pages/testPage'

import Store from '../../redux';
import './index.css';
const store = Store();
const { Content } = Layout;

// const HomePage = () => <div>Home Page</div>
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
                            <Route path="/" component={MainPage} />
                            <Redirect from='*' to='/' />
                        </Switch>
                    </div>
                </BrowserRouter>
            </Provider>
        )
    }
};

export class HeaderRoute extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ width: '100%', height: '100%'}} className="menu">
                <Switch>
                    <Route path="/downloadApp" component={DownloadApp} />
                    {/* <Route path="/discover" component={DownloadApp} /> */}
                    <Route path="/forks" component={Fork} />
                    <Route path="/message" component={test} />
                    <Route path="/user" component={UserRoute} />
                    <Route path="/writeAticle" component={WriteAticle} />
                    <Route path="/article" component={Article} />
                    <Route path="/blogAssort" component={BlogAssort} />
                    <Route path="/search" component={Search} />
                    <Route component={HomePage} />
                </Switch>
            </div>
        );
    }
}

export class UserRoute extends React.Component {

    render() {
        return (
            <div style={{ width: '100%', height: '100%'}} className="menu">
                <Switch>
                    <Route path="/user/setting" component={UserSetting} />
                </Switch>
            </div>
        );
    }
}