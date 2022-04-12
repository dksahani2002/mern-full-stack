import React, {useContext}from "react";
import image_logo from "../img/logo.png";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { UserContext } from "../App";

const Navbar = () => {
  const {state,dispatch}=useContext(UserContext);
  const RenderNav=()=>{
    if(state){
      return(
        <>
        <li className="nav-item  ">
                  <NavLink className="nav-link active " id="white-text" aria-current="page" to="/" > 
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" id="white-text" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" id="white-text" to="/contact">
                    Contact
                  </NavLink>
                </li> 
                <li className="nav-item">
                  <NavLink className="nav-link active" id="white-text" to="/logout">
                    Logout
                  </NavLink>
                </li>
        </>
      )
    }else{
      return(
        <>
        <li className="nav-item  ">
                  <NavLink className="nav-link active " id="white-text" aria-current="page" to="/" > 
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" id="white-text" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" id="white-text" to="/contact">
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" id="white-text" to="/login">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" id="white-text" to="/register">
                    Signup
                  </NavLink>
                </li> 
        </>
      )
    }
  }
  
  return (
    <>
    {/* rgb(112, 121, 121) */}
      <nav
        className="navbar navbar-expand-lg navbar-light  text-white"
        style={{ color: "$gray-100", backgroundColor:'#73CCFB' , opacity:'1'}}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={image_logo}
              style={{ width: "80px", height: "50px", borderRadius: "50px" }}
              alt="logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0 " id='gray-100' >
              <RenderNav/>
            </ul>
            {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
