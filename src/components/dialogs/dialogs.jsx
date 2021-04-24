import React, { component } from "react";
import s from "./dialogs.module.css"
import Message from "./Message/Message";
import Message_title from "./message_title/Messgage_title";
import Message_search from "./Message_search/Message.search";
import New_message_container from "./new_message/new_message_container";
import {Redirect} from "react-router-dom"
const Dialogs=(props)=>{

    let messages=props.messages.messages_data.map(el=>{
        return <Message name={el.name} message={el.message}/>
    })



    return(

            <div className={s.dialogs}>
                <div className={s.search_title}>
            <Message_title/>
            <Message_search/>

                    <New_message_container  />
                </div>
                <div className={s.message}>
                  {messages}


                </div>
            </div>

    )
}


export default Dialogs;
