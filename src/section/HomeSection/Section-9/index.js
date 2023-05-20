import React from "react";
import { mno } from "../../../assets";
import color from "../../../constant";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsArrowRight  } from "react-icons/bs";

const Internship = () => {
  return (
    <div className="row m-0 py-5 px-2 d-flex justify-content-center align-items-center">
      <div className="col-12 col-lg-6 py-3 py-lg-0">
        <img
          src={mno}
          alt=""
          className="img-fluid"
          style={{ widh: " 100%", maxHeight: "25rem" }}
        />
      </div>
      <div className="col-12 col-lg-6 ">
        <text className="Heading-1" style={{ color: color.dark }}>
          Internship Platform
        </text>
        <br />
        <text className="Text-1" style={{ color: color.grey }}>
          Give your career a push with Enseedling’s excellent internship
          programs.
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
              Get prepared for a high-income job with our courses.
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
              Learn the in-demand skills with us.
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
              Practice and hone your skills.
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
              Build an outstanding resume.
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
    </div>
  );
};

export default Internship;
