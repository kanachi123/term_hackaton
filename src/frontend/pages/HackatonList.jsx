import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/HackatonList.css';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const HackatonList = () => {
  const [filter, setFilter] = useState('all'); // 'all', 'upcoming', 'active', 'past'
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data
  const hackathons = [
    {
      id: 1,
      title: 'Spring 2024 Innovation Challenge',
      description: 'A 48-hour hackathon focused on building innovative solutions for modern problems using cutting-edge technologies.',
      startDate: '2024-03-15',
      endDate: '2024-03-17',
      location: 'Online',
      status: 'upcoming',
      participants: 245,
      maxParticipants: 500,
      categories: ['Web Development', 'AI/ML'],
      prize: '$10,000',
      image: '🌱'
    },
    {
      id: 2,
      title: 'AI Innovation Hackathon',
      description: 'Build AI-powered solutions that can change the world. Focus on machine learning, NLP, and computer vision.',
      startDate: '2024-03-20',
      endDate: '2024-03-22',
      location: 'Hybrid',
      status: 'upcoming',
      participants: 180,
      maxParticipants: 300,
      categories: ['AI/ML', 'Data Science'],
      prize: '$15,000',
      image: '🤖'
    },
    {
      id: 3,
      title: 'Web Dev Marathon',
      description: 'A fast-paced 24-hour hackathon for web developers. Build responsive, modern web applications.',
      startDate: '2024-03-01',
      endDate: '2024-03-02',
      location: 'Online',
      status: 'active',
      participants: 320,
      maxParticipants: 400,
      categories: ['Web Development', 'Frontend'],
      prize: '$8,000',
      image: '💻'
    },
    {
      id: 4,
      title: 'Blockchain Builders',
      description: 'Create decentralized applications and explore the future of blockchain technology.',
      startDate: '2024-02-10',
      endDate: '2024-02-12',
      location: 'In-Person',
      status: 'past',
      participants: 150,
      maxParticipants: 200,
      categories: ['Blockchain', 'Web3'],
      prize: '$12,000',
      image: '⛓️'
    },
    {
      id: 5,
      title: 'Mobile App Challenge',
      description: 'Design and develop mobile applications for iOS and Android platforms.',
      startDate: '2024-03-25',
      endDate: '2024-03-27',
      location: 'Online',
      status: 'upcoming',
      participants: 95,
      maxParticipants: 250,
      categories: ['Mobile App', 'iOS', 'Android'],
      prize: '$9,000',
      image: '📱'
    },
    {
      id: 6,
      title: 'Game Development Jam',
      description: 'Create amazing games using any engine or framework. Showcase your creativity and game design skills.',
      startDate: '2024-02-20',
      endDate: '2024-02-22',
      location: 'Hybrid',
      status: 'past',
      participants: 210,
      maxParticipants: 300,
      categories: ['Game Development', 'Unity', 'Unreal'],
      prize: '$7,500',
      image: '🎮'
    }
  ];

  const filteredHackathons = hackathons.filter(hackathon => {
    const matchesFilter = filter === 'all' || hackathon.status === filter;
    const matchesSearch = hackathon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         hackathon.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusBadge = (status) => {
    const badges = {
      upcoming: { text: 'Upcoming', class: 'upcoming' },
      active: { text: 'Active Now', class: 'active' },
      past: { text: 'Ended', class: 'past' }
    };
    return badges[status] || badges.upcoming;
  };

  return (
    <main>
      <Card style={{ color: '#ffffff' }} >
        <h1 style={{ color: '#ffffff' }}>Hackathons</h1>
        <p style={{ color: '#ffffff' }}>Discover and join exciting hackathons. Build, learn, and compete with developers worldwide!</p>
      </Card>

      <Card>
        <div className="hackathon-filters">
          <div className="search-bar">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search hackathons..."
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '5px',
                border: '1px solid #4f6cc3ff',
                fontFamily: 'inherit',
                fontSize: '14px'
              }}
            />
          </div>

          <div className="filter-buttons">
            <button
              className={filter === 'all' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button
              className={filter === 'upcoming' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setFilter('upcoming')}
            >
              Upcoming
            </button>
            <button
              className={filter === 'active' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setFilter('active')}
            >
              Active
            </button>
            <button
              className={filter === 'past' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setFilter('past')}
            >
              Past
            </button>
          </div>
        </div>
      </Card>

      <div className="hackathons-grid">
        {filteredHackathons.map((hackathon) => {
          const statusBadge = getStatusBadge(hackathon.status);
          return (
            <div key={hackathon.id} className="hackathon-card">
              <div className="hackathon-header">
                <div className="hackathon-icon">{hackathon.image}</div>
                <span className={`status-badge ${statusBadge.class}`}>
                  {statusBadge.text}
                </span>
              </div>

              <h2>{hackathon.title}</h2>
              <p className="hackathon-description">{hackathon.description}</p>

              <div className="hackathon-details">
                <div className="detail-item">
                  <strong>📅</strong> {new Date(hackathon.startDate).toLocaleDateString()} - {new Date(hackathon.endDate).toLocaleDateString()}
                </div>
                <div className="detail-item">
                  <strong>📍</strong> {hackathon.location}
                </div>
                <div className="detail-item">
                  <strong>👥</strong> {hackathon.participants} / {hackathon.maxParticipants} participants
                </div>
                <div className="detail-item">
                  <strong>🏆</strong> {hackathon.prize} in prizes
                </div>
              </div>

              <div className="hackathon-categories">
                {hackathon.categories.map((category, index) => (
                  <span key={index} className="category-tag">{category}</span>
                ))}
              </div>

              <div className="hackathon-actions">
                <Link to={`/hackathon/${hackathon.id}`}>
                  <Button style={{ width: '100%' }}>
                    {hackathon.status === 'active' ? 'View Details' : hackathon.status === 'upcoming' ? 'Join Now' : 'View Results'}
                  </Button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {filteredHackathons.length === 0 && (
        <Card>
          <div style={{ textAlign: 'center', padding: '40px', color: '#6C5B7B' }}>
            <p>No hackathons found matching your criteria.</p>
            <p style={{ marginTop: '10px' }}>Try adjusting your filters or search terms.</p>
          </div>
        </Card>
      )}
    </main>
  );
};

export default HackatonList;
