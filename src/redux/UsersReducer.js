import React, { component } from "react";
import {API} from "../components/api/api";



let initial_state= {
    users_data:[],
    current_page:1,
    users_page:3,
    total_users:19,
    receive_status:true,
    follow_progress:[]

}

export let UsersReducer=(state=initial_state,action)=> {
    switch (action.type) {

        case "follow":

            return {
                ...state,
                users_data: state.users_data.map(el => {
                    if (el.id === action.id) {

                        return {...el, followed: true}


                    }
                    return {...el}

                })
            }
        case "unfollow":
            return {
                ...state,
                users_data: state.users_data.map(el => {
                    if (el.id === action.id) {
                        return {...el, followed: false}
                    }

                    return {...el}
                })
            }

        case "set_users":
            return (
                {
                    ...state,
                    users_data: [...action.users_data]
                }
            )

        case "set_current_page":
            return (
                {
                    ...state,
                    current_page: action.current_page
                }
            )

        case "set_total_users":
            return ({...state, total_users: action.total_users})

        case "set_receive_status":
            return {
                ...state, receive_status: action.receive_status
            }
        case "set_follow_progress":

            return {
                ...state,follow_progress: action.receive_status
                    ? [...state.follow_progress, action.userId]
                    : state.follow_progress.filter(id => id != action.userId)}

        default:
            return state;
    }
}

















export const follow= (id)=>({type:"follow",id:id});
export const unfollow= (id)=>({type:"unfollow",id:id});
export const set_users = (users_data)=>({type:"set_users",users_data:users_data});
export const set_current_page=(current_page)=>({type:"set_current_page",current_page})
export const set_total_users=(total_users)=>({type:"set_total_users",total_users})
export const set_receive_status=(receive_status)=>({type:"set_receive_status",receive_status})
export const set_follow_progress = (isFetching, userId) => ({type: "set_follow_progress", isFetching, userId })

export const set_page_server=(page,users_page)=> {
    return (dispatch) => {
        dispatch(set_current_page(page));
        dispatch(set_receive_status(true));

        API.get_user(page, users_page).then(data => {

            dispatch(set_users(data.items));
            dispatch(set_receive_status(false));


        })

    }
}
export const unfollow_user=(id)=>{

    return (dispatch)=>{
        dispatch(set_follow_progress(true, id));

        API.unfollow_user(id).then(data=>{

            if(data.resultCode==0){dispatch(unfollow(id)); }
        })


        dispatch(set_follow_progress(false, id));

    }
}

export const follow_user=(id)=>{

    return (dispatch)=>{
        dispatch(set_follow_progress(true, id));

        API.follow_user(id).then(data=>{

            if(data.resultCode==0){dispatch(follow(id)); }
        })


        dispatch(set_follow_progress(false, id));

    }
}

