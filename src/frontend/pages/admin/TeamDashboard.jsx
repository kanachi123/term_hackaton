import React, { useState } from 'react';
import '../../styles/pages/TeamDashboard.css';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

const TeamDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data
  const teamMembers = [
    { id: 1, name: 'John Doe', role: 'Team Lead', email: 'john@example.com', avatar: 'JD', status: 'active' },
    { id: 2, name: 'Jane Smith', role: 'Developer', email: 'jane@example.com', avatar: 'JS', status: 'active' },
    { id: 3, name: 'Bob Johnson', role: 'Designer', email: 'bob@example.com', avatar: 'BJ', status: 'active' },
    { id: 4, name: 'Alice Brown', role: 'Developer', email: 'alice@example.com', avatar: 'AB', status: 'pending' }
  ];

  const currentHackathon = {
    name: 'Spring 2024 Innovation Challenge',
    startDate: '2024-03-15',
    endDate: '2024-03-17',
    status: 'active',
    progress: 65
  };

  const projectTasks = [
    { id: 1, title: 'Setup project repository', assignee: 'John Doe', status: 'completed', priority: 'high' },
    { id: 2, title: 'Design UI mockups', assignee: 'Bob Johnson', status: 'in-progress', priority: 'high' },
    { id: 3, title: 'Implement authentication', assignee: 'Jane Smith', status: 'in-progress', priority: 'medium' },
    { id: 4, title: 'Write API endpoints', assignee: 'Alice Brown', status: 'pending', priority: 'medium' },
    { id: 5, title: 'Create presentation', assignee: 'John Doe', status: 'pending', priority: 'low' }
  ];

  return (
    <main>
      <Card>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <h1>Team Dashboard</h1>
            <p style={{ color: '#6C5B7B', marginTop: '5px' }}>Team: Innovation Squad</p>
          </div>
          <Button>Invite Member</Button>
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
            className={activeTab === 'members' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('members')}
          >
            Members
          </button>
          <button
            className={activeTab === 'tasks' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('tasks')}
          >
            Tasks
          </button>
          <button
            className={activeTab === 'project' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('project')}
          >
            Project
          </button>
        </div>
      </Card>

      {activeTab === 'overview' && (
        <>
          <Card>
            <h2>Current Hackathon</h2>
            <div className="hackathon-info">
              <h3>{currentHackathon.name}</h3>
              <div className="hackathon-details">
                <div>
                  <strong>Start:</strong> {new Date(currentHackathon.startDate).toLocaleDateString()}
                </div>
                <div>
                  <strong>End:</strong> {new Date(currentHackathon.endDate).toLocaleDateString()}
                </div>
                <div>
                  <strong>Status:</strong> 
                  <span className={`status-badge ${currentHackathon.status}`}>
                    {currentHackathon.status.charAt(0).toUpperCase() + currentHackathon.status.slice(1)}
                  </span>
                </div>
              </div>
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${currentHackathon.progress}%` }}>
                  {currentHackathon.progress}%
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <h2>Quick Stats</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-value">{teamMembers.length}</div>
                <div className="stat-label">Team Members</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">{projectTasks.filter(t => t.status === 'completed').length}</div>
                <div className="stat-label">Completed Tasks</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">{projectTasks.filter(t => t.status === 'in-progress').length}</div>
                <div className="stat-label">In Progress</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">{currentHackathon.progress}%</div>
                <div className="stat-label">Project Progress</div>
              </div>
            </div>
          </Card>
        </>
      )}

      {activeTab === 'members' && (
        <Card>
          <h2>Team Members</h2>
          <div className="members-list">
            {teamMembers.map((member) => (
              <div key={member.id} className="member-card">
                <div className="member-info">
                  <div className="member-avatar" style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #F67280, #F8B195)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    marginRight: '15px'
                  }}>
                    {member.avatar}
                  </div>
                  <div>
                    <div className="member-name">{member.name}</div>
                    <div className="member-role">{member.role}</div>
                    <div className="member-email">{member.email}</div>
                  </div>
                </div>
                <div>
                  <span className={`status-badge ${member.status}`}>
                    {member.status.charAt(0).toUpperCase() + member.status.slice(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {activeTab === 'tasks' && (
        <Card>
          <h2>Project Tasks</h2>
          <div className="tasks-list">
            {projectTasks.map((task) => (
              <div key={task.id} className="task-card">
                <div className="task-header">
                  <h4>{task.title}</h4>
                  <span className={`priority-badge ${task.priority}`}>
                    {task.priority}
                  </span>
                </div>
                <div className="task-details">
                  <div>
                    <strong>Assigned to:</strong> {task.assignee}
                  </div>
                  <span className={`status-badge ${task.status}`}>
                    {task.status.replace('-', ' ')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {activeTab === 'project' && (
        <Card>
          <h2>Project Submission</h2>
          <div className="project-submission">
            <div className="submission-section">
              <h3>Project Details</h3>
              <p><strong>Name:</strong> Innovation Hub Platform</p>
              <p><strong>Description:</strong> A collaborative platform for developers to share ideas and build projects together.</p>
              <p><strong>Tech Stack:</strong> React, Node.js, MongoDB, Express</p>
            </div>

            <div className="submission-section">
              <h3>Repository</h3>
              <input
                type="text"
                placeholder="https://github.com/team/project"
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '5px',
                  border: '1px solid #4f6cc3ff',
                  fontFamily: 'inherit',
                  fontSize: '14px'
                }}
              />
            </div>

            <div className="submission-section">
              <h3>Demo Video</h3>
              <input
                type="text"
                placeholder="https://youtube.com/watch?v=..."
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '5px',
                  border: '1px solid #4f6cc3ff',
                  fontFamily: 'inherit',
                  fontSize: '14px'
                }}
              />
            </div>

            <Button style={{ marginTop: '20px' }}>Submit Project</Button>
          </div>
        </Card>
      )}
    </main>
  );
};

export default TeamDashboard;
