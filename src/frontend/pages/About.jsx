import React from 'react';
import '../styles/pages/About.css';
import Card from '../components/ui/Card';
const About = () => {
  return (
    <main>
      <Card style={{ color: '#ffffff' }}>
      <h1 style={{ color: '#ffffff' }}>About Hackaton</h1>
        <p style={{ color: '#ffffff' }}>We are a community dedicated to bringing together developers, designers, and innovators to create amazing projects.</p>
      </Card>

      <div className="card">
        <h2 style={{ color: '#ffffff' }}>Our Mission</h2>
        <p style={{ color: '#ffffff' }}>To foster innovation and collaboration through hackathons and tech events.</p>
      </div>

      <div className="card">
        <h2 style={{ color: '#ffffff' }}>Why Join Us?</h2>
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