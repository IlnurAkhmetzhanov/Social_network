import React, { component } from "react";
import {connect} from "react-redux";

import {
    follow_ActionCreator,
    get_users_ActionCreator,
    unfollow_ActionCreator,
    set_users_ActionCreator
} from "../../redux/UsersReducer";
 import {Users} from "./users.js";





let mapStateToProps=(state)=>{
    return(
        {
            users:state.users.users_data
        }
    )
}

let mapDispatchToProps=(dispatch)=>{
    return(
        {
            follow:(id)=>dispatch(follow_ActionCreator(id)),

             unfollow:(id)=>dispatch(unfollow_ActionCreator(id)),
            set_users:()=>dispatch(set_users_ActionCreator())
        }
    )
}

export const Users_container=connect(mapStateToProps,mapDispatchToProps)(Users)