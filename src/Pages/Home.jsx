import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Experience from "../components/Experience";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Home;
