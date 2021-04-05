import React, { component } from "react";
import s from "./new_message.module.css"
import {add_message_ActionCreator, print_message_ActionCreator} from "../../../redux/dialogsReducer";

const New_message=(props)=>{
    let new_message=React.createRef();

    let onchange=()=>{
        let text=new_message.current.value;
        props.print_message(text);


    }
    let onclick=()=>{

        props.add_message();
         props.print_message("")

    }


    return(
        <div className={s.new_message}>
            <input ref={new_message} onChange={onchange} value={props.new_message} ></input>
            <button onClick={onclick}> Отправить</button>


        </div>


    )
}
export default New_message;
