import React from "react";
import "../styles/sectionheader.css";
import { Link } from "react-router-dom";

function SectionHeader(props) {
  return (
    <div className="section-header">
      <h1>{props.heading}</h1>
      <p>{props.subheading}</p>
    </div>
  );
}

export default SectionHeader;
