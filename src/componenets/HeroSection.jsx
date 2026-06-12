import React from "react";
import "../styles/hero.css";

const HeroSection = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="Main-banner">
          <h1 className="banner-title">
           Senior Frontend Engineer building products that scale. <br />
            <span className="banner-name">Ayan Bhattacharya</span>
          </h1>
          <p className="banner-subtitle">
            6+ years building trading platforms, authentication systems,
            and scalable web applications used by millions of users.
          </p>
          <div className="hero-cta-container">
            <a target="_blank"
                    rel="noreferrer"
                    href="https://drive.google.com/file/d/1cq2kJaqEThZeFkV_U3RzhvLtCzDc5J2C/view?usp=sharing"
                   className="hero-cta">
              Check my Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
