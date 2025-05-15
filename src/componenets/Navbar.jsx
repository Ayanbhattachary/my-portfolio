import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/navbar.css";

function toggleTheme() {
  document.body.classList.toggle("dark");
  let isDarkMode = document.body.classList.contains("dark");
  localStorage.setItem("darkMode", isDarkMode);
}

function Navbar() {
  return (
    <div className="sticky">
      <div className="navbar">
        <div className="navbar-container">
          <svg className="portfolio-logo" viewBox="0 0 24 24">
            <path d="M3,5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5M5,5V19H19V5H5M11,7H13A2,2 0 0,1 15,9V17H13V13H11V17H9V9A2,2 0 0,1 11,7M11,9V11H13V9H11Z" />
          </svg>
          <div className="navigation navigation-right">
            <div className="hide-nav-mobile">
              <nav>
                <ul>
                  {/* <NavLink exact to="/profile" activeClassName="active-nav">
                    <li>Profile</li>
                  </NavLink> */}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://drive.google.com/file/d/1dflL5tHp1DXhe_lcGpV7AmLkMEffE0m9/view"
                  >
                    <li>Resume</li>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://medium.com/@bhattacharya.ayan"
                  >
                    <li>Blog</li>
                  </a>
                  {/* <li>
                    <svg
                      className="navbar-svg"
                      onClick={toggleTheme}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12,6A6,6 0 0,1 18,12C18,14.22 16.79,16.16 15,17.2V19A1,1 0 0,1 14,20H10A1,1 0 0,1 9,19V17.2C7.21,16.16 6,14.22 6,12A6,6 0 0,1 12,6M14,21V22A1,1 0 0,1 13,23H11A1,1 0 0,1 10,22V21H14M20,11H23V13H20V11M1,11H4V13H1V11M13,1V4H11V1H13M4.92,3.5L7.05,5.64L5.63,7.05L3.5,4.93L4.92,3.5M16.95,5.63L19.07,3.5L20.5,4.93L18.37,7.05L16.95,5.63Z" />
                    </svg>
                  </li> */}
                </ul>
              </nav>
            </div>
            {/* <ul className="nav-handler">
              <li>
                <svg className="option-icon" viewBox="0 0 24 24">
                  <path d="M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z" />
                </svg>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
