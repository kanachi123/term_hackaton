import React from 'react';
import '../../styles/pages/TeamDashboard.css';
import Card from '../../components/ui/Card';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';

const Dashboard = () => {
  const { user } = useAuth();

  const stats = [
    { label: 'Total Users', value: '1,234', icon: '👥' },
    { label: 'Active Hackathons', value: '12', icon: '🏆' },
    { label: 'Teams', value: '89', icon: '👨‍👩‍👧‍👦' },
    { label: 'Projects', value: '456', icon: '💻' }
  ];

  const recentActivities = [
    { type: 'user', action: 'New user registered', name: 'John Doe', time: '2 minutes ago' },
    { type: 'hackathon', action: 'Hackathon created', name: 'Spring 2024 Challenge', time: '15 minutes ago' },
    { type: 'team', action: 'Team formed', name: 'Innovation Squad', time: '1 hour ago' },
    { type: 'project', action: 'Project submitted', name: 'AI Helper App', time: '2 hours ago' }
  ];

  return (
    <main>
      <Card>
        <h1>Admin Dashboard</h1>
        <p>Welcome back, {user?.name || user?.email || 'Admin'}!</p>
      </Card>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '20px' }}>
        {stats.map((stat, index) => (
          <Card key={index}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '10px' }}>{stat.icon}</div>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#355C7D' }}>{stat.value}</div>
              <div style={{ color: '#6C5B7B', marginTop: '5px' }}>{stat.label}</div>
            </div>
          </Card>
        ))}
      </div>

      <Card>
        <h2>Quick Actions</h2>
        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          <Link to="/dashboard/user-management">
            <Button>Manage Users</Button>
          </Link>
          <Link to="/dashboard/team">
            <Button>View Teams</Button>
          </Link>
          <Link to="/dashboard/leaderboard">
            <Button>Leaderboard</Button>
          </Link>
          <Link to="/create-hackathon">
            <Button>Create Hackathon</Button>
          </Link>
        </div>
      </Card>

      <Card>
        <h2>Recent Activity</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {recentActivities.map((activity, index) => (
            <div key={index} style={{ 
              padding: '15px', 
              background: '#f9f9f9', 
              borderRadius: '8px',
              borderLeft: '4px solid #F67280'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <div>
                  <strong>{activity.action}</strong>
                  <div style={{ color: '#6C5B7B', marginTop: '5px' }}>{activity.name}</div>
                </div>
                <div style={{ color: '#999', fontSize: '14px' }}>{activity.time}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </main>
  );
};

export default Dashboard;

