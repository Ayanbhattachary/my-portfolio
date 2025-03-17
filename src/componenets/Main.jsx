import React from "react";
import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Blogs from "./Blogs";
import Footer from "./Footer";

function Main() {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <Projects />
      <Blogs />
      <Footer />
    </div>
  );
}

export default Main;
