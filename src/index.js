import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BasicLayout from './layouts/BasicLayout';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BasicLayout />, document.getElementById('root'));
registerServiceWorker();
