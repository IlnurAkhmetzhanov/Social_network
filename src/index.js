import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/store_redux.js";








 let rerender=(state)=>

{


    ReactDOM.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)}

            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

 rerender(store.getState());


store.subscribe(() => {
    let state = store.getState();
    rerender(state);
});


reportWebVitals();



