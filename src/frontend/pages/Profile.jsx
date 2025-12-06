import React, { useState } from 'react';
import '../styles/pages/Profile.css';
import TextInput from '../components/ui/TextInput';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Full-stack developer passionate about hackathons and innovation.',
    skills: ['React', 'Node.js', 'Python', 'UI/UX'],
    github: 'github.com/johndoe',
    linkedin: 'linkedin.com/in/johndoe',
    location: 'San Francisco, CA',
    joinDate: 'January 2023'
  });

  const [editData, setEditData] = useState(profile);

  const handleSave = () => {
    setProfile(editData);
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  const handleCancel = () => {
    setEditData(profile);
    setIsEditing(false);
  };

  return (
    <main>
      <Card>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h1>My Profile</h1>
          {!isEditing && (
            <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
          )}
        </div>

        {isEditing ? (
          <div className="profile-edit">
            <label>
              Full Name
              <TextInput
                value={editData.name}
                onChange={(value) => setEditData({ ...editData, name: value })}
                placeholder="Your full name"
              />
            </label>

            <label>
              Bio
              <textarea
                value={editData.bio}
                onChange={(e) => setEditData({ ...editData, bio: e.target.value })}
                placeholder="Tell us about yourself"
                rows="4"
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '5px',
                  border: '1px solid #4f6cc3ff',
                  fontFamily: 'inherit',
                  fontSize: '14px',
                  resize: 'vertical'
                }}
              />
            </label>

            <label>
              Location
              <TextInput
                value={editData.location}
                onChange={(value) => setEditData({ ...editData, location: value })}
                placeholder="City, Country"
              />
            </label>

            <label>
              GitHub
              <TextInput
                value={editData.github}
                onChange={(value) => setEditData({ ...editData, github: value })}
                placeholder="github.com/username"
              />
            </label>

            <label>
              LinkedIn
              <TextInput
                value={editData.linkedin}
                onChange={(value) => setEditData({ ...editData, linkedin: value })}
                placeholder="linkedin.com/in/username"
              />
            </label>

            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
              <Button onClick={handleSave}>Save Changes</Button>
              <Button onClick={handleCancel} style={{ background: '#6C5B7B' }}>Cancel</Button>
            </div>
          </div>
        ) : (
          <div className="profile-view">
            <div className="profile-header">
              <div className="profile-avatar">
                <div style={{ 
                  width: '120px', 
                  height: '120px', 
                  borderRadius: '50%', 
                  background: 'linear-gradient(135deg, #F67280, #F8B195)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '48px',
                  color: 'white',
                  fontWeight: 'bold',
                  margin: '0 auto 20px'
                }}>
                  {profile.name.charAt(0).toUpperCase()}
                </div>
                <h2  style={{ color: '#ffffff' }}>{profile.name}</h2>
                <p className="profile-email"  style={{ color: '#f67280' }}>{profile.email}</p>
              </div>
            </div>

            <div className="profile-section">
              <h3>About</h3>
              <p style={{ color: '#f67280' }}>{profile.bio}</p>
            </div>

            <div className="profile-section">
              <h3>Skills</h3>
              <div className="skills-list">
                {profile.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="profile-section">
              <h3>Contact Information</h3>
              <div className="contact-info">
                <div style={{ color: '#f67280' }}><strong>Location:</strong> {profile.location}</div>
                <div><strong>GitHub:</strong> <a href={`https://${profile.github}`} target="_blank" rel="noopener noreferrer">{profile.github}</a></div>
                <div><strong>LinkedIn:</strong> <a href={`https://${profile.linkedin}`} target="_blank" rel="noopener noreferrer">{profile.linkedin}</a></div>
              </div>
            </div>

            <div className="profile-section">
              <h3>Statistics</h3>
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-value">12</div>
                  <div className="stat-label" style={{ color: '#3e6383' }}>Hackathons Joined</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">3</div>
                  <div className="stat-label" style={{ color: '#3e6383' }}>Wins</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">8</div>
                  <div className="stat-label" style={{ color: '#3e6383' }}>Projects</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">156</div>
                  <div className="stat-label" style={{ color: '#3e6383' }}>Points</div>
                </div>
              </div>
            </div>

            <div className="profile-section">
              <p style={{ color: '#f67280' }}>Member since {profile.joinDate}</p>
            </div>
          </div>
        )}
      </Card>
    </main>
  );
};

export default Profile;
