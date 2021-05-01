import React from "react"
import { reducer as formReducer } from 'redux-form';
import {Field,reduxForm} from "redux-form"


const LoginForm=(props)=> {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  name={"login"} placeholder={"login"} component={"input"}/>
            </div>
            <div>
                <Field name={"password"} placeholder={"password"} component={"input"}/>
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

       console.log(formData);

    }
    return(
        <div>
            <h1>Авторизация</h1>

            <LoginReduxForm onSubmit={onSubmit}/>
        </div>


    )
}

