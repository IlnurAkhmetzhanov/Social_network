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
    set_receive_status
} from "../../redux/UsersReducer";
import {API, get_user} from "../api/api";




  class UsersApiComponent extends React.Component{

    componentDidMount=()=> {
         this.props.set_receive_status(true);
        API.get_user(this.props.current_page,this.props.users_page).then(data=>{

            this.props.set_users(data.items)
              this.props.set_receive_status(false);
            // this.props.set_total_users(response.data.totalCount)


        })
    }
    set_page_server=(page)=>{
        this.props.set_current_page(page)
         this.props.set_receive_status(true);

        API.get_user(page,this.props.users_page).then(data=>{

            this.props.set_users(data.items)
            this.props.set_receive_status(false);



        })

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
            receive_status: state.users.receive_status
        }
    )
}




export const Users_container=connect(mapStateToProps, {follow, unfollow,set_users,
    set_current_page, set_total_users, set_receive_status})(UsersApiComponent)