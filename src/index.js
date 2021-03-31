import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from "./redux/state";








 let rerender=(state)=>
{
    ReactDOM.render(
        <React.StrictMode>
            <App data={store.getData()} dispatch={store.dispatch.bind(store)}

            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
store.subscribe(rerender);

reportWebVitals();

rerender(store.data);

