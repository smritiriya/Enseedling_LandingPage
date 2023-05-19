import React from "react";
import { logo } from "../../assets";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import color from '../../constant'
import CommonButton from "../Button/CommonButton";

function HeaderNavbar() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="border-0 "   />
        <Navbar.Collapse id="responsive-navbar-nav row">
          <Nav className="col-lg-9 d-flex align-items-center justify-content-center ">
            <Nav.Link href="#features" className="Text-2" style={{color:color.dark}}>Home</Nav.Link>
            <NavDropdown title="Features" id="collasible-nav-dropdown" className="Text-2" style={{color:color.dark}}>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing" className="Text-2" style={{color:color.dark}}>About Us</Nav.Link>
            <Nav.Link href="#pricing" className="Text-2" style={{color:color.dark}}>Career </Nav.Link>
            <Nav.Link href="#pricing" className="Text-2" style={{color:color.dark}}>Investor Corner </Nav.Link>
          </Nav>
          <Nav className="col-lg-3 d-flex align-items-center justify-content-end">
            <Nav.Link href="#deets" className="Text-2" style={{color:color.dark}}>Log in </Nav.Link>
            <CommonButton
                      title="Contact Us"
                      background="transparent"
                      color={color.brightPurple}
                      width={"auto"}
                      height={"2rem"}
                      border='2px solid '
                      borderColor={color.brightPurple}
                    />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     
    );
}


export default HeaderNavbar;