import React from "react";
import { logo } from "../../assets";
import color from "../../constant";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
    const anchor = {
        textDecoration: "none",
        color: "#74757E"
    };
    const left = {
      // border: "2px solid red",
      // width: "30%",
      // marginRight:"10%"
      paddingLeft: "10%",
    };
    const right = {
      paddingRight: "2rem",
    };
    const list = {
      justifyContent: "center",
    };
    const footer2 = {
        background: "#6641AA",
        color: "white",
        
    };
    const footerAnchor={
        color: "white",
       textDecoration:"none" 
    }
    
    return (
      <footer className="page-footer font-small blue pt-4 mt-5">
        <div className="container-fluid text-center text-md-left">
          <div className="row" style={left}>
            <div className="col-md-6 mt-md-0 mt-3">
              <ListGroup as="ol" style={list} className="border-0">
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <img src={logo} alt="" />
                    <br />
                  </div>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    The one-stop solution to secure your business growth.
                  </div>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">BsInstagram</div>
                </ListGroup.Item>
              </ListGroup>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />
            <div className="col-md-3 mb-md-0 mb-3 text-start">
              <h5 className="text">Features</h5>
              <ul className="list-unstyled ">
                <li>
                  <a href="#!" style={anchor}>
                    Company Registration
                  </a>
                </li>
                <li>
                  <a href="#!" style={anchor}>
                    Legal and Accounting
                  </a>
                </li>
                <li>
                  <a href="#!" style={anchor}>
                    App Development
                  </a>
                </li>
                <li>
                  <a href="#!" style={anchor}>
                    Fund Raising
                  </a>
                </li>
                <li>
                  <a href="#!" style={anchor}>
                    After Launch Support
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 mb-md-0 mb-3 text-start">
              <h5 className="text">Quick links</h5>
              <ul className="list-unstyled ">
                <li>
                  <a href="#!" style={anchor}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#!" style={anchor}>
                    Blog
                  </a>
                </li>

                <li>
                  <a href="#!" style={anchor}>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#!" style={anchor}>
                    Terms and Condition
                  </a>
                </li>

                <li>
                  <a href="#!" style={anchor}>
                    Privacy and Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3" style={footer2}>
          © 2020 Copyright:
          <a href="https://mdbootstrap.com/" style={footerAnchor}>
            2023 Enseedling | All rights reserved
          </a>
        </div>
      </footer>
    );
};

export default Footer;
