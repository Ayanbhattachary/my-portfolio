import React from "react";
import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Blogs from "./Blogs";
import Footer from "./Footer";
import Experience from "./Experience";
import Skills from "./Skills";

function Main() {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      {/* <Skills /> */}
      <Experience />
      <Projects />
      <Blogs />
      <Footer />
    </div>
  );
}

export default Main;
