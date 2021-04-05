import React, { component } from "react";
let initial_state=  {
    new_message: "Сообщение",
        messages_data: [{name: "Усманов Руш", message: "Халь ничек?"}]}


export let dialogsReducer=(state=initial_state,action)=>{



 if (action.type === "add_message") {


        let message = {
            name: "Зайцев Георгий",
            message: state.new_message
        };

        return {
            ...state,

            messages_data:[...state.messages_data,message]


        };
    }

    else if (action.type === "print_message") {


     return{
         ...state,
         new_message: action.text
     };
    }

    return state;
}
export const add_message_ActionCreator= ()=>({type:"add_message"});
export const print_message_ActionCreator=(text)=>({type:"print_message",text:text})