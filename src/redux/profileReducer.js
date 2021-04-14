import React, { component } from "react";

let initial_state= {
    profile_data:null,
    posts_data: [{name: "Малахов Владимир", post: "В Рыбушкино всегда солнечно"}],
        new_post: "text"
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
   }

    return state;
}

export const add_post_ActionCreator= ()=>({type:"add_post"});
export const print_post_ActionCreator=(text)=>({type:"print_post",text:text})
export const set_profile_data=(profile_data)=>({type:"set_profile_data",profile_data})