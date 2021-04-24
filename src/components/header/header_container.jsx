import React, { component } from "react";
import {NavLink} from  "react-router-dom";

import {connect} from "react-redux";
import * as axios from "axios"
import Header from "./header";
import {set_login_data, set_auth_status, auth_me} from "../../redux/auth-reducer";
import {API} from "../api/api";

class Header_Api extends React.Component{
    componentDidMount(){
    this.props.auth_me()

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

export let Header_container=connect(mapStateToProps,{set_login_data,set_auth_status,auth_me})(Header_Api)