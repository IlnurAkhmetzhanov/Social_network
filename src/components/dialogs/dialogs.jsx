import React, { component } from "react";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import Message_title from "./message_title/Messgage_title";
import Message_search from "./Message_search/Message.search";

const Dialogs=(props)=>{

    let messages=props.messages_data.map(el=>{
        return <Message name={el.name} message={el.message}/>
    })



    return(

            <div className={s.dialogs}>
                <div className={s.search_title}>
            <Message_title/>
            <Message_search/>
                </div>
                <div className={s.message}>
                  {messages}


                </div>
            </div>

    )
}

export default Dialogs;
