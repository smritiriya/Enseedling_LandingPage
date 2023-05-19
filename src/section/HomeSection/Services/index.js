import React from "react";
import color from "../../../constant";

function Service() {

   const carde = {
     background: "#EBEBEB",
     color: "#6641AA",
     fontWeight: "800",
     border: "none",
     height:"25vh",
     textAlign: "center",
     fontSize: "20px",
     fontWeight: "700",
     borderRadius: "5px",
    
  
  };
 
  return (
    
    <>
      <div className="row d-flex justify-content-between m-0 pb-3" >
        <text className="Heading-1 text-center col-12 pt-2 pb-5" 
        style={{color:color.dark}}>Services</text>
        
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 py-1" >
        <div className="card d-flex justify-content-center align-items-center" style={carde}>
          <text className="Heading-1 text-center">
              Fund Raising <br /> Service
          </text>
        </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 py-1" >
        <div className="card d-flex justify-content-center align-items-center" style={carde}>
          <text className="Heading-1 text-center">
              Fund Raising <br /> Service
          </text>
        </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 py-1" >
        <div className="card d-flex justify-content-center align-items-center" style={carde}>
          <text className="Heading-1 text-center">
              Fund Raising <br /> Service
          </text>
        </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 py-1" >
        <div className="card d-flex justify-content-center align-items-center" style={carde}>
          <text className="Heading-1 text-center">
              Fund Raising <br /> Service
          </text>
        </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 py-1" >
        <div className="card d-flex justify-content-center align-items-center" style={carde}>
          <text className="Heading-1 text-center">
              Fund Raising <br /> Service
          </text>
        </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 py-1" >
        <div className="card d-flex justify-content-center align-items-center" style={carde}>
          <text className="Heading-1 text-center">
              Fund Raising <br /> Service
          </text>
        </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 py-1" >
        <div className="card d-flex justify-content-center align-items-center" style={carde}>
          <text className="Heading-1 text-center">
              Fund Raising <br /> Service
          </text>
        </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 py-1" >
        <div className="card d-flex justify-content-center align-items-center" style={carde}>
          <text className="Heading-1 text-center">
              Fund Raising <br /> Service
          </text>
        </div>
        </div>
        

       
      </div>
      {/* </div> */}
    </>
  );
}

export default Service;
