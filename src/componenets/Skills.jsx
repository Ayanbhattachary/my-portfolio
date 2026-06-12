import React from "react";
import SectionHeader from "./SectionHeader";
import "../styles/skills.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Engineering",
      skills: ["React", "JavaScript (ES6)", "TypeScript", "Redux", "HTML5 & CSS3", "SCSS", "Tailwind CSS", "Material-UI", "Bootstrap"]
    },
    {
      title: "Backend & Cloud",
      skills: ["Node.js", "Express.js", "Python", "SQL", "REST APIs", "Firebase", "Authentication (OAuth, Passkeys)"]
    },
    {
      title: "Design & Tooling",
      skills: ["Git & GitHub", "Adobe XD", "Figma", "Photoshop", "Jest & Playwright", "Storybook", "CI/CD"]
    },
    {
      title: "Product & Strategy",
      skills: ["Product Management", "Entrepreneurship", "System Architecture", "UX/UI Design Principles"]
    }
  ];

  return (
    <>
      <SectionHeader heading="Skills & Expertise" navigatetext="" urldata="" />
      <section className="skills-section">
        <div className="container">
          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <div key={index} className="skills-card">
                <h3 className="skills-category-title">{category.title}</h3>
                <div className="skills-tags-container">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
