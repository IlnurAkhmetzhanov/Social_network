import React, { component } from "react";
import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";



let reducers=combineReducers({messages:dialogsReducer,posts:profileReducer});

let store=createStore(reducers);

export default store;