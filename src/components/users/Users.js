import React, { component } from "react";
import s from "./users.module.css";
import {Preloader} from "./preloader";
import {NavLink} from  "react-router-dom";
export const Users=(props)=>{

    let pages=[]
    for(let i=1;i<=Math.ceil(props.total_users/props.users_page);i++){

        pages.push(i);

    }


    return(<div>

                <div className={s.pages_navigation}>

                    <div className={s.pages_number}>

                        {
                            pages.map(el=>{return<button className={props.current_page===el&& s.pages_count} onClick={()=>{props.set_page_server(el) }} >{el}</button>})

                        }


                    </div>
                    <div className={s.preloader}>
                        {props.receive_status?<Preloader/>:null}
                    </div>



                </div>


        {


            props.users.map(el=> <div className={s.main} >
                <div className={s.logo}>
                  <NavLink to={`/Profile/${el.id}`} > <img src={el.photos.small?el.photos.small:"https://maxcdn.icons8.com/Share/icon/ultraviolet/Users/administrator1600.png"}/></NavLink>
                </div>
                <div className={s.user_inf}>
                    <h2>{el.name}</h2>
                    <h3>{el.city}</h3>
                </div>
                <div className={s.button}>
                    {
                        (el.followed)
                            ? <button onClick={()=>{props.unfollow(el.id)}} >Удалить</button>

                            :<button onClick={()=>{props.follow(el.id)}} >Добавить</button>
                    }
                </div>
            </div>)}

    </div>)
}