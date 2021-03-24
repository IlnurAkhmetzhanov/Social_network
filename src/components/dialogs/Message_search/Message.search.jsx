import React from "react";
import  s from "./Message_search.module.css";

const Message_search=()=> {
    return (
        <div className={s.Search}>
            <input type="text" name="firstname" value="Поиск сообщений"/>

        </div>

    )
}
export default Message_search;
