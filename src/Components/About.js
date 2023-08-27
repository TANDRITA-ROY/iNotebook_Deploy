import React from "react";
import "./AboutPage.css";
import image from "./Me_Formal.jpg";

const About = () => {
  const developerName = "Tandrita Roy";
  const linkedinURL = "https://www.linkedin.com/in/tandrita-roy-4707bb179/";
  const githubURL = "https://github.com/TANDRITA-ROY";
  //const profilePictureURL = "https://www.example.com/profile-picture.jpg";
  const briefDescription =
    "Experienced frontend developer with 2 years of crafting seamless web experiences. Proficient in HTML, CSS, and JavaScript, I specialize in building responsive interfaces using React. I thrive in delivering intuitive and performance-driven solutions that elevate user engagement. Let's collaborate to create exceptional digital experiences.";
  const phoneNumber = "+91 6291408332";
  const emailAddress = "rimi0505roy@gmail.com";

  return (
    <>
      <div className="about-container">
        <div className="profile-section">
          <img
            src={image}
            alt={`${developerName}'s Profile`}
            className="profile-picture"
          />
          <h1>{developerName}</h1>
          <p className="description">{briefDescription}</p>
          <p className="contact-info">
            Phone: {phoneNumber}
            <br />
            Email: {emailAddress}
          </p>
        </div>
      </div>
      <footer className="footer">
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/tandrita-roy-4707bb179/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/TANDRITA-ROY"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </footer>
    </>
  );
};

export default About;
