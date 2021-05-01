import React, { component } from "react";
import {ProfileAPI} from "../components/api/api";

let initial_state= {
    profile_data:null,
    posts_data: [{name: "Малахов Владимир", post: "В Рыбушкино всегда солнечно"}],
        new_post: "text",
    status:null

}


export let profileReducer=(state=initial_state,action)=>{
   switch(action.type){
       case"add_post":
        let post = {
            name: "Усманов Рушан",
            post: state.new_post
        };
        state.posts_data.push(post);
        return{
            ...state,
            posts_data:[...state.posts_data]
        }


       case "print_post":
        state.new_post = action.text;
        return{
            ...state,
            new_post:state.new_post
        }
       case "set_profile_data":

           return{
           ...state,profile_data:action.profile_data
           }
       case "setStatus":


           return{
               ...state,status:action.status
           }
   }

    return state;
}

export const add_post_ActionCreator= ()=>({type:"add_post"});
export const print_post_ActionCreator=(text)=>({type:"print_post",text:text})
export const set_profile_data=(profile_data)=>({type:"set_profile_data",profile_data})
export const setStatus=(status)=>({type:"setStatus",status})

export const loadingProfile=(userId)=>{

    return (dispatch)=>{


        ProfileAPI.getProfile(userId).then(response => {

            dispatch(set_profile_data(response.data))

        })
    }
}

export const loadingStatus=(userId)=> {

    return (dispatch) => {
        ProfileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data))


        })
    }
}
    export const updateStatus=(status)=>{
        return (dispatch) => {
            ProfileAPI.putStatus(status).then(response => {
                debugger
                if(response.data.resultCode===0) dispatch(setStatus(status))
            })
        }

    }
