import React from "react";
import { Button, Container } from "react-bootstrap";
import { img1 } from "../assets";

const Section1 = () => {
     const myStyle = {
        //  border: "2px solid black",
       justifyContent: "space-between",
       padding: "4rem",
      //  margin: "0",
      //  width:"100%"
    };
  const containerContent = {
    // border: "2px solid red",
    // width: "50%",
  };
  const ContainerImg = {
    //  border: "2px solid green",
   
  }
  
  return (
    // <>
    //       <div className="container  p-5" style={myStyle}>
    //     <div className=" container1-Content w-30%" style={containerContent}>
    //       <h1  className="mb-5">UNLOCK YOUR SUCCESS WITH THE BEST SERVICES FOR STARTUPS</h1>
    //       <p className="mb-5">
    //         We help your business FLOURISH and RULE the market with our
    //         professional services for startups. We provide inclusive startup
    //         services to your every business demand, whether you are starting
    //         from scratch or expanding small businesses.
    //       </p>
    //       {/* <button className="GetStarted">ARE YOU STARTUP FOUNDER</button> */}
    //       {/* <Button/> */}
    //       <Button as="a" variant="primary" className="m-2">
    //         ARE YOU STARTUP FOUNDER
    //       </Button>
    //       <button className="watchnow">
    //         <img src="image/Vector (5).png" alt="" /> Watch now
    //       </button>
    //     </div>
    //     <div className="container1-img">
    //       <img src={img1} alt="" />
    //     </div>
    //   </div>
    // </>

    <>
      <div className="container" style={myStyle}>
        <div className="row justify-content-center ">
          <div className="col-12 col-lg-6" style={containerContent}>
            <h1 className="mb-5">
              UNLOCK YOUR SUCCESS WITH THE BEST SERVICES FOR STARTUPS
            </h1>

            <p className="mb-5">
              We help your business FLOURISH and RULE the market with our
              professional services for startups. We provide inclusive startup
              services to your every business demand, whether you are starting
              from scratch or expanding small businesses.
            </p>
            <Button className="m-2">ARE YOU STARTUP FOUNDER</Button>
            <Button className="m-2">Watch now</Button>
          </div>
          <div className="col-12 col-lg-6 " style={ContainerImg}>
            <img src={img1} alt="" srcset="" style={{ widh:" 100%", height:"30rem"}}/>
          </div>
        </div>
      </div>
    </>

  );
};

export default Section1;
