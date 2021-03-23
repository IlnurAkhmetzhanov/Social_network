import React, { component } from "react";
import s from "./profile.module.css"
const Profile=(props)=>{
    return(
        <div className={s.main_profile}>
            <div className={s.posts}>
                <h3>Публикации на стене</h3>
            </div>

            <div className={s.new_post}>
                <input type = "text"  name = "firstname"  value =  "Что у Вас нового?"/>
                <input type="button" value=" Опубликовать "/>
            </div>
            <div className={s.user_post}>
                <div className={s.user_data}>
                    <div className={s.user_icon}><img src="https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256,256&quality=100&ssl=1"/></div>
                    <div className={s.user_name}><h3>Малахов Владимир</h3></div>
                </div>

                <div className={s.post_text}>
                    <p>В Малом Рыбушкино всегда солнечно</p>
                </div>
                <div className={s.post_reputation}>
                    <div className={s.post_likes}><img src="https://sun3-10.userapi.com/c849120/v849120172/1cd81f/ZBTk-JZFS_M.jpg?ava=1"/> </div>
                    <div className={s.likes_point}><h5>Likes:5</h5></div>
                    <div className={s.post_comments}><img src="https://newyork-12089.kxcdn.com/wp-content/uploads/2018/06/contact1.png"/></div>
                    <div className={s.comments_point}><h5>Comments:5</h5></div>
                </div>
            </div>






        </div>
    )
}
export default Profile;