import React from 'react';
import '../styles/pages/About.css';

const About = () => {
  return (
    <main>
      <div className="card">
        <h1>About Hackaton</h1>
        <p>We are a community dedicated to bringing together developers, designers, and innovators to create amazing projects.</p>
      </div>

      <div className="card">
        <h2>Our Mission</h2>
        <p>To foster innovation and collaboration through hackathons and tech events.</p>
      </div>

      <div className="card">
        <h2>Why Join Us?</h2>
        <ul>
          <li>Network with talented developers</li>
          <li>Build amazing projects</li>
          <li>Win prizes</li>
          <li>Learn new technologies</li>
        </ul>
      </div>
    </main>
  );
};

export default About;