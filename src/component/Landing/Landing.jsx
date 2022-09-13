import React from "react";
// import { Routes, Route } from "react-router-dom";
import Header from "../Landing/Header/Header.jsx";
import Hero from "../Landing/Hero/Hero.jsx";
import About from "../Landing/About/About.jsx";
import Summary from "../Landing/Summary/Summary.jsx";
import Skills from "../Landing/Skills/Skills.jsx";
import Contact from "../Landing/Contact/Contact.jsx";

const Landing = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Summary />
      <Skills />
      <Contact />
    </>
  );
};

export default Landing;
