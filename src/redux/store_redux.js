import React, { component } from "react";
import {combineReducers, createStore,applyMiddleware} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";
import {UsersReducer} from "./UsersReducer";
import {AuthReducer} from "./auth-reducer";
import thunkMiddleWare from "redux-thunk"
import { reducer as formReducer } from 'redux-form';


let reducers=combineReducers({messages:dialogsReducer,posts:profileReducer,users:UsersReducer,login:AuthReducer,form:formReducer});

let store=createStore(reducers,applyMiddleware(thunkMiddleWare));

export default store;