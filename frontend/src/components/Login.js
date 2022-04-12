import React, { useState ,useContext} from "react";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";
import login_image from "../img/login.jpg";

import { UserContext } from "../App";
const Login = () => {
  const {state,dispatch}=useContext(UserContext);
  const history = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  let name, value;
  const handleChange = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const loginData = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid Login");
    } else {
      // window.alert("Login Successfull");
      dispatch({type:"USER",payload:true});
      history("/");
    }
  };
  return (
    <>
      <section className="main-div">
        <div className="left-div">
          <h2>Login</h2>
          <form method="POST">
            <div className="form-group-login">
              <label htmlFor="email">
                <i className="zmdi zmdi-email"></i>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                onChange={handleChange}
                value={user.email}
                placeholder="Your Email"
              />
            </div>
            <div className="form-group-login">
              <label htmlFor="password">
                <i className="zmdi zmdi-lock"></i>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="off"
                onChange={handleChange}
                value={user.password}
                placeholder="Password"
              />
            </div>

            <div className="form-group-login form-button">
              <input
                type="submit"
                name="login"
                className="form-submit"
                value="Login"
                onClick={loginData}
              />
            </div>
          </form>
        </div>
        <div className="right-div">
          <figure>
            <img className="image-signuin" src={login_image} />
          </figure>
          <NavLink to="/register" className="signup-image-link">
            {" "}
            Register as New User{" "}
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Login;
