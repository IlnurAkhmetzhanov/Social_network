import React, { component } from "react";

let initial_state= {
    posts_data: [{name: "Малахов Владимир", post: "В Рыбушкино всегда солнечно"}],
        new_post: "text"
}


export let profileReducer=(state=initial_state,action)=>{
    if (action.type === "add_post") {
        let post = {
            name: "Усманов Рушан",
            post: state.new_post
        };
        state.posts_data.push(post);
        return{
            ...state,
            posts_data:[...state.posts_data]
        }

    }
    else if (action.type === "print_post") {
        state.new_post = action.text;
        return{
            ...state,
            new_post:state.new_post
        }
    }
    return state;
}

export const add_post_ActionCreator= ()=>({type:"add_post"});
export const print_post_ActionCreator=(text)=>({type:"print_post",text:text})