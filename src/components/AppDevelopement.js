import React from "react";
import { ghi } from "../assets";

const AppDevelopement = () => {
  const myStyle = {
    // border: "2px solid black",
    justifyContent: "center",
    background: "rgba(244, 244, 244, 0.83) ",
  };
  const containerContent = {
    // border: "2px solid red",
    width: "40%",
    margin: "1rem",
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
    // <>
    //   <div className="container1 d-flex p-5" style={myStyle}>
    //     <div className="container1-img" style={imgBox}>
    //       <img src={ghi} alt="" />
    //     </div>
    //     <div className="container1-Content w-30%" style={containerContent}>
    //       <h1 className="mb-4" style={heading}>
    //         App Developement Services
    //       </h1>
    //       <p className="mb-4" style={para}>
    //         Boost your business with our terrific application development
    //         services. Turn your ideas into reality with us.
    //       </p>

    //     </div>
    //   </div>
    // </>
    <>
      <div className="container" style={myStyle}>
        <div className="row justify-content-center ">
          <div className="col-12 col-lg-6  " style={imgBox}>
            <img
              src={ghi}
              alt=""
              srcset=""
              style={{ widh: " 100%", height: "25rem" }}
            />
          </div>
          <div className="col-12 col-lg-6" style={containerContent}>
            <h1 className="mb-5" style={heading}>
              App Developement Services
            </h1>

            <p className="mb-3" style={para}>
              Boost your business with our terrific application development //
              services. Turn your ideas into reality with us.
            </p>
            <ul>
              <li className="mb-3">Quick App Deployment At Lower Cost.</li>
              <li className="mb-3">User- Experience Centric Development. .</li>
              <li className="mb-3">
                Pick the most effective company structure.
              </li>
              <li className="mb-3">Get the correct permits and licenses.</li>
              <a href="">
                learn more &nbsp;&nbsp;
                <i class="fa-solid fa-arrow-right"></i>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppDevelopement;
