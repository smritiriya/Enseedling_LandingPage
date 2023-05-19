import React from "react";
import { def } from "../../../assets";
import color from "../../../constant";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsArrowRight  } from "react-icons/bs";

const DigitalMarketing = () => {
  
  return (
    <div className="row m-0 py-3 px-2 d-flex justify-content-center align-items-center">
      <div className="col-12 col-lg-6 ps-0 ps-sm-4">
        <text className="Heading-1" style={{ color: color.dark }}>
        Digital Marketing
        </text>
        <br />
        <text className="Text-1" style={{ color: color.grey }}>
        Boost your business with our digital marketing services and thrive
        and rule the online market.
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
              Generate A Pipeline Of Leads Online
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
              Establish A Solid Grip Over Social Media Platforms.
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
              Online Authority Building With Strong Personal Branding.
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
              Boost Your Sales With The Proven Strategies Curated By Our
              Experts.
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

      <div className="col-12 col-lg-6">
        <img
          src={def}
          alt=""
          className="img-fluid"
          style={{ widh: " 100%", maxHeight: "25rem" }}
        />
      </div>
    </div>
    

  );
};

export default DigitalMarketing;
