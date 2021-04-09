import React, { component } from "react";
import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";
import {UsersReducer} from "./UsersReducer";




let reducers=combineReducers({messages:dialogsReducer,posts:profileReducer,users:UsersReducer});

let store=createStore(reducers);

export default store;