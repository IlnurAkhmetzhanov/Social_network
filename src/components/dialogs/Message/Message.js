import React, {component} from "react";
import s from "./Message.module.css"

const Message=(user)=>{
    return(
        <div className={s.message}>
            <div className={s.icon}><img src="https://www.glaserei-manessinger.at/wp-content/uploads/2017/06/team2_neu.jpg"/> </div>
            <div className={s.username_text}>
                <div className={s.username}><h3>{user.name}</h3></div>
                <div className={s.user_message}>{user.message} </div>
            </div>
            <div className={s.time}>14:27 </div>


        </div>

    )
}

export default Message;