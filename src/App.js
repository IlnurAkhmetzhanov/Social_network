import React, { component } from "react";
import './App.css';
import Header from "./components/header";
import Nav from "./components/nav";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header/>
     <Nav/>
     <Profile/>
    </div>);
}
export default App;