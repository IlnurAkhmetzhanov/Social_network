import React, { component } from "react";
import s from "./new_post.module.css"
import newPost from "./new_post";
import {add_post_ActionCreator, print_post_ActionCreator} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import newPostForm from "./new_post";

let mapDispatchToProps=(dispatch)=>{
    return({
            onSubmit:(data)=>{
                dispatch(add_post_ActionCreator(data.post))
            }
        }



    )
}
let mapStateToProps=(state)=>{

    return(
        {

            new_post:state.posts.new_post
        }

    )
}


const New_post_container=connect(mapStateToProps,mapDispatchToProps)(newPostForm);

export default New_post_container;