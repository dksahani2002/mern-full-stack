import React, { useEffect, useState } from "react";
import "./Home.css"
import Detailcard from "./detailcard";
const Home = () => {
  const [userName, setUserName]=useState({});
  const [show , setShow]=useState(false);
  const [showData , setShowData]=useState([{}]);
  const userHomepage= async(props)=>{
        try{
            const res = await fetch('/homcon',{
              method:"GET",
              headers:{
                "Content-Type":"application/json"
              },

            });
            const data = await res.json();
            console.log(data);
            setUserName(data);
            if(data){
              setShow(true);
            } 

        }catch(err){
          console.log(err);
        }
  }
  const Carddata= async(props)=>{
    try{
        const res = await fetch('/alldata',{
          method:"GET",
          headers:{
            "Content-Type":"application/json"
          },

        });
        const data = await res.json();
        console.log(data);
        setShowData(data); 

    }catch(err){
      console.log(err);
    }
}
  useEffect(()=>{
    userHomepage();
    Carddata();
  },[])

  // const {name,email,phone,work}=showData;
  return (
    <>
    <div >
      <div className="home-page">
        <div className="home-div">
          <p className="mt-5 center">Welcome</p>
          <h1>{userName.name}</h1>
          <h2>{show?"Thanks for visiting sir":"Lets Develop Some App"}</h2>
        </div>
      </div>
     
      </div>
      <div className="row cards-container">
     { showData.map((e ,index)=>{return(<Detailcard key={`lodacard_${index}`}   name={e.name} email={e.email} phone={e.phone} work={e.work}  />)}
      )}
      </div>
    </>
  );
};

export default Home;
