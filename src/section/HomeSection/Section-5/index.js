import React from "react";
import { ghi } from "../../../assets";
import color from "../../../constant";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsArrowRight  } from "react-icons/bs";

const AppDevelopement = () => {
 

  return (
    <div className="row m-0 py-5 px-2 d-flex justify-content-center align-items-center">
      <div className="col-12 col-lg-6 py-3 py-lg-0">
        <img
          src={ghi}
          alt=""
          className="img-fluid"
          style={{ widh: " 100%", maxHeight: "25rem" }}
        />
      </div>
      <div className="col-12 col-lg-6 ">
        <text className="Heading-1" style={{ color: color.dark }}>
        App Developement Services
        </text>
        <br />
        <text className="Text-1" style={{ color: color.grey }}>
        Boost your business with our terrific application development //
        services. Turn your ideas into reality with us.
        </text>
        <ul className="p-0">
          <li className="py-1 row">
            <span className="col-1 col-sm-1 col-md-1 d-flex justify-content-center flex-column">
              <AiFillCheckCircle
                className="p-0"
                style={{ color: color.brightPurple }}
              />
            </span>
            <text
              className="Text-1 col-9 col-sm-10 col-md-9 d-flex justify-content-center flex-column"
              style={{ color: color.grey }}
            >
              Quick App Deployment At Lower Cost.
            </text>
          </li>
          <li className="py-1 row">
            <span className="col-1 col-sm-1 col-md-1 d-flex justify-content-center flex-column">
              <AiFillCheckCircle
                className="p-0"
                style={{ color: color.brightPurple }}
              />
            </span>
            <text
              className="Text-1 col-9 col-sm-10 col-md-9 d-flex justify-content-center flex-column"
              style={{ color: color.grey }}
            >
              User- Experience Centric Development. 
            </text>
          </li>
          <li className="py-1 row">
            <span className="col-1 col-sm-1 col-md-1 d-flex justify-content-center flex-column">
              <AiFillCheckCircle
                className="p-0"
                style={{ color: color.brightPurple }}
              />
            </span>
            <text
              className="Text-1 col-9 col-sm-10 col-md-9 d-flex justify-content-center flex-column"
              style={{ color: color.grey }}
            >
              Pick the most effective company structure.
            </text>
          </li>
          <li className="py-1 row">
            <span className="col-1 col-sm-1 col-md-1 d-flex justify-content-center flex-column">
              <AiFillCheckCircle
                className="p-0"
                style={{ color: color.brightPurple }}
              />
            </span>
            <text
              className="Text-1 col-9 col-sm-10 col-md-9 d-flex justify-content-center flex-column"
              style={{ color: color.grey }}
            >
              Get the correct permits and licenses.
            </text>
          </li>
          <li className="py-3 row ps-3">
            
            <text
              className="Text-1-bold col-4 col-sm-2 col-lg-3 d-flex justify-content-center flex-column p-0"
              style={{ color: color.brightPurple, }}
            >
                learn more
            </text>
            <span className="col-1  d-flex justify-content-center flex-column">
              <BsArrowRight
                className="p-0"
                style={{ color: color.brightPurple }}
              />
            </span>
          </li>
        </ul>
      </div>
    </div>
    
  );
};

export default AppDevelopement;
