import React from "react";

function Service() {
   const cardstyle = {
     background: "#EBEBEB",
     color: "#6641AA",
     fontWeight: "800",
     border: "none",
     width: "15%",
    //  margin: "2rem",
     textAlign: "center",
     fontSize: "20px",
    //  padding: "4rem",
     fontWeight: "700",
     borderRadius: "5px",
    
  
  };
  const row = {
    // border: "2px solid  red",
    // padding: "4rem",
  };
 
  return (
    // <div className="card-deck ">
    //   <h2 className="text-center">"Our Services"</h2>

    //   <div className="card-deck d-flex justify-content-center p-2">
    //     <div className="card w-23 m-4 p-4" style={cardstyle}>
    //       <div className="card-body text-center">
    //         <h2 className="card-title">
    //           Company <br /> Registration
    //         </h2>
    //       </div>
    //     </div>
    //     <div className="card  w-23  m-4 p-4" style={cardstyle}>
    //       <div className="card-body text-center">
    //         <h2 className="card-title">
    //           Legal and <br /> Accounting <br /> Services
    //         </h2>
    //       </div>
    //     </div>
    //     <div className="card w-23  m-4 p-4" style={cardstyle}>
    //       <div className="card-body text-center">
    //         <h2 className="card-title">
    //           Digital <br /> Marketing
    //         </h2>
    //       </div>
    //     </div>
    //     <div className="card w-23  m-4 p-4" style={cardstyle}>
    //       <div className="card-body text-center">
    //         <h2 className="card-title">
    //           App <br /> Development <br /> Service
    //         </h2>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="card-deck d-flex justify-content-center p-2">
    //     <div className="card w-23 m-4 p-4" style={cardstyle}>
    //       <div className="card-body text-center">
    //         <h2 className="card-title">
    //           Fund Raising <br /> Service
    //         </h2>
    //       </div>
    //     </div>
    //     <div className="card  w-23  m-4 p-4" style={cardstyle}>
    //       <div className="card-body text-center">
    //         <h2 className="card-title">
    //           Start Up <br /> Support
    //         </h2>
    //       </div>
    //     </div>
    //     <div className="card w-23  m-4 p-4" style={cardstyle}>
    //       <div className="card-body text-center">
    //         <h2 className="card-title">
    //           Startup <br /> Acquisition
    //         </h2>
    //       </div>
    //     </div>
    //     <div className="card w-23  m-4 p-4 " style={cardstyle}>
    //       <div className="card-body text-center">
    //         <h2 className="card-title">
    //           Internship <br /> Platform
    //         </h2>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <>
      <div class="row p-3 d-flex justify-content-center" style={row}>
        <h1 className="text-center">Services</h1>
        <div class="col col-md-4 col-lg-3" style={cardstyle}>
          Company <br /> Registration
        </div>
        <div class="col col-md-4 col-lg-3 " style={cardstyle}>
          Legal and <br /> Accounting <br /> Services
        </div>
        <div class="col col-md-4 col-lg-3 " style={cardstyle}>
          Digital <br /> Marketing
        </div>
        <div class="col col-md-4 col-lg-3 " style={cardstyle}>
          App <br /> Development <br /> Service
        </div>
        <div class="col col-md-4 col-lg-3" style={cardstyle}>
          Company <br /> Registration
        </div>
        <div class="col col-md-4 col-lg-3 " style={cardstyle}>
          Legal and <br /> Accounting <br /> Services
        </div>
        <div class="col  col-md-4 col-lg-3 " style={cardstyle}>
          Digital <br /> Marketing
        </div>
        <div class="col  col-md-4 col-lg-3 " style={cardstyle}>
          App <br /> Development <br /> Service
        </div>

       
      </div>
      {/* </div> */}
    </>
  );
}

export default Service;
