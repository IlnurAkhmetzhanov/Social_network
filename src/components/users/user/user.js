import React, { component } from "react";
import s from "./user.module.css"

export const User=(props)=>{
    return(
        <div className={s.main} >
            <div className={s.logo}>
                {props.photo}
            </div>
            <div className={s.user_inf}>
                <h2>props.fullname</h2>ы
                <h3>props.city</h3>
            </div>
            <div className={s.button}>
                {props.status
                    ? <button onClick={props.unfollow(props.unfollow_ActionCreator(props.id))} >Onfollow</button>
                    :<button onClick={props.follow(props.follow_ActionCreator(props.id))} >Follow</button>}
            </div>
        </div>

    )
}



/*
   <div className={s.main}>
   <div className={s.header}>
         <h1>Список пользователей</h1>
         </div>
          <div className={s.users.js}>

         </div>



       </div>
    )
*/
