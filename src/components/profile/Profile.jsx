import React, { component } from "react";
import s from "./profile.module.css"
import Post from "./post/Post";
import New_post from "./new_post/new_post.jsx";
import Post_wall from "./post_wall/Post_wall.jsx";

  const Profile=()=>{
      return(

          <div className={s.main}>
              <div className={s.search_new}>
                <Post_wall/>
                <New_post/>
              </div>
              <div className={s.posts}>
                    <Post name="Усманов Рушан" post="В Рыбушкино всегда солнечно"/>
                    <Post name="Усманов Рушан" post="В Рыбушкино всегда солнечно"/>
               

              </div>
          </div>
      )

  }

  export default Profile;