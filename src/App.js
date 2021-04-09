import React, {component} from "react";
import './App.css';

import Profile from "./components/profile/Profile";

import {BrowserRouter, Route,} from "react-router-dom"
import {NavLink} from "react-router-dom";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import Dialogs_container from "./components/dialogs/Dialogs_container";
import Profile_container from "./components/profile/Profile_container";
import {Users_container} from "./components/users/users_container.js";
import {Users} from "./components/users/users_container";


const App = (props) => {

    return (

        <BrowserRouter>
            <div className="content">
                <Header/>



            <div className="bottom_content">
                <Nav/>

              <Route  path="/Dialogs" render={()=><Dialogs_container/> }/>
              <Route  path="/Profile" render={()=><Profile_container/>}/>
                <Route  path="/Users" render={()=><Users_container/>}/>




            </div>


            </div>
        </BrowserRouter>

    )
}
export default App;