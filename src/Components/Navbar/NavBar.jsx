import React from "react";
import './Navbar.css';
import {Link} from "react-router-dom";



const NavBar = () => {


    return(
   <div className="navBar">
    <Link to= "/">Home</Link>
    <Link to= "/PersonalRecipePage">My Recipes</Link>
   </div>
    
    );
  }
  
  export default NavBar;