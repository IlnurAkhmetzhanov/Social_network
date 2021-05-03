import React from "react"
import { reducer as formReducer } from 'redux-form';
import {Field,reduxForm} from "redux-form"
import {emptyError, maxLength} from "../validate/validate";
import {Textarea} from "../textarea/textarea";


const LoginForm=(props)=> {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  name={"login"} placeholder={"login"} component={Textarea} validate={[emptyError,maxLength]}/>
            </div>
            <div>
                <Field name={"password"} placeholder={"password"} component={Textarea} validate={[emptyError,maxLength]}/>
            </div>
            <div>
                <Field  name={"rememberMe"} type={"checkbox"} component={"input"}/> Remember me
            </div>
            <button>Login</button>
        </form>

    )
}


const LoginReduxForm=reduxForm({form: 'login'})(LoginForm)




export const Login=(props)=>{
    const onSubmit = (formData) => {

      alert("Кнопка нажата");

    }
    return(
        <div>
            <h1>Авторизация</h1>

            <LoginReduxForm onSubmit={onSubmit}/>
        </div>


    )
}

