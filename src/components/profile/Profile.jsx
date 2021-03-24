import React, { component } from "react";
import s from "./profile.module.css"
import Post from "./post/Post";
import New_post from "./new_post/new_post.jsx";
import Post_wall from "./post_wall/Post_wall.jsx";

    const Profile=(props)=>{

         let posts=props.posts_data.map(el=>{
             return <Post name={el.name} post={el.post}/>});

    return(

          <div className={s.main}>
              <div className={s.search_new}>
                <Post_wall/>
                <New_post/>
                  {posts}
              </div>
              <div className={s.posts}>


              </div>
          </div>
      )

  }

  export default Profile;