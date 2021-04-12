import React, { component } from "react";
import s from "./users.module.css";

export const Preloader=(props)=>{
    return(
    <div className={s.preloader}>

        <img src="https://acegif.com/wp-content/uploads/loading-9.gif"/>
    </div>)
}