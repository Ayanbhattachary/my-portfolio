import React from "react";
import "../styles/projects.css";
import ProjectHeader from "./SectionHeader";
import ProjectDetails from "./ProjectDetails";
import jobeneur from "../../public/images/jobeneur_1.PNG";
import connect from "../../public/images/ConnectMe_1.PNG";
import sorting from "../../public/images/sorting_1.PNG";
import amazon from "../../public/images/Amazon_1.PNG";
import lineup from "../../public/images/lineup_1.PNG";
import weather from "../../public/images/weather_1.PNG";

function Projects() {
  return (
    <>
      <div>
        <ProjectHeader
          heading="Some of my work"
          subheading="Writing scalable codes and building interactive UI's is what I love to do
       "
          navigatetext="Check out my Github"
          urldata="https://github.com/Ayan6174877"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="project-section">
            <ProjectDetails
              link="https://www.linkedin.com/company/30989989/admin/"
              src={jobeneur}
              title="Jobeneur"
              details="A tech Startup built for
               white and blue collar professionals, where we were
                making conversations more meaningful and easy
                between communities from various backgrounds
                sharing similar career interests, So that everyone can
                grow and move ahead in their career."
              tech={[
                "Angular",
                "Node",
                "React",
                "TypeScript",
                "Material-UI",
                "Python",
                "Heroku",
                "AWS",
              ]}
            />

            <ProjectDetails
              link="https://github.com/Ayan6174877/Sorting_visualizer"
              src={sorting}
              title="Sorting Visualizer"
              details="A sorting visualizer app built to sort arrays of different random sizes using Merge sort, Quick sort, Selection sort, Insertion sort, and Bubble sort and visualize it to make it more interactive."
              tech={["React", "JavaScript (ES6)"]}
            />
            <ProjectDetails
              link="https://github.com/Ayan6174877/ConnectMe"
              src={connect}
              title="ConnectMe"
              details="A content discovery platform with all the feature of social network, for people to connect with each other and discover things about related to their passion and hobbies. Some of the core feature included feed, people search, profile, chat and much more."
              tech={[
                "ASP.NET core",
                "CSharp",
                "HTML",
                "CSS",
                "JavaScript",
                "SQL Server",
                "GCP",
                "Bootstrap",
              ]}
            />

            <ProjectDetails
              link="https://github.com/Ayan6174877/amazon_clone"
              src={amazon}
              title="Amazon Clone"
              details="Built an amazon clone web app with the help of firebase for authentication, React and context API."
              tech={[
                "React",
                "Material-UI",
                "JavaScript",
                "CSS",
                "Context API",
                "Firebase",
              ]}
            />

            <ProjectDetails
              link="https://github.com/Ayan6174877/LineUp"
              src={lineup}
              title="LineUp"
              details="Lineup helps anyone to create and manage work and personal tasks effectively."
              tech={[
                "React",
                "Redux",
                "JavaScript",
                "Material-UI",
                "CSS",
                "Local storage",
              ]}
            />

            <ProjectDetails
              link="https://github.com/Ayan6174877/weather_App"
              src={weather}
              title="Weather App"
              details="A weather web app which shows live weather conditions like - humidity, temperature, wind speed, pressure and more for the next 7 days using OneWeatherApp API. The background also changes based on the day timings and weather conditions."
              tech={[
                "Node",
                "React",
                "Express",
                "Material-UI",
                "Opensource API",
                "moment.js",
                "JQeury",
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
