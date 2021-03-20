import React, { component } from "react";
import {NavLink} from  "react-router-dom";


const Nav=()=>{

return(
<nav className="nav">
 <div>
   < NavLink to="/Profile">  Profile</NavLink>
 </div>
 <div> <NavLink to ="/Dialogs">Dialogs</NavLink></div>
 <div>
   <a href="#" >News</a>
 </div>
 <div>
   <a href="#" >Music</a>
 </div>
 <div>
   <a href="#" >Setting</a>
 </div>
</nav>
)
}
export default Nav;