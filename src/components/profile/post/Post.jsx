import React, { component } from "react";

import s from "./Post.module.css"

const Post=(user)=>{
    return(

        <div className={s.user_post}>
            <div className={s.user_data}>
                <div className={s.user_icon}><img src="https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256,256&quality=100&ssl=1"/></div>
                <div className={s.user_name}><h3>{user.name}</h3></div>
            </div>

            <div className={s.post_text}>
                <p>{user.post}</p>
            </div>
            <div className={s.post_reputation}>
                <div className={s.post_likes}><img src="https://sun3-10.userapi.com/c849120/v849120172/1cd81f/ZBTk-JZFS_M.jpg?ava=1"/> </div>
                <div className={s.likes_point}><h5>Likes:5</h5></div>
                <div className={s.post_comments}><img src="https://newyork-12089.kxcdn.com/wp-content/uploads/2018/06/contact1.png"/></div>
                <div className={s.comments_point}><h5>Comments:5</h5></div>
            </div>

        </div>




    )




}

export default Post;