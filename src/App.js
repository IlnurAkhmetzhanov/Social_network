import React, {component} from "react";
import './App.css';

import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Route,} from "react-router-dom"
import {NavLink} from "react-router-dom";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";


const App = () => {
    return (

        <BrowserRouter>
            <div className="content">
                <Header/>



            <div className="bottom_content">
                <Nav/>
              <Route exact path="/Dialogs" component={Dialogs}/>
              <Route exact path="/Profile" component={Profile}/>




            </div>


            </div>
        </BrowserRouter>

    )
}
export default App;