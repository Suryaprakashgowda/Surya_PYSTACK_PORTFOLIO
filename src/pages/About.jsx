import React from "react";
import SuryaPIC from "../assets/SuryaPIC.jpeg";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="top">
          <img src={SuryaPIC} alt="Suryaprakashgowda H S profile" />
        </div>
        <div className="bottom">
          <h1>Hi, I am Suryaprakashgowda H S</h1>
          <h5>Software Engineer</h5>
          <p>
            I am an Artificial Intelligence and
            Machine Learning graduate with a strong passion for Software
            Development, Python Full Stack Development, and AI-powered
            solutions.
          </p>

          <p>
            I have hands-on experience in Python, Django, JavaScript,
            React.js, MySQL, REST APIs, and Machine Learning through academic
            projects and my internship at Pentagon Space. I have developed
            projects such as Healthify-ML, AI Career Coach (SENSAI), and
            Resume-Parsing-with-Goggle-Gemini-LLM, which helped me gain
            practical experience in building end-to-end applications.
          </p>

          <p>
            I enjoy solving real-world problems through technology, learning new
            tools and frameworks, and creating scalable, user-friendly software
            solutions. Currently, I am seeking opportunities as a Software
            Engineer, Python Developer, or Full Stack Developer where I can
            contribute, learn, and grow as a technology professional.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
