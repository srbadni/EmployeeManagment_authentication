import React from 'react';
import ReactDOM from 'react-dom';
import App from './Web/App';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <App/>
            </HashRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);