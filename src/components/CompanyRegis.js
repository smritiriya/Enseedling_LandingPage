import React from "react";
import { Cregister } from "../assets";

const CompanyRegis = () => {
    const myStyle = {
      //  border: "2px solid black",
      justifyContent: "center",
    };
    const containerContent = {
      // border: "2px solid red",
      width: "40%",
      margin: " 1rem",
      marginLeft: "0rem",
    };
  const heading = {
    textAlign: "start",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "40px",
    lineHeight: "50px",
  };
 const  para = {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "30px",
    };
    const imgBox = {
        // border: "2px solid green",
        margin: "1rem",
        width:"50%"
    };

  return (
    <>
      <div className="container1 d-flex p-5" style={myStyle}>
        <div className="container1-Content w-30%" style={containerContent}>
          <h1 className="mb-5" style={heading}>
            Company Registration Process
          </h1>
          <p className="mb-3" style={para}>
            Enseedling provides professional and inclusive services for
            startups, from company registration to after-launch support to help
            you unlock your business growth.
          </p>
          <ul>
            <li className="mb-3">
              Register your company hassle-free wherever you wante
            </li>
            <li className="mb-3">Prepare your documents and identification.</li>
            <li className="mb-3">Pick the most effective company structure.</li>
            <li className="mb-3">Get the correct permits and licenses.</li>
            <a href=""></a>
            <li id="lastLink" className="mb-3">
              learn more &nbsp;&nbsp;
              <i class="fa-solid fa-arrow-right"></i>
            </li>
          </ul>
        </div>
        <div className="container1-img" style={imgBox}>
          <img src={Cregister} alt="" />
        </div>
      </div>
    </>
  );
};

export default CompanyRegis;
