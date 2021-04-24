import React, { component } from "react";
import {set_receive_status} from "./UsersReducer";
import {API} from "../components/api/api";
let initial_state=  {
    email:null,
    id:null,
    login:null,
    auth_status:false};


export let AuthReducer=(state=initial_state,action)=> {

    switch (action.type) {
        case "set_login_data":

            return {
                ...state, ...action.data
            }

        case "set_auth_status":

            return {...state, auth_status: action.auth_status}

        default:

            return state

    }
}





export const set_login_data=(email,id,login)=>({type: "set_login_data", data: {email,id,login}})
 export const set_auth_status=(auth_status)=>({type: "set_auth_status", auth_status})
export const  auth_me=()=> {
   
    return (dispatch)=>{

        API.auth_user().then(data=>{

            if(data.resultCode==0){

                let {email,id,login}=data.data;
                dispatch(set_login_data(email,id,login));
                dispatch(set_auth_status(true));

            }

        })
    }

}
