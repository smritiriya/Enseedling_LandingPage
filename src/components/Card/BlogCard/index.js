import React from 'react'

function BlogCards({data}) {

    const carde = {
        //  color: "#6641AA",
        //  fontWeight: "800",
         border: "none",
        //  width:"100%",
        //  height:"60vh",
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
        width:"100%",
        heigh:"20rem"
      }
      
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 py-1" key={data?.key}>
          <div
            className="card d-flex justify-content-center align-items-center"
            style={carde}
          >
            <div className="icon">
              <img src={data?.image} alt="icon" style={image} className="img-f"/>
            </div>
            <text className="Heading-3 text-center" style={topic}>
              {data?.title}
            </text>
            <p className="heading-6 text-center" style={para}>
            {data?.desc}
            </p>
          </div>
        </div>
  )
}

export default BlogCards