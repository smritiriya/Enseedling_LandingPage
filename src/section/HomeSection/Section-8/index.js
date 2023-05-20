import React from "react";
import { pqr } from "../../../assets";
import color from "../../../constant";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsArrowRight  } from "react-icons/bs";

const StartupAccuisition = () => {
  
  return (
    <div className="row d-flex justify-content-between m-0 pb-3">
      <text
        className="Heading-1 text-center col-12 pt-2 pb-5"
        style={{ color: color.dark }}
      >
        "Others"
      </text>
      <div className="row m-0 py-3 px-2 d-flex justify-content-center align-items-center">
        <div className="col-12 col-lg-6 ps-0 ps-sm-4">
          <text className="Heading-1" style={{ color: color.dark }}>
            Startup Acquisition
          </text>
          <br />
          <text className="Text-1" style={{ color: color.grey }}>
            Professional fundraising assistance to help you unlock your business
            growth and achieve heights of success.
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
                Strategic planning and consultancy.
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
                Thorough market analysis to find potential investors.
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
                Tailored investment plans to fulfill your business goals.
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
                Maintenance of a track record of raising money for a variety of
                companies and sectors.
              </text>
            </li>
            <li className="py-3 row ps-3">
              <text
                className="Text-1-bold col-4 col-sm-2 col-lg-3 d-flex justify-content-center flex-column p-0"
                style={{ color: color.brightPurple }}
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
            src={pqr}
            alt=""
            className="img-fluid"
            style={{ widh: " 100%", maxHeight: "25rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default StartupAccuisition;
