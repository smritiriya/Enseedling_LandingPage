import React from 'react'
import color from "../../../constant";
import { Cregister } from "../../../assets";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsArrowRight  } from "react-icons/bs";

const LegalAndAccount = () => {
    
  return (
    <div className="row m-0 py-5 px-2 d-flex justify-content-center align-items-center">
      <div className="col-12 col-lg-6 py-5 py-lg-0">
        <img
          src={Cregister}
          alt=""
          className="img-fluid"
          style={{ widh: " 100%", maxHeight: "25rem" }}
        />
      </div>
      <div className="col-12 col-lg-6 ps-0 ps-sm-4">
        <text className="Heading-1" style={{ color: color.dark }}>
        Legal and Accounting Services
        </text>
        <br />
        <text className="Text-1" style={{ color: color.grey }}>
        Take assistance from a trustworthy partner to handle your legal
        and  accounting needs.
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
              Register your company hassle-free wherever you wante
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
              Prepare your documents and identification.
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


export default LegalAndAccount;
