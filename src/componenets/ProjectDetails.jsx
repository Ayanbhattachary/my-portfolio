import React from "react";

function ProjectDetails(props) {
  return (
    <>
      <div class="project-data">
        <div className="project-screenshot">
          <img src={props.src} alt="none" />
        </div>
        <div class="project-details">
          <h3 className="project-title">{props.title}</h3>
          <p className="project-description">{props.details}</p>
          <div className="technologies">
            {props.tech.map((elements) => {
              return <span className="technologies-used">{elements}</span>;
            })}
          </div>
          <br></br>
          <a
            target="_blank"
            rel="noreferrer"
            className="project-link"
            href={props.link}
          >
            Check out the Project
            <svg viewBox="0 0 24 24">
              <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}

export default ProjectDetails;
