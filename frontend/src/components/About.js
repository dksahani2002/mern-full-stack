import React, { useEffect ,useState} from "react";
import {useNavigate} from "react-router-dom";
import durgapic from "../img/login.jpg";
const About = () => {

  const navigate=useNavigate();
  const [userData,setUserData]=useState({});
   
  const callAboutPage = async ()=>{
        try{
            const res = await fetch('/about',{
              method:"GET",
              headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
              },
              credentials:"include"
            });
            const data = await res.json();
            setUserData(data);
            console.log(userData);
            // data1=data;
            // console.log("error hai yaha hahah");
            // console.log(data);
            if(!res.status===200){
              const error = new Error(res.error);
              throw error;
            }
        }catch(error){
          console.log(error);
          navigate('/login');
        }
  } 
  // console.log(data1);
  useEffect(()=>{
      callAboutPage();
  },[])
  
  return (
    <>
      <div className="container emp-profile m-5 box_shadow " >
          <form method="GET">
            <div className="row">
              <div className="col-md-4">
                <div className="profile-img mt-3">
                <img src={durgapic}  style={{height:'150px'}} alt="profilepic"/>
                </div> 
              </div>
              <div className="col-md-6">
               <div className="profile-head mt-3">
                 <h5>Welcome {userData.name} </h5>
                 <h6>The Web Developer</h6>
                 <p className="profile-rating mt-3 mb-5">Rating <span>1/10</span></p>

                 <ul className="nav nav-tabs" role="tablist">
                   <li className="nav-items">
                     <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab">About</a>
                   </li>
                   <li className="nav-items">
                     <a className="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab">Timeline</a>
                   </li> 
                 </ul>
               </div>
              </div>
              <div className="col-md-2">
                <input type="submit" className="profile-edit-btn mt-3" name="btnAddmore" value="Edit Profile"/>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="profile-work">
                  <p>Work Link</p>
                  <a href="https://www.instagram.com/durgadassahani/" target="_dd">Instagram</a><br/> 
                  <a href="https://www.instagram.com/durgadassahani/" target="_dd">Facebook</a><br/> 
                  <a href="https://www.instagram.com/durgadassahani/" target="_dd">Twitter</a><br/> 
                  <a href="https://www.instagram.com/durgadassahani/" target="_dd">AZ</a><br/>
                  <a href="https://www.instagram.com/durgadassahani/" target="_dd">Codechef</a><br/>
                  <a href="https://www.instagram.com/durgadassahani/" target="_dd">Codeforces</a><br/>
                  <a href="https://www.instagram.com/durgadassahani/" target="_dd">Mysite</a><br/>
                </div>
              </div>
              <div className="col-md-8 pl-5 about-info">
                <div className="tab-content profile-tab" id="myTabContent">
                  <div className="tab-pane fade show active" id="home" role="tabpanel">
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label htmlFor="USER ID">USER ID</label> 
                      </div>
                      <div className="col-md-6">
                        <p>{userData._id}</p> 
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label htmlFor="USER ID">Name</label> 
                      </div>
                      <div className="col-md-6">
                        <p>{userData.name}</p> 
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label htmlFor="USER ID">Phone</label> 
                      </div>
                      <div className="col-md-6">
                        <p>{userData.phone}</p> 
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label htmlFor="USER ID">Email</label> 
                      </div>
                      <div className="col-md-6">
                        <p>{userData.email}</p> 
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label htmlFor="USER ID">Profession</label> 
                      </div>
                      <div className="col-md-6">
                        <p>{userData.work}</p> 
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </form>
      </div>
    </>
  );
};

export default About;
