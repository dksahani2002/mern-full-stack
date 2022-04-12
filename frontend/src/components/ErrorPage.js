import React from "react";
import { NavLink } from "react-router-dom";
require("./ErrorPage.css");

const ErrorPage = () => {
  return (
    <>
      <div className="container box_shadow mt-3">
        <div className="row">
          <div className="col-md-12">
            <div className="error-template">
              <h1>Oops!</h1>
              <h2>404 Not Found</h2>
              <div className="error-details">
                Sorry, an error has occured, Requested page not found!
              </div>
              <div className="error-actions">
                <NavLink 
                  to="/"
                  className="btn mt-3 box_shadow btn-lg"
                  style={{backgroundColor:"#73CCFB" }}
                >
                  <span className="glyphicon glyphicon-home"></span>
                  Take Me Home{" "}
                </NavLink> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
