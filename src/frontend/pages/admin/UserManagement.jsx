import React, { useState } from 'react';
import '../../styles/pages/UserManagement.css';
import TextInput from '../../components/ui/TextInput';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');

  // Mock data
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin', status: 'active', joinDate: '2023-01-15', hackathons: 12 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user', status: 'active', joinDate: '2023-02-20', hackathons: 8 },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'moderator', status: 'active', joinDate: '2023-03-10', hackathons: 15 },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'user', status: 'suspended', joinDate: '2023-04-05', hackathons: 5 },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'user', status: 'active', joinDate: '2023-05-12', hackathons: 3 },
    { id: 6, name: 'Diana Martinez', email: 'diana@example.com', role: 'user', status: 'active', joinDate: '2023-06-18', hackathons: 7 }
  ];

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'all' || user.role === filterRole;
    return matchesSearch && matchesRole;
  });

  const handleAction = (userId, action) => {
    alert(`${action} action performed on user ${userId}`);
  };

  return (
    <main>
      <Card>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <h1>User Management</h1>
            <p style={{ color: '#6C5B7B', marginTop: '5px' }}>Manage users, roles, and permissions</p>
          </div>
          <Button>Add New User</Button>
        </div>
      </Card>

      <Card>
        <div className="user-filters">
          <div style={{ flex: 1, marginRight: '15px' }}>
            <TextInput
              type="text"
              value={searchTerm}
              onChange={setSearchTerm}
              placeholder="Search by name or email..."
            />
          </div>
          <div>
            <select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              style={{
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #4f6cc3ff',
                fontFamily: 'inherit',
                fontSize: '14px',
                minWidth: '150px'
              }}
            >
              <option value="all">All Roles</option>
              <option value="admin">Admin</option>
              <option value="moderator">Moderator</option>
              <option value="user">User</option>
            </select>
          </div>
        </div>
      </Card>

      <div className="card">
        <div className="users-table">
          <div className="table-header">
            <div className="col-name">Name</div>
            <div className="col-email">Email</div>
            <div className="col-role">Role</div>
            <div className="col-status">Status</div>
            <div className="col-stats">Hackathons</div>
            <div className="col-actions">Actions</div>
          </div>

          {filteredUsers.map((user) => (
            <div key={user.id} className="table-row">
              <div className="col-name">
                <div className="user-cell">
                  <div className="user-avatar-small" style={{
                    width: '35px',
                    height: '35px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #F67280, #F8B195)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    marginRight: '10px',
                    fontSize: '14px'
                  }}>
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="user-name">{user.name}</div>
                    <div className="user-meta">Joined {new Date(user.joinDate).toLocaleDateString()}</div>
                  </div>
                </div>
              </div>
              <div className="col-email">{user.email}</div>
              <div className="col-role">
                <span className={`role-badge ${user.role}`}>
                  {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                </span>
              </div>
              <div className="col-status">
                <span className={`status-badge ${user.status}`}>
                  {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                </span>
              </div>
              <div className="col-stats">{user.hackathons}</div>
              <div className="col-actions">
                <div className="action-buttons">
                  <button
                    className="action-btn edit"
                    onClick={() => handleAction(user.id, 'Edit')}
                    title="Edit User"
                  >
                    ✏️
                  </button>
                  <button
                    className="action-btn suspend"
                    onClick={() => handleAction(user.id, user.status === 'active' ? 'Suspend' : 'Activate')}
                    title={user.status === 'active' ? 'Suspend' : 'Activate'}
                  >
                    {user.status === 'active' ? '⏸️' : '▶️'}
                  </button>
                  <button
                    className="action-btn delete"
                    onClick={() => handleAction(user.id, 'Delete')}
                    title="Delete User"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredUsers.length === 0 && (
          <div style={{ textAlign: 'center', padding: '40px', color: '#6C5B7B' }}>
            No users found matching your criteria.
          </div>
        )}
      </div>

      <div className="card">
        <h2>User Statistics</h2>
        <div className="user-stats">
          <div className="stat-item">
            <div className="stat-value">{users.length}</div>
            <div className="stat-label">Total Users</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{users.filter(u => u.role === 'admin').length}</div>
            <div className="stat-label">Admins</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{users.filter(u => u.role === 'moderator').length}</div>
            <div className="stat-label">Moderators</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{users.filter(u => u.status === 'active').length}</div>
            <div className="stat-label">Active Users</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserManagement;
