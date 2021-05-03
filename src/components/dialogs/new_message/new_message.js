import React, { component } from "react";

import {Field,reduxForm} from "redux-form"
import {Textarea} from "../../textarea/textarea";
import {emptyError, maxLength} from "../../validate/validate";
const New_message=(props)=>{


    return(
       <form onSubmit={props.handleSubmit}>
           <Field name={"message"} placeholder={"Введите сообщение"} component={Textarea} validate={[emptyError,maxLength]}/>
           <button>Отправить сообщение </button>

       </form>

    )
}
let messageForm=reduxForm({form:"message"})(New_message)
export default messageForm;
