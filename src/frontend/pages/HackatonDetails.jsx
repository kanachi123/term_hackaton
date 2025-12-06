import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/pages/HackatonDetails.css';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const HackatonDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data - in real app, fetch based on id
  const hackathon = {
    id: parseInt(id) || 1,
    title: 'Spring 2024 Innovation Challenge',
    description: 'A 48-hour hackathon focused on building innovative solutions for modern problems using cutting-edge technologies. Join us for an exciting weekend of coding, collaboration, and innovation!',
    longDescription: `This hackathon brings together developers, designers, and innovators from around the world to tackle real-world challenges. Whether you're a beginner or an experienced developer, there's something for everyone.

We're looking for projects that demonstrate creativity, technical excellence, and real-world impact. Participants will have access to mentorship, workshops, and networking opportunities throughout the event.`,
    startDate: '2024-03-15T09:00:00',
    endDate: '2024-03-17T17:00:00',
    location: 'Online',
    locationDetails: 'Join from anywhere in the world via our virtual platform',
    maxParticipants: 500,
    currentParticipants: 245,
    maxTeamSize: 5,
    minTeamSize: 1,
    categories: ['Web Development', 'AI/ML', 'Mobile App'],
    prizes: [
      { place: '1st Place', amount: '$5,000', description: 'Grand prize for the winning team' },
      { place: '2nd Place', amount: '$3,000', description: 'Second place prize' },
      { place: '3rd Place', amount: '$2,000', description: 'Third place prize' },
      { place: 'Best Design', amount: '$1,000', description: 'Award for best UI/UX design' },
      { place: 'Most Innovative', amount: '$1,000', description: 'Award for most creative solution' }
    ],
    rules: [
      'All code must be written during the hackathon period',
      'Teams can have 1-5 members',
      'Projects must be submitted before the deadline',
      'All team members must be registered participants',
      'Use of external APIs and libraries is allowed',
      'Projects will be judged on innovation, execution, and impact'
    ],
    schedule: [
      { time: 'Day 1 - March 15', events: ['9:00 AM - Opening Ceremony', '10:00 AM - Hacking Begins', '12:00 PM - Workshop: Getting Started', '6:00 PM - Networking Session'] },
      { time: 'Day 2 - March 16', events: ['9:00 AM - Workshop: Best Practices', '2:00 PM - Mentor Office Hours', '6:00 PM - Mid-point Check-in'] },
      { time: 'Day 3 - March 17', events: ['9:00 AM - Final Push', '2:00 PM - Submission Deadline', '4:00 PM - Judging Begins', '5:00 PM - Awards Ceremony'] }
    ],
    judges: [
      { name: 'Sarah Johnson', role: 'Senior Engineer at Tech Corp', avatar: 'SJ' },
      { name: 'Michael Chen', role: 'Product Designer at Design Studio', avatar: 'MC' },
      { name: 'Emily Rodriguez', role: 'Startup Founder', avatar: 'ER' }
    ],
    sponsors: ['TechCorp', 'DesignStudio', 'CloudProvider', 'DevTools Inc']
  };

  const isRegistered = false; // Would check user's registration status
  const canJoin = hackathon.currentParticipants < hackathon.maxParticipants;

  return (
    <main>
      <Card>
        <div className="hackathon-header">
          <div>
            <h1>{hackathon.title}</h1>
            <div className="hackathon-meta">
              <span className="status-badge upcoming">Upcoming</span>
              <span>📅 {new Date(hackathon.startDate).toLocaleDateString()} - {new Date(hackathon.endDate).toLocaleDateString()}</span>
              <span>📍 {hackathon.location}</span>
              <span>👥 {hackathon.currentParticipants} / {hackathon.maxParticipants} participants</span>
            </div>
          </div>
          <div>
            {isRegistered ? (
              <Button style={{ background: '#6C5B7B' }}>Already Registered</Button>
            ) : (
              <Link to={`/join-hackathon?hackathon=${hackathon.id}`}>
                <Button disabled={!canJoin}>
                  {canJoin ? 'Join Hackathon' : 'Full'}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </Card>

      <Card>
        <div className="tabs">
          <button
            className={activeTab === 'overview' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button
            className={activeTab === 'rules' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('rules')}
          >
            Rules
          </button>
          <button
            className={activeTab === 'schedule' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('schedule')}
          >
            Schedule
          </button>
          <button
            className={activeTab === 'prizes' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('prizes')}
          >
            Prizes
          </button>
          <button
            className={activeTab === 'judges' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('judges')}
          >
            Judges
            </button>
        </div>
      </Card>

      {activeTab === 'overview' && (
        <>
          <Card>
            <h2>About This Hackathon</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>{hackathon.description}</p>
            <p style={{ lineHeight: '1.8' }}>{hackathon.longDescription}</p>
          </Card>

          <Card>
            <h2>Details</h2>
            <div className="details-grid">
              <div className="detail-item">
                <strong>Start Date:</strong> {new Date(hackathon.startDate).toLocaleString()}
              </div>
              <div className="detail-item">
                <strong>End Date:</strong> {new Date(hackathon.endDate).toLocaleString()}
              </div>
              <div className="detail-item">
                <strong>Duration:</strong> 48 hours
              </div>
              <div className="detail-item">
                <strong>Location:</strong> {hackathon.location}
              </div>
              <div className="detail-item">
                <strong>Team Size:</strong> {hackathon.minTeamSize} - {hackathon.maxTeamSize} members
              </div>
              <div className="detail-item">
                <strong>Participants:</strong> {hackathon.currentParticipants} / {hackathon.maxParticipants}
              </div>
            </div>
          </Card>

          <Card>
            <h2>Categories</h2>
            <div className="categories-list">
              {hackathon.categories.map((category, index) => (
                <span key={index} className="category-badge">{category}</span>
              ))}
            </div>
          </Card>
        </>
      )}

      {activeTab === 'rules' && (
        <Card>
          <h2>Rules & Guidelines</h2>
          <ul className="rules-list">
            {hackathon.rules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </Card>
      )}

      {activeTab === 'schedule' && (
        <Card>
          <h2>Event Schedule</h2>
          {hackathon.schedule.map((day, index) => (
            <div key={index} className="schedule-day">
              <h3>{day.time}</h3>
              <ul>
                {day.events.map((event, eventIndex) => (
                  <li key={eventIndex}>{event}</li>
                ))}
              </ul>
            </div>
          ))}
        </Card>
      )}

      {activeTab === 'prizes' && (
        <Card>
          <h2>Prizes & Awards</h2>
          <div className="prizes-grid">
            {hackathon.prizes.map((prize, index) => (
              <div key={index} className="prize-card">
                <div className="prize-place">{prize.place}</div>
                <div className="prize-amount">{prize.amount}</div>
                <div className="prize-description">{prize.description}</div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {activeTab === 'judges' && (
        <Card>
          <h2>Judges</h2>
          <div className="judges-grid">
            {hackathon.judges.map((judge, index) => (
              <div key={index} className="judge-card">
                <div className="judge-avatar" style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #F67280, #F8B195)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '32px',
                  margin: '0 auto 15px'
                }}>
                  {judge.avatar}
                </div>
                <h3>{judge.name}</h3>
                <p>{judge.role}</p>
              </div>
            ))}
          </div>
        </Card>
      )}

      <Card>
        <h2>Sponsors</h2>
        <div className="sponsors-list">
          {hackathon.sponsors.map((sponsor, index) => (
            <span key={index} className="sponsor-badge">{sponsor}</span>
          ))}
        </div>
      </Card>
    </main>
  );
};

export default HackatonDetails;
