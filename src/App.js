import React from "react";
import "./App.css"
import Navbar from "./components/Header/Navbar";
import Service from "./section/HomeSection/Services";
import Section1 from "./section/HomeSection/Section-1";
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
      <Section1 />
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
