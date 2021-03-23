import React, {component} from "react";
import './App.css';
import Header from "./components/header/header";
import Nav from "./components/nav/nav.jsx";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/dialogs";
import {BrowserRouter, Route,} from "react-router-dom"
import {NavLink} from "react-router-dom";

const App = () => {
    return (
        <div className="content">

            <Header/>

          <div className="bottom_content">

          <Nav/>
          <Profile/>
          </div>


        </div>


    )
}
export default App;