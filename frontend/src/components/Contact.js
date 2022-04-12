import React, { useEffect, useState } from "react";
import "./Contact.css";
import phone from "../img/phone.jpg";
import email from "../img/email.jpg";
import address from "../img/address.jpg";
const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const callContactAPge = async () => {
    try {
      const res = await fetch("/homcon", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setUserData({
        ...userData,
        name: data.name,
        email: data.email,
        phone: data.phone,
      });
      if (!res.status == 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      throw err;
    }
  };
  useEffect(() => {
    callContactAPge();
  }, []);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  //send data to backend
  const sendalldata = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = userData;
    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    });
    const data = await res.json();

    if (!data) {
      console.log("message not sent");
    } else {
      alert("Message sent");
      setUserData({ ...userData, message:"" });
    }
  };
  return (
    <>
      <div className="contact_info">
        <div className="container-fluid">
          <div className="display_flex height40vh">
            <div className="contact_info_item">
              <img className="img-logo" src={phone} alt="phone" />
              <div className="contact_info_content">
                <div className="contact_info_title">Phone</div>
                <div className="contact_info_text">+918181913890</div>
              </div>
            </div>
            <div className="contact_info_item">
              <img className="img-logo" src={email} alt="phone" />
              <div className="contact_info_content">
                <div className="contact_info_title">Email</div>
                <div className="contact_info_text">
                  durgeshwarsahani0@gmail.com
                </div>
              </div>
            </div>
            <div className="contact_info_item">
              <img className="img-logo" src={address} alt="phone" />
              <div className="contact_info_content">
                <div className="contact_info_title">Address</div>
                <div className="contact_info_text">
                  Gorakhpur , UttarPradesh
                </div>
              </div>
            </div>
          </div>
          <div className="box_shadow height50vh center">
            <div className="getintouch">
              <h2 className="text-left">Get In Touch</h2>
            </div>
            <form className="form" method="POST">
              <div className="nameemailphone">
                <div className="form-group-contact">
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account"></i>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    placeholder="Yourname"
                    onChange={handleChange}
                    value={userData.name}
                  />
                </div>
                <div className="form-group-contact">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    placeholder="Your Email"
                    onChange={handleChange}
                    value={userData.email}
                  />
                </div>
                <div className="form-group-contact">
                  <label htmlFor="phone">
                    <i className="zmdi zmdi-phone-in-talk"></i>
                  </label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    autoComplete="off"
                    placeholder="Your Mobile Number"
                    onChange={handleChange}
                    value={userData.phone}
                  />
                </div>
              </div>
              <div className="message_box">
                <label htmlFor="text">
                  <i className="zmdi zmdi-assignment"></i>
                </label>
                <input
                  type="text"
                  name="message"
                  id="message"
                  autoComplete="off"
                  placeholder="Message"
                  value={userData.message}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-3">
                <button onClick={sendalldata}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
