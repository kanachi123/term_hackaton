import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/HackatonPage.css';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const HackatonPage = () => {
  return (
    <main>
      <Card>
        <h1>Hackathon Platform</h1>
        <p>Welcome to Hackamaka - Your gateway to amazing hackathons!</p>
      </Card>

      <Card>
        <h2>Quick Actions</h2>
        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          <Link to="/hackathons">
            <Button>Browse Hackathons</Button>
          </Link>
          <Link to="/create-hackathon">
            <Button>Create Hackathon</Button>
          </Link>
          <Link to="/leaderboard">
            <Button>View Leaderboard</Button>
          </Link>
        </div>
      </Card>

      <Card>
        <h2>Featured Hackathons</h2>
        <p>Check out our most popular hackathons happening now!</p>
        <Link to="/hackathons">
          <Button style={{ marginTop: '15px' }}>View All Hackathons →</Button>
        </Link>
      </Card>
    </main>
  );
};

export default HackatonPage;

