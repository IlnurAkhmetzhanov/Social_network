import React, { component } from "react";

let initial_state= {
    users_data: [{id:1,fullname:"Малахов Владимир",status:true,city:"Курск",photo:"https://sun9-21.userapi.com/impf/c854024/v854024811/2a542/FNLWesWF4GY.jpg?size=811x1080&quality=96&sign=3f274d23591cbc0f6a97f8284a53b2de&type=album" },
        {id:2,fullname:"Зайцев Георгий", status:false ,city:"Кавказ",photo:"https://sun9-75.userapi.com/impf/d4zrZgFidPbZ81N7nVLizebpEvgEPGrxMG8fjg/SOCl8gYee_4.jpg?size=810x1080&quality=96&sign=f0f84072a9ba327bbed06f7f692f20ac&type=album"},
        {id:3,fullname:"Лукоянов Михаил",status:false, city:"Казань",photo:"https://sun9-21.userapi.com/impg/D5v2EeqBxwouEDEKGEhy0eXFJevvA2lvcF4ZLg/o3ns8fS3ZZA.jpg?size=1280x960&quality=96&sign=2c748cd53be8999be97b248c5aab8c8b&type=album"}
    ]


}


export let UsersReducer=(state=initial_state,action)=> {

    if (action.type === "follow") {
        return {
            ...state,
            users_data: state.users_data.map(el => {
                if (el.id === action.id) {

                    return{...el,status:true}


                }
                return{...el}

            })
        }
    } else if (action.type === "unfollow") {
        return {
            ...state,
            users_data:state.users_data.map(el => {
                if (el.id === action.id) {
                    return{...el,status:false}
                }

                return{...el}
            })
        }
    }
    else if(action.type==="set_users"){

        return(
        { ...state,users_data:[...state.users_data,...action.users_data]}

        )

    }

    return state;
}
export const follow_ActionCreator= (id)=>({type:"follow",id:id});
export const unfollow_ActionCreator= (id)=>({type:"unfollow",id:id});
export const set_users_ActionCreator= ()=>({type:"set_users"});
