import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  {add_post,print_post} from "./redux/state";

export let rerender=(data)=>
{
    ReactDOM.render(
        <React.StrictMode>
            <App data={data} add_post={add_post}
            print_post={print_post}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
