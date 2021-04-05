import React, { component } from "react";
import s from "./profile.module.css"
import Post from "./post/Post";
import New_post from "./new_post/new_post.jsx";
import Post_wall from "./post_wall/Post_wall.jsx";
import New_post_container from "./new_post/new_post_container";
import {connect} from "react-redux";
import Profile from "./Profile";


  //   const Profile=(props)=>{
  //        //let state=props.posts;
  //        let posts=state.posts_data.map(el=>{
  //            return <Post name={el.name} post={el.post}/>});
  //
  //   return(
  //
  //         <div className={s.main}>
  //             <div className={s.search_new}>
  //               <Post_wall/>
  //               <New_post_container  />
  //                 {/*{posts}*/}
  //             </div>
  //             <div className={s.posts}>
  //
  //
  //             </div>
  //         </div>
  //     )
  //
  // }
let mapStateToProps=(state)=>{
    return(
        {
            posts:state.posts
        }
    )
}
// let mapDispatchToProps=(dispatch)=>{
//     return(
//         {
//
//         }
//     )
// }

  const Profile_container=connect(mapStateToProps)(Profile)

  export default Profile_container;