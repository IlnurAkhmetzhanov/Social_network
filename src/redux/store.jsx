import React, { component } from "react";
import {profileReducer} from "./profileReducer.js";
import {dialogsReducer} from "./dialogsReducer.js";



export let store= {
    rerender() {
        alert("")
    },

    _data: {
        messages: {
            new_message: "Напишите сообщение",
            messages_data: [{name: "Усманов Руш", message: "Халь ничек?"}, {
                name: "Лукоянов Михаил",
                message: "Закрой комнату"
            }],
        },


        posts: {
            posts_data: [{name: "Малахов Владимир", post: "В Рыбушкино всегда солнечно"}],
            new_post: "text"
        }
    },

    subscribe(observer) {
        this.rerender = observer;
    },

    getData() {
        return this._data;
    },


    dispatch(action) {

        this._data.messages=dialogsReducer(this._data.messages,action)
         this._data.posts=profileReducer(this._data.posts,action)
        // this.rerender(this._data);
    }
};


























