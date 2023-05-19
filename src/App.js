import React from "react";
import "./App.css"
import Navbar from "./components/Header/Navbar";
import Service from "./section/HomeSection/Services";
import Section1 from "./section/HomeSection/Section-1";
import CompanyRegis from "./section/HomeSection/Section-2";
import LegalAndAccount from "./section/HomeSection/Section-3";
import DigitalMarketing from "./section/HomeSection/Section-4";
import AppDevelopement from "./section/HomeSection/Section-5";
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
      <CompanyRegis />
      <LegalAndAccount />
      <DigitalMarketing />
      <AppDevelopement />
      {/* <FundRaising />
      <StartupSupport />
      <StartupAcc />
      <Internship />
      <Blogs />
      <Contactus/> */}
    </>
  );
}

export default App;
