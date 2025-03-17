import React, { useEffect, useState } from "react";
import avatar from "../../public/images/avatar_2.svg";
import "../styles/hero.css";

const HeroSection = () => {
  const [greeting, setGreeting] = useState("");
  const [index, setIndex] = useState(0);
  const text =
    "Hi there, my name is Ayan Bhattacharya, and I always love building digital products at scale that solve real-world problems. Thank you for checking in.❤️";

  useEffect(() => {
    // Adjust avatar size dynamically
    const adjustAvatarSize = () => {
      const avatar = document.querySelector(".avatar");
      if (!avatar) return;
      const width = window.innerWidth;
      avatar.style.width =
        width > 1960 ? "250px" : width < 768 ? "100px" : "200px";
    };

    adjustAvatarSize();
    window.addEventListener("resize", adjustAvatarSize);

    // Start typewriter effect after a 3s delay
    const startTyping = setTimeout(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => {
          if (prevIndex < text.length) {
            return prevIndex + 1;
          } else {
            clearInterval(interval);
            return prevIndex;
          }
        });
      }, 30);
    }, 3000);

    return () => {
      window.removeEventListener("resize", adjustAvatarSize);
      clearTimeout(startTyping);
    };
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="Main-banner">
          <h1 className="banner-title">
            UI/UX Designer, Front-end Developer & Entrepreneur
          </h1>
          <p className="banner-subtitle">
            I design and code beautifully simple things. I'm highly skilled in
            optimizing work processes to enhance user experiences and deliver
            products that are easy to use and solve user problems.
          </p>
          <div className="avatar-animation">
            <img className="avatar avatar-desktop-1" src={avatar} alt="Profile Avatar" />
            <div className="greeting-message">
              <p className="greeting-text">{text.slice(0, index)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
