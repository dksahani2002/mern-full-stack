import React, { createContext,useReducer } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ErrorPage from "./components/ErrorPage";
import Logout from "./components/Logout";
import { intialState,reducer } from "./reducer/UseReducer";
export const UserContext = createContext();

const Routing=()=>{
  return(
     
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
       
  )
}
const App = () => {
 const [state, dispatch] = useReducer(reducer, intialState);
  
  return (
    
    <>
      <UserContext.Provider value={{state,dispatch}}>
        <Navbar />
        <Routing/>
      </UserContext.Provider>
    </>
  );
};

export default App;
