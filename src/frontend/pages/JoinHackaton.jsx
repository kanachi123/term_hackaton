import React, { useState } from 'react';
import '../styles/pages/JoinHackaton.css';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const JoinHackaton = () => {
  const [joinType, setJoinType] = useState('team'); // 'team' or 'solo'
  const [teamCode, setTeamCode] = useState('');
  const [teamName, setTeamName] = useState('');

  // Mock hackathon data (would come from props or route params)
  const hackathon = {
    id: 1,
    title: 'Spring 2024 Innovation Challenge',
    description: 'A 48-hour hackathon focused on building innovative solutions for modern problems.',
    startDate: '2024-03-15T09:00:00',
    endDate: '2024-03-17T17:00:00',
    location: 'Online',
    maxTeamSize: 5,
    categories: ['Web Development', 'AI/ML', 'Mobile App']
  };

  const handleJoin = (e) => {
    e.preventDefault();
    if (joinType === 'team' && !teamCode && !teamName) {
      alert('Please enter a team code or create a new team');
      return;
    }
    alert(`Successfully joined ${hackathon.title} as ${joinType === 'solo' ? 'solo participant' : 'team member'}!`);
  };

  return (
    <main>
      <Card>
        <h1>Join Hackathon</h1>
        <p>Join {hackathon.title} and start building amazing projects!</p>
      </Card>

      <Card>
        <h2>{hackathon.title}</h2>
        <div className="hackathon-info">
          <div className="info-item">
            <strong>📅 Start:</strong> {new Date(hackathon.startDate).toLocaleString()}
          </div>
          <div className="info-item">
            <strong>🏁 End:</strong> {new Date(hackathon.endDate).toLocaleString()}
          </div>
          <div className="info-item">
            <strong>📍 Location:</strong> {hackathon.location}
          </div>
          <div className="info-item">
            <strong>👥 Max Team Size:</strong> {hackathon.maxTeamSize} members
          </div>
          <div className="info-item">
            <strong>🏷️ Categories:</strong> {hackathon.categories.join(', ')}
          </div>
        </div>
        <p style={{ marginTop: '15px', lineHeight: '1.6' }}>{hackathon.description}</p>
      </Card>

      <Card>
        <h2>How would you like to participate?</h2>
        <div className="join-options">
          <button
            className={`join-option ${joinType === 'solo' ? 'active' : ''}`}
            onClick={() => setJoinType('solo')}
          >
            <div className="option-icon">👤</div>
            <div className="option-content">
              <h3>Solo</h3>
              <p>Participate individually and work on your own project</p>
            </div>
          </button>

          <button
            className={`join-option ${joinType === 'team' ? 'active' : ''}`}
            onClick={() => setJoinType('team')}
          >
            <div className="option-icon">👥</div>
            <div className="option-content">
              <h3>Team</h3>
              <p>Join an existing team or create a new one</p>
            </div>
          </button>
        </div>
      </Card>

      {joinType === 'team' && (
        <Card>
          <h2>Team Options</h2>
          <form onSubmit={handleJoin}>
            <div className="team-options">
              <div className="team-option">
                <h3>Join Existing Team</h3>
                <p>Enter a team code to join an existing team</p>
                <input
                  type="text"
                  value={teamCode}
                  onChange={(e) => setTeamCode(e.target.value)}
                  placeholder="Enter team code"
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #4f6cc3ff',
                    fontFamily: 'inherit',
                    fontSize: '14px',
                    marginTop: '10px'
                  }}
                />
                <Button
                  type="button"
                  onClick={() => {
                    if (teamCode) {
                      alert(`Joining team with code: ${teamCode}`);
                    } else {
                      alert('Please enter a team code');
                    }
                  }}
                  style={{ marginTop: '10px', width: '100%', background: '#6C5B7B' }}
                >
                  Join Team
                </Button>
              </div>

              <div className="team-divider">OR</div>

              <div className="team-option">
                <h3>Create New Team</h3>
                <p>Start a new team and invite others to join</p>
                <input
                  type="text"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  placeholder="Enter team name"
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #4f6cc3ff',
                    fontFamily: 'inherit',
                    fontSize: '14px',
                    marginTop: '10px'
                  }}
                />
                <Button
                  type="button"
                  onClick={() => {
                    if (teamName) {
                      alert(`Creating team: ${teamName}`);
                    } else {
                      alert('Please enter a team name');
                    }
                  }}
                  style={{ marginTop: '10px', width: '100%', background: '#6C5B7B' }}
                >
                  Create Team
                </Button>
              </div>
            </div>
          </form>
        </Card>
      )}

      <Card>
        <h2>Important Information</h2>
        <div className="info-box">
          <ul>
            <li>Make sure you meet all hackathon requirements before joining</li>
            <li>You can leave a hackathon before it starts, but not after</li>
            <li>Team members can be added until the hackathon begins</li>
            <li>Read the hackathon rules carefully before participating</li>
          </ul>
        </div>
      </Card>

      <Card>
        <Button onClick={handleJoin} style={{ width: '100%' }}>
          {joinType === 'solo' ? 'Join as Solo Participant' : 'Join Hackathon'}
        </Button>
      </Card>
    </main>
  );
};

export default JoinHackaton;
