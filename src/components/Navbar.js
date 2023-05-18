import React from "react";
import { logo } from "../assets";



function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg  p-4 ">
        <div className="container-fluid">
          <img src={logo} alt="logo" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-around"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Career
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Investor corner
                </a>
              </li>
             
              
            </ul>
            <form className="d-flex" role="search">
              {/* <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              /> */}

              <ul className="navbar-nav ">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Login
                  </a>
                </li>
                <button className="btn btn-outline-info" type="submit">
                  Search
                </button>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    );
}


export default Navbar;