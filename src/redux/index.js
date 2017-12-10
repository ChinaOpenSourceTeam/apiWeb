/**
 * Created by zll on 2017/10/11.
 */
import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import persistState from 'redux-localstorage'

import rootSaga from './sagas';
import FullReducers from './reducers';

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();


function myCustomSlicer(paths) {
    return (state) => {
        let subset = {}
        paths.forEach((path) => {
            subset[path] = state[path];
        });
        return subset
    }

}
export default function Store(initialState) {
    const store = createStore(
        FullReducers,
        initialState,
        compose(
            applyMiddleware(sagaMiddleware, loggerMiddleware),
            persistState(['Share'], { slicer: myCustomSlicer }),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        ));
    //运行所有已经注册的saga
    sagaMiddleware.run(rootSaga);
    return store;

}