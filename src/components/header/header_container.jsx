import React, { component } from "react";
import {NavLink} from  "react-router-dom";

import {connect} from "react-redux";
import * as axios from "axios"
import Header from "./header";
import {set_login_data, set_auth_status} from "../../redux/auth-reducer";

class Header_Api extends React.Component{
    componentDidMount(){
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me",{withCredentials:true}).then(response=>{

            if(response.data.resultCode==0){

                let {email,id,login}=response.data.data
                this.props.set_login_data(email,id,login)
                this.props.set_auth_status(true)

            }

        })

    }

    render(){

        return(
            <Header {...this.props} />)
    }

}
let mapStateToProps=(state)=>{

    return{
        login:state.login
    }

}

export let Header_container=connect(mapStateToProps,{set_login_data,set_auth_status})(Header_Api)