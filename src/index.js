import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Route from './react/routes';

ReactDOM.render(<Route />, document.getElementById('root'));
registerServiceWorker();
