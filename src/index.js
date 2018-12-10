import React from 'react';
import ReactDOM from 'react-dom';
// import BasicLayout from './layouts/BasicLayout';
import App from './App';
import reducers from './reducers';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(<Provider store={store}>
    <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();