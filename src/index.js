import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/store_redux.js";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";










    ReactDOM.render(
        <BrowserRouter>
        <React.StrictMode>

           <Provider store={store}>
            <App />

           </Provider>
        </React.StrictMode>
</BrowserRouter>
      ,
        document.getElementById('root')
    );







reportWebVitals();



