import React, { component } from "react";
import s from "./users.module.css"







export const Users=(props)=>{

    // props.users=props.set_users(
    //     [{id:1,fullname:"Малахов Владимир",status:true,city:"Курск",photo:"https://sun9-42.userapi.com/impf/zy4HCfdZxC-wYvIaZ68GQV3-uDFKfiOFDPESgQ/1iqfDScNglk.jpg?size=1280x853&quality=96&sign=01a76325ab41226cf5623c0483962494&type=album" },
    //         {id:2,fullname:"Зайцев Георгий", status:false ,city:"Кавказ",photo:"https://sun9-75.userapi.com/impf/d4zrZgFidPbZ81N7nVLizebpEvgEPGrxMG8fjg/SOCl8gYee_4.jpg?size=810x1080&quality=96&sign=f0f84072a9ba327bbed06f7f692f20ac&type=album"},
    //         {id:3,fullname:"Лукоянов Михаил",status:false, city:"Казань",photo:"https://sun9-21.userapi.com/impg/D5v2EeqBxwouEDEKGEhy0eXFJevvA2lvcF4ZLg/o3ns8fS3ZZA.jpg?size=1280x960&quality=96&sign=2c748cd53be8999be97b248c5aab8c8b&type=album"}
    //     ])

    return(<div>
        {
            props.users.map(el=> <div className={s.main} >
                <div className={s.logo}>
                   <img src={el.photo}/>
                </div>
                <div className={s.user_inf}>
                    <h2>{el.fullname}</h2>
                    <h3>{el.city}</h3>
                </div>
                <div className={s.button}>
                    {
                        (el.status)
                        ? <button onClick={()=>{props.unfollow(el.id)}} >Удалить</button>

                        :<button onClick={()=>{props.follow(el.id)}} >Добавить</button>
                    }
                </div>
            </div>)}

    </div>)
}



