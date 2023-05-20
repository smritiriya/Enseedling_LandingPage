import React from "react";
import color from "../../../constant";
import { Vec, Vector, Vector1, Vector2 } from "../../../assets";

function CoreValue() {

   const carde = {
    //  color: "#6641AA",
    //  fontWeight: "800",
     border: "none",
     height:"40vh",
     textAlign: "center",
     borderRadius: "5px",
    //  border: "1px solid gray",
     padding: "10px",
     boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
  
   };
  const topic = {
    fontWeight: "600",
    fontSize: "20px",
    color: "black",
     margin:"5px"
  };
  const iconDiv = {
    padding: "20px",
    borderRadius: "50%",
    background: "#C9C4D3",

  };
  const para = {
    color: "#74757E;",
  };
 
  return (
    <>
      <div className="row d-flex justify-content-between m-0 pb-3">
        <text
          className="Heading-1 text-center col-12 pt-2 pb-5"
          style={{ color: color.dark }}
        >
          Our Core Values
        </text>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3 py-1">
          <div
            className="card d-flex justify-content-center align-items-center"
            style={carde}
          >
            <div className="icon" style={iconDiv}>
              <img src={Vector1} alt="icon" />
            </div>
            <text className="Heading-3 text-center" style={topic}>
              Client confidentiality
            </text>
            <p className="heading-6 text-center" style={para}>
              We respect your privacy and are committed to securing the
              confidentiality of your information. We make sure your information
              is safe with us.
            </p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 py-1">
          <div
            className="card d-flex justify-content-center align-items-center"
            style={carde}
          >
            <div className="icon" style={iconDiv}>
              <img src={Vector2} alt="icon" />
            </div>
            <text className="Heading-3 text-center" style={topic}>
              Transparency and <br /> accountability
            </text>
            <p className="heading-6 text-center" style={para}>
              We maintain sheer transparency with you about our work. You can
              always check the progress, improvise, and get updates from the
              team.
            </p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 py-1">
          <div
            className="card d-flex justify-content-center align-items-center"
            style={carde}
          >
            <div className="icon" style={iconDiv}>
              <img src={Vector} alt="icon" />
            </div>
            <text className="Heading-3 text-center" style={topic}>
              Cost efficiency
            </text>
            <p className="heading-6 text-center" style={para}>
              Running out of cash is one of the primary reasons for startup
              failure. We aim to cut your costs through our affordable services
              without compromising on quality.
            </p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 py-1">
          <div
            className="card d-flex justify-content-center align-items-center"
            style={carde}
          >
            <div className="icon" style={iconDiv}>
              <img src={Vec} alt="icon" />
            </div>
            <text className="Heading-3 text-center" style={topic}>
              Best Partnerships
            </text>
            <p className="heading-6 text-center" style={para}>
              With a strong global network, we help you connect to top-tier
              organizations and industry experts.
            </p>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default CoreValue;
