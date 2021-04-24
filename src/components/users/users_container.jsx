import React, { component } from "react";
import {connect} from "react-redux";
import * as axios from "axios";
import {Users} from "./Users";
import {
    follow,
    unfollow,
    set_users,
    set_total_users,
    set_current_page,
    set_receive_status, set_follow_progress, set_page_server, unfollow_user, follow_user
} from "../../redux/UsersReducer";
import {API, get_user} from "../api/api";
import {Redirect} from "react-router-dom"
import {withAuthRedirect} from "../hoc/hoc";
import {compose} from "redux"


  class UsersApiComponent extends React.Component{

    componentDidMount=(page)=> {
   this.props.set_page_server(page,this.props.users_page);

    }

     set_page_server=(page)=>{
        this.props.set_page_server(page,this.props.users_page)
  }


    render(){

        return(<Users total_users={this.props.total_users}
                      current_page={this.props.current_page}
                      users_page={this.props.users_page}
                      unfollow={this.props.unfollow}
                      follow={this.props.follow}
                      set_page_server={this.set_page_server}
                      users={this.props.users}
                      receive_status={this.props.receive_status}
                      set_receive_status={this.props.set_receive_status}
                      follow_progress={this.props.follow_progress}
                      set_follow_progress={this.props.set_follow_progress}
                      unfollow_user={this.props.unfollow_user}
                      follow_user={this.props.follow_user}
                      auth_status={this.props.auth_status}
        />)

    }

}


let mapStateToProps=(state)=>{

    return(
        {
            users:state.users.users_data,
            users_page:state.users.users_page,
            total_users:state.users.total_users,
            current_page:state.users.current_page,
            receive_status: state.users.receive_status,
            follow_progress: state.users.follow_progress,
            auth_status: state.login.auth_status
        }
    )
}



// let withUsersComponent=withAuthRedirect(UsersApiComponent)
// export const Users_container=connect(mapStateToProps, {follow, unfollow,set_users,
//     set_current_page, set_total_users, set_receive_status,set_follow_progress,set_page_server,unfollow_user,follow_user})(withUsersComponent)
export default compose(connect(mapStateToProps, {follow, unfollow,set_users,
    set_current_page, set_total_users, set_receive_status,set_follow_progress,set_page_server,unfollow_user,follow_user}),withAuthRedirect)(UsersApiComponent)