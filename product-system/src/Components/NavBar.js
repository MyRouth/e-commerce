import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import CartIcon from "./CartIcon";
import './NavBar.css'
import navBarImage from '../Images/Icons/online-6817350_640.jpg'

function NavBar() {
  return (
    <>
      <AppBar position="static" color="inherit" >
        <Toolbar className="app-bar">
          <img 
           src={navBarImage}
           height={50}
           width={50}   
           alt="e-commerce logo"
          />
          <CartIcon /> 
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
