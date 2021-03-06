import React from "react";
import "./About.css";
import resume from "../../Images/SundaraVadivu_R.pdf";
import { InfoContainer } from "./AboutElements";
function About() {
  return (
    <>
      <InfoContainer lightBg={false} id="about">
        <h1 className="logo-text text-center py-md-5 py-xs-5">About Me</h1>
        <div className="row">
         
          <div className="col-md-6 col-sm-12" data-aos="fade-left">
            <p>
              I'm a passionate Full stack developer with the goal of working on
              a project that solves problems with thoughtful UI design, creating
              intuitive, dynamic user experiences powered by strong backend. I
              primarily work with MERN stack among the full stack technologies.
              The satisfaction that I get while working and completing every
              project made me do more and more. And I believe, I have did
              something creatively.
            </p>

            <a
              className="btn btn-sm btn-success mt-3"
              rel="noreferrer"
              href={resume}
              
              target="_blank"
              download
            >
              Download <i className="fad fa-download"></i>
            </a>
          </div>
        </div>
      
      </InfoContainer>
    </>
  );
}

export default About;