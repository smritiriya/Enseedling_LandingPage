import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar";
import Service from "./components/Services/Service";
import Section1 from "./components/Section1";
import CompanyRegis from "./components/CompanyRegis";
import LegalAndAccount from "./components/LegalAndAccount";
import DigitalMarketing from "./components/DigitalMarketing";
import AppDevelopement from "./components/AppDevelopement";
import FundRaising from "./components/FundRaising";
import StartupSupport from "./components/StartupSupport";
import StartupAcc from "./components/StartupAccuisition";
import Internship from "./components/Internship";
import Blogs from "./components/Blogs";
import Contactus from "./components/Contactus";


function App() {
  return (
    <>
      <Navbar />
      {/* <Section1 /> */}
      <Service />
      {/* <CompanyRegis />
      <LegalAndAccount />
      <DigitalMarketing />
      <AppDevelopement />
      <FundRaising />
      <StartupSupport />
      <StartupAcc />
      <Internship />
      <Blogs />
      <Contactus/> */}
    </>
  );
}

export default App;
