import React, { component } from "react";
import s from "./new_message.module.css"
import {add_message_ActionCreator, print_message_ActionCreator} from "../../../redux/dialogsReducer";


const New_message=(props)=>{
    let ref_new_message=React.createRef();

    let onchange=()=>{
        let text=ref_new_message.current.value;
        props.dispatch(print_message_ActionCreator(text))

    }
    let onclick=()=>{
        props.dispatch(add_message_ActionCreator())
         props.dispatch(print_message_ActionCreator(""))
    }

    return(
        <div className={s.new_message}>
            <input ref={ref_new_message}onChange={onchange} value={props.new_message} ></input>
            <button onClick={onclick}> Отправить</button>


        </div>


    )
}
export default New_message;
