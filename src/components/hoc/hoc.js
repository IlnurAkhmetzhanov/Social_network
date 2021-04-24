import React from "react"
import {connect} from "react-redux";
import {Redirect} from "react-router-dom"

let mapStateToProps=(state)=>{
    return{
        auth_status:state.login.auth_status
    }
}

export const withAuthRedirect=(Component)=>{

    class RedirectComponent extends React.Component{
        render() {
            if(!this.props.auth_status) return( <Redirect to="/Login"/>)


            return <Component {...this.props}/>

    }

    }
    let connectedAuthRedirectComponent=connect(mapStateToProps)(RedirectComponent)

    return connectedAuthRedirectComponent;

}



