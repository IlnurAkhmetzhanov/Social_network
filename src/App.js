import React, { component } from "react";
import './App.css';
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/dialogs";
import {BrowserRouter,Route,} from "react-router-dom"
import {NavLink} from "react-router-dom";
const App = () => {
  return (
      <BrowserRouter>
    <div className="app-wrapper">
      <Header/>
     <Nav/>
    </div>;
  <div className="app-wrapper-content">
      <Route path="/Profile" component={Profile}/>
   <Route path="/Dialogs" component={Dialogs}/>

  </div>
          </BrowserRouter>)
}
export default App;