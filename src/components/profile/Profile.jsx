import React, { component } from "react";
import s from "./profile.module.css"
import Post from "./post/Post";

import Post_wall from "./post_wall/Post_wall.jsx";
import New_post_container from "./new_post/new_post_container";



    const Profile=(props)=>{

         // let state=props.posts;

         let posts=props.posts.posts_data.map(el=>{
             return <Post name={el.name} post={el.post}/>});

    return(

          <div className={s.main}>
              <div className={s.search_new}>
                <Post_wall/>
                <New_post_container  />
                  {posts}
              </div>
              <div className={s.posts}>


              </div>
          </div>
      )

  }

  export default Profile;