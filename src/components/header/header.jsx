import React, { component } from "react";
import s from "./header.module.css"
import {Preloader} from "../users/preloader";
const Header=(props)=>{



return(
<div className = {s.main_header}>
    <div className={s.name}><h1>#В_МАЕВНИКЕ</h1></div>
    <div className={s.icons}>
        <div className={s.friends}><img src="http://christinaprieto.com/wp-content/uploads/2019/06/9DEFF288-DBBF-4FB4-B840-B2652842F1EA-150x150.png"/> </div>
        <div className={s.message}><img src="https://img1.freepng.ru/20180411/goq/kisspng-email-address-computer-icons-envelope-mail-5ace294e6e33d3.2827319715234604304514.jpg"/></div>
        <div className={s.video}> <img src ="http://janzcovirtualservicessolutions.com/wp-content/uploads/2016/12/Video-icon.png"/> </div>
    </div>
<div className={s.search}> <input type = "text"  name = "firstname"  value =  "Поиск"/> </div>
<div className= {s.profile_panels}><h1>Усманов Азат</h1></div>
<div className={s.profile_icon}>{props.login.auth_status?<img src="https://static.thenounproject.com/png/3144376-200.png"/>:<a>Login</a>} </div>

    {/**/}
</div>

)
}
export default Header;