import React from "react";
import "./about.style.css";

const renderSeparator = () => (
  <div className="separator-container">
    <div className="separator"></div>
  </div>
);
const renderAboutSideBar = () => (
  <div className="about-side-wrapper">
    <div className="about-contact">
      <div className="info-container">
        <i className="fas fa-envelope"></i>
        <div>afxxxxx25@gmail.com</div>
      </div>
      <div className="info-container">
        <i className="fas fa-phone"></i>
        <div>+91 93xx xxxx 43</div>
      </div>
      <div className="info-container">
        <i className="fas fa-map-marker-alt"></i>
        <div>Bangalore, India</div>
      </div>
    </div>
    <div className="about-education">
      <div className="about-title">Education</div>
      <div className="about-description">
        <b>BACHELOR OF TECHNOLOGY</b>
        <br />
        <div className="title-secondary">
          <i>Mechanical Engineering</i>
        </div>
        Lakshmi Narain College of Technology, Bhopal, India
      </div>
    </div>
    <div className="about-hobbies">
      <div className="about-title">Hobbies</div>
      <div className="about-description">Reading Articles and Books</div>
      <div className="about-description">Playing Cricket</div>
      <div className="about-description">Teaching & Mentoring</div>
    </div>
    <div className="about-summary">
      <div className="about-title">Summary</div>
      <div className="about-description">
        A passionate developer, philomath, bringing 2+ years of experience in
        multiple Web Technologies and fostering relationships with clients,
        partners & team members. Proficient with front-end web development,
        learner of backend web-technologies, aspiring to be a proficient
        full-stack web development.
      </div>
    </div>
  </div>
);

const renderAboutMain = () => (
  <div className="about-main-wrapper">
    <div className="about-work-experience">
      <div className="about-title">Work Experience</div>
      <div className="experience-details">
        <div className="job-designation"> Software Engineer</div>
        <div className="organisation-name">Pep Systems Pvt Ltd</div>
        <div className="job-duration">
          <i>07/2023 - Present</i>
        </div>
        <div className="work-descriptions">
          <ul>
            <li>
              Added a standard component library to be utilized across multiple
              applications.
            </li>
            <li>
              Spearheaded feature additions, contributing to the project&apos;
              growth and functionality.
            </li>
            <li>
              Implemented cross-browser compatibility, achieving 100%
              accessibility across Edge, Chrome, Firefox, Opera, and upgrading
              features from Internet Explorer.
            </li>
            <li>Played a pivotal role in enhancing SEO for the project.</li>
            <li>
              Executed extensive code and asset refactoring, optimizing
              performance and maintainability.
            </li>
            <li>
              Successfully delivered projects before or on time, meeting client
              expectations.
            </li>
            <li>
              Utilized Perforce 4 for version control and CMS for efficient
              content management and many more.
            </li>
          </ul>
        </div>
      </div>
      {renderSeparator()}
      <div className="experience-details">
        <div className="job-designation">Software Engineer</div>
        <div className="organisation-name">Classic Informatics Pvt Ltd</div>
        <div className="job-duration">
          <i>03/2022 - 07/2023</i>
        </div>
        <div className="work-descriptions">
          <ul>
            <li>
              Contributed to multiple projects using React and Redux, enhancing
              overall user experience.
            </li>
            <li>
              Successfully added new features, addressing user needs and
              improving application functionality.
            </li>

            <li>
              Achieved significant performance improvements through optimization
              strategies.
            </li>
            <li>
              Removed unnecessary code, improving codebase readability and
              maintainability.
            </li>
            <li>
              Actively participated in sprint planning, estimation, and
              retrospective meetings.
            </li>
            <li>
              Worked collaboratively in an agile development environment,
              ensuring timely project delivery.
            </li>
            <li>
              Engaged in peer code reviews, providing constructive feedback and
              maintaining code quality.
            </li>
            <li>
              Actively participated in sprint planning, estimation, and
              retrospective meetings.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
const About = () => {
  return (
    <section id="about" className="about-wrapper">
      {renderAboutSideBar()}
      {renderAboutMain()}
    </section>
  );
};
export default About;
