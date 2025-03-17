import React from "react";
import "../styles/blogs.css";
import BlogHeader from "./SectionHeader";

function Projects() {
  return (
    <>
      <div>
        <BlogHeader
          heading="Blogs"
          navigatetext="Check out my Github"
          urldata="https://github.com/Ayan6174877"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="blog-panel">
            <div class="blog-details-panel">
              <h1>Building your first Minimum viable product</h1>
              <p>
                Today, we all are very much familiar with the word MVP or
                minimum viable product. Startup founders and businesses use it
                almost every day in their day-to-day lives. But, for Those who
                are not familiar with this jargon..
              </p>
              <a
                href="https://medium.com/@bhattacharya.ayan/building-your-first-minimum-viable-product-48381ca35638"
                target="_blank"
                rel="noreferrer"
                className="blog-link"
              >
                Read about this article
                <svg viewBox="0 0 24 24">
                  <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
                </svg>
              </a>
            </div>
            <div class="blog-img-panel">
              <img
                alt="MVP Image"
                src="https://thestartupfactory.tech/wp-content/uploads/2020/11/1_J1mb7rDqd5pbtfCTHU1RGQ.png"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
