import React from "react";
import color from "../../../constant";
import { Rectangle, Vec, Vector, Vector1, Vector2 } from "../../../assets";

function Blogs() {

   const carde = {
    //  color: "#6641AA",
    //  fontWeight: "800",
     border: "none",
     height:"60vh",
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
  const image = {
    width:"20rem",
    heigh:"20rem"
  }
 
  return (
    <>
      <div className="row d-flex justify-content-between m-0 pb-3">
        <text
          className="Heading-1 text-center col-12 pt-2 pb-5"
          style={{ color: color.dark }}
        >
          Blogs
        </text>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3 py-1">
          <div
            className="card d-flex justify-content-center align-items-center"
            style={carde}
          >
            <div className="icon">
              <img src={Rectangle} alt="icon" style={image} />
            </div>
            <text className="Heading-3 text-center" style={topic}>
              Transparency and <br /> accountability
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
            <div className="icon">
              <img src={Rectangle} alt="icon" style={image} />
            </div>
            <text className="Heading-3 text-center" style={topic}>
              Transparency and <br /> accountability
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
            <div className="icon">
              <img src={Rectangle} alt="icon" style={image} />
            </div>
            <text className="Heading-3 text-center" style={topic}>
              Transparency and <br /> accountability
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
            <div className="icon">
              <img src={Rectangle} alt="icon" style={image} />
            </div>
            <text className="Heading-3 text-center" style={topic}>
              Transparency and <br /> accountability
            </text>
            <p className="heading-6 text-center" style={para}>
              We respect your privacy and are committed to securing the
              confidentiality of your information. We make sure your information
              is safe with us.
            </p>
          </div>
        </div>
        
      </div>
      {/* </div> */}
    </>
  );
}

export default Blogs;
