import React from "react";
import { logo, mno } from "../../../assets";
import color from "../../../constant";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
 import Button from "react-bootstrap/Button";
 import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

const ContactUs = () => {
  const left = {
    // border: "2px solid red",
    // width: "40%",
    // marginRight:"10%"
    paddingLeft:"10%"
  };
  const right = {
    paddingRight: "10%",
    boxShadow: " 0px 0px 8px rgba(0, 0, 0, 0.1)",
  };
  const list = {
    justifyContent: "center"
  };

  return (
    <div className="row m-0 py-5 px-1 mt-5 d-flex justify-content-center align-items-center ">
      <div className="col-12 col-lg-6 py-3 py-lg-0" style={left}>
        <ListGroup as="ol" className="border-0">
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <img src={logo} alt="" />
              <br />
              <h2>Get in Touch</h2>
            </div>
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              A platform that will simplify your business operations, <br />
              optimize inventory and drive growth with ease.
            </div>
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto bg-rgba(102, 65, 170, 0.11);">
              contact@enseedling.com{" "}
            </div>
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">+1 (478) 246-0224</div>
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">London, UK</div>
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div className="col-12 col-lg-6 " style={right}>
        <h1 className="text-center">Contact Us</h1>
        <Form style={{padding:"3rem"}}>
        
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Enter Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="email" placeholder="Enter Email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="numbre" placeholder="Enter Number" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="text" placeholder="Company Name" />
          </Form.Group>

          <Button variant="primary" type="submit" className="width:100%">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ContactUs;
