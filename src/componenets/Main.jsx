import React from "react";
import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Blogs from "./Blogs";
import Footer from "./Footer";
import Experience from "./Experience";

function Main() {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <Experience />
      <Projects />
      <Blogs />
      <Footer />
    </div>
  );
}

export default Main;
