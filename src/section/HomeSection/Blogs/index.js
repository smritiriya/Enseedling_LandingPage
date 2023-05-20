import React from "react";
import color from "../../../constant";
import { BlogCardData } from "../../../config";
import  BlogCard  from "../../../components/Card/BlogCard"


function Blogs() {

 
  return (
    <>
      <div className="row d-flex justify-content-between m-0 pb-3" style={{border:"2px solid red"}}>
        <text
          className="Heading-1 text-center col-12 pt-2 pb-5"
          style={{ color: color.dark }}
        >
          Blogs
        </text>

        {BlogCardData.map((items) => {
              return <BlogCard data={items} />;
            })}
        {/* <div className="col-12 col-sm-6 col-md-4 col-lg-3 py-1">
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
        </div> */}
        
      </div>
      {/* </div> */}
    </>
  );
}

export default Blogs;
