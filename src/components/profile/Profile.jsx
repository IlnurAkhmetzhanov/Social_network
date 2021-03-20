import React, { component } from "react";
import s from "./profile.module.css"
const Profile=(props)=>{
    return(
        <div className={s.content}>
            <div className={s.myprofile}>My profile</div>
        <div className={s.Image} > <img src="https://static.locals.md/2014/06/Yuri-Gagarin-1152.jpg" width="400px" /> </div>
       
        <div>
            <div className={s.newpost}>New post </div>
           <div>{props.name}</div>
          <div> post1</div>
          <div>post2</div>
        </div>
      </div>
    )
}
export default Profile;