import React from "react";
import { logo } from "../assets";

const Contactus = () => {
  const contactUs = {
    // border: "2px solid firebrick",
    display: "flex",
    padding: "4rem",
    fontFamily: "Inter",
    fontStyle: "normal",
    justifyContent: "center",
  };
  const getIntouch = {
    // border: "2px solid fuchsia",
    width: "30%",
      textAlign: "start",
      padding: "1rem",
    margin:"2rem"
  };
  const para = {
    color: "#74757E",
  };
  const ul = {
    // border: " 2px solid rgb(27, 11, 255)",
    textAlign: "start",
    justifyContent: "start",
    padding: "0",
  };
  const li = {
    listStyle: "none",
    background: "rgb(235, 235, 235)",
    padding: "1rem",
    justifyContent: "start",
    margin: "20px 0",
    width: "100%",
  };

  const contactForm = {
    // border: " 2px solid rgb(11, 222, 255)",
    display: "block",
    width: "40%",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    margin: " 0rem",
    padding: " 3rem",
    };
    
  const  formGrp = {
      margin: "1rem",
    //   width:"70%"
    };
    const btn = {
        width: "80%",
        margin: "1rem",
        justifyContent:"center"
    };

  return (
    <>
      <div className="contactUs" style={contactUs}>
        <div className="getIntouch" style={getIntouch}>
          <div className="imgLogo">
            <img src={logo} alt="" className="mb-1"/>
          </div>
          <h4>Get In Touch</h4>
          <p style={para}>
            A platform that will simplify your business operations, <br />
            optimize inventory and drive growth with ease.
          </p>
          <ul style={ul}>
            <li style={li}>
              <i className="fa-sharp fa-solid fa-message" /> &nbsp;&nbsp;
              contact@enceelding.com
            </li>
            <li style={li}>
              <i className="fa-solid fa-phone" />
              &nbsp;&nbsp; 09887665544777
            </li>
            <li style={li}>
              <i className="fa-sharp fa-solid fa-location-dot" /> &nbsp;&nbsp;
              New york City Road
            </li>
          </ul>
        </div>
        <div className="contactForm" style={contactForm}>
          <h2 className="text-center">Contact Now</h2>
          <form>
            <div className="form-group" style={formGrp}>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="Name "
              />
            </div>
            <div className="form-group" style={formGrp}>
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
                placeholder="Email"
              />
            </div>
            <div className="form-group" style={formGrp}>
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
                placeholder="Number"
              />
            </div>
            <div className="form-group" style={formGrp}>
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
                placeholder="Comapny Name"
              />
            </div>
            <div className="form-group" style={formGrp}>
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
                placeholder="Message"
              />
            </div>

            <button type="submit" className="btn btn-primary" style={btn}>
              Sign in
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contactus;
