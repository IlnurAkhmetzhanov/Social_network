import React, { component } from "react";
import {connect} from "react-redux";

import {
    follow_ActionCreator,
    get_users_ActionCreator,
    unfollow_ActionCreator,
    set_users_ActionCreator, set_current_page, set_total_users
} from "../../redux/UsersReducer";
 import {Users} from "./users.js";





let mapStateToProps=(state)=>{

    return(
        {
            users:state.users.users_data,
            users_page:state.users.users_page,
            total_users:state.users.total_users,
            current_page:state.users.current_page
        }
    )
}

let mapDispatchToProps=(dispatch)=>{
    return(
        {
            follow:(id)=>dispatch(follow_ActionCreator(id)),

             unfollow:(id)=>dispatch(unfollow_ActionCreator(id)),
            set_users:(users_data)=>dispatch(set_users_ActionCreator(users_data)),
            set_current_page:(current_page)=>dispatch(set_current_page(current_page)),
            set_total_users:(total_users)=>dispatch(set_total_users(total_users))
        }
    )
}

export const Users_container=connect(mapStateToProps,mapDispatchToProps)(Users)