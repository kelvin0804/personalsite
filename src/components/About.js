import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              Hi there! I'm Wen Kai, a passionate designer and developer with a love for creating
              beautiful and functional digital experiences.
            </p>
            <p>
              I specialize in web development and user interface design, combining technical
              expertise with creative problem-solving to build engaging applications.
            </p>
            <div className="skills">
              <h3>My Skills</h3>
              <ul className="skills-list">
                <li>Asp.net mvc</li>
                <li>C#</li>
                <li>.net framework</li>
                <li>.net core</li>
                <li>React.js</li>
                <li>JavaScript</li>
                <li>HTML/CSS</li>
                <li>MSSQL</li>
                <li>Responsive Design</li>
              </ul>
            </div>
          </div>
          <div className="about-image">
            {/* Add your image here */}
            <img src="/profile-image.jpg" alt="WK" className="profile-pic" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 