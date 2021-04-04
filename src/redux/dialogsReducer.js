import React, { component } from "react";
let initial_state=  {
    new_message: "Напишите сообщение",
        messages_data: [{name: "Усманов Руш", message: "Халь ничек?"}, {
        name: "Лукоянов Михаил",
        message: "Закрой комнату"
    }]}


export let dialogsReducer=(state=initial_state,action)=>{

    if (action.type === "print_message") {
        state.new_message = action.text;


    }
    else if (action.type === "add_message") {
        let message = {
            name: "Зайцев Георгий",
            message: state.new_message
        };
        state.messages_data.push(message);

    }
    return state;
}
export const add_message_ActionCreator= ()=>({type:"add_message"});
export const print_message_ActionCreator=(text)=>({type:"print_message",text:text})