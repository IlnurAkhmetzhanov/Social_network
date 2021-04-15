import React, { component } from "react";
import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";
import {UsersReducer} from "./UsersReducer";
import {AuthReducer} from "./auth-reducer";




let reducers=combineReducers({messages:dialogsReducer,posts:profileReducer,users:UsersReducer,login:AuthReducer});

let store=createStore(reducers);

export default store;