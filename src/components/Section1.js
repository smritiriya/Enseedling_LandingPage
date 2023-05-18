import React from "react";
import { Button } from "react-bootstrap";
import { img1 } from "../assets";

const Section1 = () => {
     const myStyle = {
        //  border: "2px solid black",
         justifyContent :"space-between",
    };
    const containerContent = {
        // border: "2px solid red",
        width: "40%",
        margin:"3rem",
    }
  return (
    <>
          <div className="container1 d-flex p-5" style={myStyle}>
        <div className="container1-Content w-30%" style={containerContent}>
          <h1  className="mb-5">UNLOCK YOUR SUCCESS WITH THE BEST SERVICES FOR STARTUPS</h1>
          <p className="mb-5">
            We help your business FLOURISH and RULE the market with our
            professional services for startups. We provide inclusive startup
            services to your every business demand, whether you are starting
            from scratch or expanding small businesses.
          </p>
          {/* <button className="GetStarted">ARE YOU STARTUP FOUNDER</button> */}
          {/* <Button/> */}
          <Button as="a" variant="primary" className="m-2">
            ARE YOU STARTUP FOUNDER
          </Button>
          <button className="watchnow">
            <img src="image/Vector (5).png" alt="" /> Watch now
          </button>
        </div>
        <div className="container1-img">
          <img src={img1} alt="" />
        </div>
      </div>
    </>
  );
};

export default Section1;
