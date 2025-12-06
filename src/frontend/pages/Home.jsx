import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';
import '../styles/App.css';
import '../styles/pages/Home.css';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import CountdownTimer from '../components/CountdownTimer';

export default function Home() {
  // Mock data - текущие активные хакатоны
  const activeHackathons = [
    {
      id: 1,
      title: 'Spring 2024 Innovation Challenge',
      description: 'A 48-hour hackathon focused on building innovative solutions for modern problems.',
      endDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000 + 5 * 60 * 60 * 1000),
      participants: 245,
      maxParticipants: 500,
      categories: ['Web Development', 'AI/ML'],
      prize: '$10,000',
      image: '🌱'
    },
    {
      id: 2,
      title: 'Web Dev Marathon',
      description: 'A fast-paced 24-hour hackathon for web developers. Build responsive, modern web applications.',
      endDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000), // 1 день 3 часа
      participants: 320,
      maxParticipants: 400,
      categories: ['Web Development', 'Frontend'],
      prize: '$8,000',
      image: '💻'
    },
    {
      id: 3,
      title: 'AI Innovation Hackathon',
      description: 'Build AI-powered solutions that can change the world. Focus on machine learning, NLP, and computer vision.',
      endDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000 + 12 * 60 * 60 * 1000), // 3 дня 12 часов
      participants: 180,
      maxParticipants: 300,
      categories: ['AI/ML', 'Data Science'],
      prize: '$15,000',
      image: '🤖'
    },
    {
      id: 4,
      title: 'Mobile App Challenge',
      description: 'Design and develop mobile applications for iOS and Android platforms.',
      endDate: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000 + 8 * 60 * 60 * 1000), // 4 дня 8 часов
      participants: 95,
      maxParticipants: 250,
      categories: ['Mobile App', 'iOS', 'Android'],
      prize: '$9,000',
      image: '📱'
    }
  ];

  return (
    <main>
      <div className="presentation"></div>
      
      <Card style={{ color: '#ffffff' }}>
        <h2 style={{ color: '#ffffff' }}>Welcome to Hackamaka Platform</h2>
        <p style={{ color: '#ffffff' }}>Join our community and showcase your skills!</p>
      </Card>


      <Card style={{ color: '#ffffff' }}>
        <div className="flex justify-between items-center mb-lg">
          <h2 className="m-0">Active Hackathons</h2>
          <Link to="/hackathons">
            <Button className="pixel-button">View All</Button>
          </Link>
        </div>
        <p className="text-secondary mb-lg">
          Join ongoing hackathons and start building amazing projects!
        </p>

        <div className="hackathons-scroll-container">
          <div className="hackathons-scroll">
            {activeHackathons.map((hackathon) => (
              <div key={hackathon.id} className="hackathon-card-scroll">
                <div className="hackathon-card-header">
                  <div className="hackathon-icon-large">{hackathon.image}</div>
                  <span className="status-badge-active">Active Now</span>
                </div>

                <h3>{hackathon.title}</h3>
                <p className="hackathon-card-description">{hackathon.description}</p>

                <div className="countdown-section">
                  <div style={{ fontSize: '12px', color: '#6C5B7B', marginBottom: '8px', fontWeight: 'bold' }}>
                    Time Remaining:
                  </div>
                  <CountdownTimer endDate={hackathon.endDate} />
                </div>

                <div className="hackathon-card-details">
                  <div className="detail-row">
                    <strong>👥</strong> {hackathon.participants} / {hackathon.maxParticipants} participants
                  </div>
                  <div className="detail-row">
                    <strong>🏆</strong> {hackathon.prize} in prizes
                  </div>
                </div>

                <div className="hackathon-card-categories">
                  {hackathon.categories.map((category, index) => (
                    <span key={index} className="category-badge-small">{category}</span>
                  ))}
                </div>

                <Link to={`/hackathon/${hackathon.id}`} className="w-full" style={{ textDecoration: 'none' }}>
                  <Button className="pixel-button">
                    join
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Card>

      
    </main>
  );
}
