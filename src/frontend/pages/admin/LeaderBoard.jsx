import React, { useState } from 'react';
import '../../styles/pages/LeaderBoard.css';
import Card from '../../components/ui/Card';

const LeaderBoard = () => {
  const [selectedHackathon, setSelectedHackathon] = useState('all');
  const [timeframe, setTimeframe] = useState('all-time');

  // Mock data
  const leaderboardData = [
    { rank: 1, name: 'Alex Chen', points: 2450, hackathons: 15, wins: 5, avatar: 'AC' },
    { rank: 2, name: 'Sarah Johnson', points: 2320, hackathons: 18, wins: 4, avatar: 'SJ' },
    { rank: 3, name: 'Michael Zhang', points: 2180, hackathons: 12, wins: 6, avatar: 'MZ' },
    { rank: 4, name: 'Emily Rodriguez', points: 2050, hackathons: 14, wins: 3, avatar: 'ER' },
    { rank: 5, name: 'David Kim', points: 1920, hackathons: 11, wins: 4, avatar: 'DK' },
    { rank: 6, name: 'Jessica Wang', points: 1850, hackathons: 13, wins: 2, avatar: 'JW' },
    { rank: 7, name: 'Ryan Patel', points: 1720, hackathons: 10, wins: 3, avatar: 'RP' },
    { rank: 8, name: 'Olivia Brown', points: 1680, hackathons: 12, wins: 2, avatar: 'OB' },
    { rank: 9, name: 'James Wilson', points: 1550, hackathons: 9, wins: 2, avatar: 'JW' },
    { rank: 10, name: 'Sophia Lee', points: 1420, hackathons: 8, wins: 1, avatar: 'SL' }
  ];

  const getRankBadge = (rank) => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return `#${rank}`;
  };

  return (
    <main>
      <Card>
        <h1>Leaderboard</h1>
        <p>Top performers and most active participants on Hackamaka</p>
      </Card>

      <Card>
        <div className="leaderboard-filters">
          <div className="filter-group">
            <label>
              Hackathon:
              <select
                value={selectedHackathon}
                onChange={(e) => setSelectedHackathon(e.target.value)}
                style={{
                  padding: '8px',
                  borderRadius: '5px',
                  border: '1px solid #4f6cc3ff',
                  fontFamily: 'inherit',
                  fontSize: '14px',
                  marginLeft: '10px'
                }}
              >
                <option value="all">All Hackathons</option>
                <option value="spring2024">Spring 2024 Challenge</option>
                <option value="ai2024">AI Innovation Hackathon</option>
                <option value="webdev2024">Web Dev Marathon</option>
              </select>
            </label>
          </div>

          <div className="filter-group">
            <label>
              Timeframe:
              <select
                value={timeframe}
                onChange={(e) => setTimeframe(e.target.value)}
                style={{
                  padding: '8px',
                  borderRadius: '5px',
                  border: '1px solid #4f6cc3ff',
                  fontFamily: 'inherit',
                  fontSize: '14px',
                  marginLeft: '10px'
                }}
              >
                <option value="all-time">All Time</option>
                <option value="this-year">This Year</option>
                <option value="this-month">This Month</option>
                <option value="this-week">This Week</option>
              </select>
            </label>
          </div>
        </div>
      </Card>

      <div className="card">
        <div className="leaderboard-header">
          <div className="leaderboard-stats">
            <div className="stat-box">
              <div className="stat-number">{leaderboardData.length}</div>
              <div className="stat-label">Top Participants</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">{leaderboardData.reduce((sum, user) => sum + user.hackathons, 0)}</div>
              <div className="stat-label">Total Participations</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">{leaderboardData.reduce((sum, user) => sum + user.wins, 0)}</div>
              <div className="stat-label">Total Wins</div>
            </div>
          </div>
        </div>

        <div className="leaderboard-table">
          <div className="table-header">
            <div className="col-rank">Rank</div>
            <div className="col-user">Participant</div>
            <div className="col-points">Points</div>
            <div className="col-hackathons">Hackathons</div>
            <div className="col-wins">Wins</div>
          </div>

          {leaderboardData.map((user) => (
            <div key={user.rank} className={`table-row ${user.rank <= 3 ? 'top-three' : ''}`}>
              <div className="col-rank">
                <span className="rank-badge">{getRankBadge(user.rank)}</span>
              </div>
              <div className="col-user">
                <div className="user-info">
                  <div className="user-avatar" style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #F67280, #F8B195)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    marginRight: '12px'
                  }}>
                    {user.avatar}
                  </div>
                  <div>
                    <div className="user-name">{user.name}</div>
                    <div className="user-badge">Pro Member</div>
                  </div>
                </div>
              </div>
              <div className="col-points">
                <strong>{user.points.toLocaleString()}</strong>
              </div>
              <div className="col-hackathons">{user.hackathons}</div>
              <div className="col-wins">
                <span className="wins-badge">{user.wins} 🏆</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Card>
        <h2>How Points Work</h2>
        <div className="points-info">
          <div className="points-item">
            <strong>🏆 1st Place:</strong> 200 points
          </div>
          <div className="points-item">
            <strong>🥈 2nd Place:</strong> 150 points
          </div>
          <div className="points-item">
            <strong>🥉 3rd Place:</strong> 100 points
          </div>
          <div className="points-item">
            <strong>✅ Participation:</strong> 50 points
          </div>
          <div className="points-item">
            <strong>⭐ Special Awards:</strong> 75 points
          </div>
        </div>
      </Card>
    </main>
  );
};

export default LeaderBoard;
