import React,{useState } from "react";
import "./Signup.css";
import {NavLink,useNavigate} from 'react-router-dom';
import signup_image from "../img/signup.jpg";
const Signup = () => {
  const history = useNavigate();
  const [user ,setUser] =useState({
    name:"",email:"",phone:"",work:"",password:"",cpassword:""
  })
  let name,value;
  const handleInputs =(e)=>{
          console.log(e);
          name = e.target.name;
          value=e.target.value;
          setUser({
            ...user , [name]:value
          })
  }

  const PostData = async (e)=>{
        e.preventDefault();
        const {name,email,phone,work,password,cpassword} =user;
        const res = await fetch("/register",{
          method:"POST",
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify({
            name,email,phone,work,password,cpassword
          })
        })

        const data = await res.json();
        if(data.status===422 || !data){
          window.alert("Invalid Registerion");
          console.log("Invalid registeration");
        }else{ 
          window.alert("  Registerion successfull");
          console.log(" registeration successful");
          history("/login");
        }

  }




  return (
    <section className="main-div">
      <div className="left-div">
        <h2>Signup</h2>
        <form method="POST">
          <div className="form-group-signup">
            <label htmlFor="name">
              <i className="zmdi zmdi-account"></i>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="off"
              value={user.name}
              onChange={handleInputs}
              placeholder="Yourname"
            />
          </div>
          <div className="form-group-signup">
            <label htmlFor="email">
              <i className="zmdi zmdi-email"></i>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              value={user.email}
              onChange={handleInputs}
              placeholder="Your Email"
            />
          </div>
          <div className="form-group-signup">
            <label htmlFor="phone">
              <i className="zmdi zmdi-phone-in-talk"></i>
            </label>
            <input
              type="number"
              name="phone"
              id="phone"
              autoComplete="off"
              value={user.phone}
              onChange={handleInputs}
              placeholder="Your Mobile Number"
            />
          </div>
          <div className="form-group-signup">
            <label htmlFor="work">
              <i className="zmdi zmdi-slideshow"></i>
            </label>
            <input
              type="text"
              name="work"
              id="work"
              autoComplete="off"
              value={user.work}
              onChange={handleInputs}
              placeholder="Your Profession"
            />
          </div>
          <div className="form-group-signup">
            <label htmlFor="password">
              <i className="zmdi zmdi-lock"></i>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              value={user.password}
              onChange={handleInputs}
              placeholder="Password"
            />
          </div>
          <div className="form-group-signup">
            <label htmlFor="cpassword">
              <i className="zmdi zmdi-lock"></i>
            </label>
            <input
              type="password"
              name="cpassword"
              id="cpassword"
              autoComplete="off"
              value={user.cpassword}
              onChange={handleInputs}
              placeholder="Confirm Password"
            />
          </div>
          <div className="form-group-signup form-button">
            <input type="submit" name="signup" className="form-submit" value="Register" onClick={PostData}/> 
          </div>
        </form>
      </div>
      <div className="right-div">
        <figure>
          <img className="image-signup" src={signup_image} />
        </figure>
        <NavLink to='/login' className="signup-image-link">I am Already Registered </NavLink> 
      </div>
    </section>
  );
};

export default Signup;
