import React, { component } from "react";
import {NavLink} from  "react-router-dom";
import  s from "./nav.module.css";

const Nav=()=>{

return(
<div className={s.main}>
    <div className={s.user_profile}>
        <div className={s.icon}><img src="https://sun9-50.userapi.com/impg/c858236/v858236391/1671b6/iFDQzXuwZns.jpg?size=573x1184&quality=96&sign=5fd93a074264ffc631204db3057bc86e&type=album"/></div>
        <div className={s.profile_date}>
            <div className={s.user_name}><h1>Усманов Азат</h1> </div>
            <div className={s.city}><h2>Малое Рыбушкино</h2></div>
        </div>
    </div>

    <div className={s.navbar}>
        <div className={s.profile}><a href="#">Profile</a></div>
        <div className={s.message}><a href="#">Message</a></div>
        <div className={s.friends}><a href="#">Friends</a></div>
        <div className={s.news}><a href="#">News</a></div>
        <div className={s.music}><a href="#">Music</a></div>
    </div>
</div>
)
}
export default Nav;