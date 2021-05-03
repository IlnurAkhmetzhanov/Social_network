import React, { component } from "react";
import s from "./new_post.module.css"
import {Field,reduxForm} from "redux-form"
import {Textarea} from "../../textarea/textarea";
import {emptyError, maxLength} from "../../validate/validate";



const newPost=(props)=>{

    return(

            <form onSubmit={props.handleSubmit}>
                <Field name={"post"} placeholder={"Введите сообщение"} component={Textarea} validate={[emptyError,maxLength]}/>
                <button>Отправить</button>
            </form>
    )
}
const newPostForm=reduxForm({form:"post"})(newPost)

export default newPostForm;