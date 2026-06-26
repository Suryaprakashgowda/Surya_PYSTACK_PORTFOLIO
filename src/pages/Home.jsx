import React from "react";
import SuryaPIC from "../assets/SuryaPIC.jpeg";

const Home = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "#contact";
    }
  };

  return (
    <>
      <div className="parent">
        <div className="left">
          <h1>Hello, I'm</h1>
          <h1>Suryaprakashgowda H S</h1>
          <p>
            Motivated and detail-oriented Artificial Intelligence and Machine
            Learning graduate with experience in Python, Django, JavaScript,
            MySQL, API Integration, and Full Stack Development. Seeking a
            Software Engineer role where I can apply my technical skills,
            contribute to innovative projects, and grow as a technology
            professional.
          </p>
          <button onClick={handleContactClick}>Say Hello!</button>
        </div>
        <div className="right">
          <img src={SuryaPIC} alt="Suryaprakashgowda's portrait" />
        </div>
      </div>
    </>
  );
};

export default Home;
