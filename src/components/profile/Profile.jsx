import React, { component } from "react";
import s from "./profile.module.css"
import Post from "./post/Post";

import Post_wall from "./post_wall/Post_wall.jsx";

import {Preloader} from "../users/preloader";
import {Status} from "./status/status.jsx";
import {Redirect} from "react-router-dom"

import newPostForm from "./new_post/new_post";
import New_post_container from "./new_post/new_post_container";



    const Profile=(props)=>{

if(!props.profile_data ){

    return(
        <Preloader/>
    )
}
          let state=props.posts;

         let posts=state.map(el=>{
              return <Post name={el.name} post={el.post}/>});
 if(props.auth_status===false){ return <Redirect to="/Login"/>}




    return(

          <div className={s.main}>

              <div className={s.user}>
                  <div className={s.photo}><img src={props.profile_data.photos.large}/></div>

                  <div className={s.user_inf}>
                    <div className={s.name}><h2>{props.profile_data.fullName}</h2></div>
                      <Status status={props.status} updateStatus={props.updateStatus} />
                      <div className={s.status}>О себе: {props.profile_data.aboutMe}</div>
                      <div className={s.facebook}><h4>facebook:{props.profile_data.contacts.facebook}</h4></div>
                      <div className={s.facebook}><h4>Вконтакте:{props.profile_data.contacts.vk}</h4></div>
                      <div className={s.joob} >Статус занятости: {props.profile_data.lookingForAJob?"Ищет работу":"Не ищет работу"}  </div>
                      <div className={s.city}></div>
                  </div>
                  <div>{posts}<New_post_container/> </div>

              </div>

          </div>
      )

  }

  export default Profile;