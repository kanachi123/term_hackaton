import React from 'react';
import '../styles/index.css';
import '../styles/App.css';

export default function Home() {
  return (
    <main>
      <div className="presentation"></div>
      
      <div className="card">
        <h2>Welcome to Hackaton Platform</h2>
        <p>Join our community and showcase your skills!</p>
      </div>

      <div className="scrollable">
        <h4>Latest Hackathons</h4>
        <h4>Connect with Developers</h4>
        <h4>Build Amazing Projects</h4>
        <h4>Win Prizes</h4>
        <h4>Learn Together</h4>
        <h4>Network & Grow</h4>
        <h4>Share Your Ideas</h4>
        <h4>Collaborate</h4>
        <h4>Innovate</h4>
        <h4>Create Future</h4>
      </div>

    </main>
  );
}
