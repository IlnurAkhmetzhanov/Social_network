import React from "react"
import {set_current_page} from "../../redux/UsersReducer";
import * as axios from "axios"

let instance=axios.create({
    withCredentials:true,
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    headers:{"API-KEY":"f51e853c-54c1-4f65-b155-bd40d675ea98"}

})



export let API={

    get_user(current_page,users_page){
        return instance.get(`users?page=${current_page}&count=${users_page}`)
            .then(response=>{
                return response.data
            })

    },

    follow_user(id){
        return instance.post(`follow/${id}`,{}).then(response=>{
            return response.data
        })
    },

    unfollow_user(id){
        return instance.delete(`follow/${id}`).then(response=>{
            return response.data
        })
    },
    auth_user(){

        return instance.get("auth/me").then(response=>{
            return response.data
        })

    }

}
export let ProfileAPI={
    getProfile:(userId)=>{

        return instance.get("profile/"+userId)

    },
    getStatus:(userId)=>{
        return instance.get("profile/status/"+userId)

},
putStatus:(status)=>{
        return instance.put("profile/status",{status})
}



}

