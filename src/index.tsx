import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';

import App from './App';
import './styles.scss';

const mountNode = document.getElementById('app');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , mountNode
    );
