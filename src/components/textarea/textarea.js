import React from "react"
import s from "./textarea.module.css"
export const Textarea=({input,meta,...props})=>{

    return(
    <div className={(meta.error&&meta.touched)?s.error:""}>

        <textarea {...input}{...props}/>
        {(meta.error&&meta.touched)&&<span>{meta.error}</span>}
    </div>
   )

}
