import React from "react";
import "./App.css"
import HeaderNavbar from "./components/Header";
import Service from "./section/HomeSection/Services";
import Section1 from "./section/HomeSection/Section-1";
import CompanyRegis from "./section/HomeSection/Section-2";
import LegalAndAccount from "./section/HomeSection/Section-3";
import DigitalMarketing from "./section/HomeSection/Section-4";
import AppDevelopement from "./section/HomeSection/Section-5";
import FundRaising from "./section/HomeSection/Section-6";
import StartupSupport from "./section/HomeSection/Section-7";
import StartupAccuisition from "./section/HomeSection/Section-8";
import Internship from "./section/HomeSection/Section-9";
import CoreValue from "./section/HomeSection/CoreValues";
import ContactUs from "./section/HomeSection/Section-10";
import Footer from "./section/HomeSection/Footer";
import Blogs from "./section/HomeSection/Blogs";



function App() {
  return (
    <>
      <HeaderNavbar />
      <Section1 />
      <Service />
      <CompanyRegis />
      <LegalAndAccount />
      <DigitalMarketing />
      <AppDevelopement />
      <FundRaising />
      <StartupSupport />
      <StartupAccuisition />
      <Internship />
      <CoreValue />
      <Blogs />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
