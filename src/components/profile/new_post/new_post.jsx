import React, { component } from "react";
import s from "./new_post.module.css"


const New_post=(props)=>{
    return(


            <div className={s.new_post}>
                <input type = "text"  name = "firstname"  value =  "Что у Вас нового?"/>
                <input type="button" value=" Опубликовать "/>

            </div>


        // </div>







    )
}
export default New_post;