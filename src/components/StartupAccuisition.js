import React from "react";
import { pqr } from "../assets";

const StartupAcc = () => {
  const myStyle = {
    // border: "2px solid black",
    justifyContent: "center",
  };
  const containerContent = {
    // border: "2px solid red",
    width: "40%",
    margin: "1rem",
  };
  const heading = {
    textAlign: "start",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "40px",
    lineHeight: "50px",
  };
  const para = {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "30px",
  };
  const imgBox = {
    // border: "2px solid green",
    margin: "1rem",
    width: "50%",
  };

  return (
    <>
      <div className="acc">
        <h1 className="text-center p-3">"Other Services"</h1>
        <div className="container1 d-flex p-5" style={myStyle}>
          <div className="container1-Content w-30%" style={containerContent}>
            <h1 className="mb-4" style={heading}>
              Startup Accquistion
            </h1>
            <p className="mb-4" style={para}>
              Boost your business with our digital marketing services and thrive
              and rule the online market.
            </p>
            <ul>
              <li className="mb-3">Generate A Pipeline Of Leads Online</li>
              <li className="mb-3">
                Establish A Solid Grip Over Social Media Platforms.
              </li>
              <li className="mb-3">
                Online Authority Building With Strong Personal Branding.
              </li>
              <li className="mb-3">
                Boost Your Sales With The Proven Strategies Curated By Our
                Experts.
              </li>
              <a href="">
                learn more &nbsp;&nbsp;
                <i class="fa-solid fa-arrow-right"></i>
              </a>
            </ul>
          </div>
          <div className="container1-img" style={imgBox}>
            <img src={pqr} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default StartupAcc;