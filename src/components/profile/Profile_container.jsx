import React, { component } from "react";
import s from "./profile.module.css"
import Post from "./post/Post";
import New_post from "./new_post/new_post.jsx";
import Post_wall from "./post_wall/Post_wall.jsx";
import New_post_container from "./new_post/new_post_container";
import {connect} from "react-redux";
import Profile from "./Profile";
import {loadingProfile, loadingStatus, set_profile_data, updateStatus} from "../../redux/profileReducer";
import * as axios from "axios"
import {withRouter} from "react-router-dom"
import {compose} from "redux"
import {ProfileAPI} from "../api/api";

class ProfileClass extends React.Component {

    componentDidMount() {
        this.props.loadingStatus(this.props.match.params.userId)
        this.props.loadingProfile(this.props.match.params.userId)





    }

    render() {
        return(

        <Profile profile_data={this.props.profile_data} auth_status={this.props.auth_status} loadingStatus={this.props.loadingStatus}
        status={this.props.status} updateStatus={this.props.updateStatus} posts={this.props.posts}
        />
        )
    }


}





let mapStateToProps=(state)=>{

    return(
        {
            profile_data:state.posts.profile_data,
            auth_status: state.login.auth_status,
            status:state.posts.status,
            posts:state.posts.posts_data
        }
    )
}

// let Profile_rout= withRouter(ProfileApi);
//   const Profile_container=connect(mapStateToProps,{set_profile_data})(Profile_rout)
//
//   export default Profile_container;
export default compose(connect(mapStateToProps,{set_profile_data,loadingStatus,loadingProfile,updateStatus}),withRouter)(ProfileClass)