import React from 'react';
import ReactDOM from 'react-dom';
// import BasicLayout from './layouts/BasicLayout';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
