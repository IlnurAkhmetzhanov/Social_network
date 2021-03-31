import React, {component} from "react";
import './App.css';

import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Route,} from "react-router-dom"
import {NavLink} from "react-router-dom";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";


const App = (props) => {
    return (

        <BrowserRouter>
            <div className="content">
                <Header/>



            <div className="bottom_content">
                <Nav/>
              <Route  path="/Dialogs" render={()=><Dialogs dispatch={props.dispatch} messages_data={props.data.messages_data}
              new_message={props.data.new_message}
              /> }/>
              <Route  path="/Profile" component={()=><Profile new_post={props.data.new_post}
                                                              posts_data={props.data.posts_data}
                                                              dispatch={props.dispatch}
                                                               />}/>





            </div>


            </div>
        </BrowserRouter>

    )
}
export default App;