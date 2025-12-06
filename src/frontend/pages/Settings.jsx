import React, { useState } from 'react';
import '../styles/pages/Settings.css';
import TextInput from '../components/ui/TextInput';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Settings = () => {
  const [settings, setSettings] = useState({
    email: 'john.doe@example.com',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    notifications: {
      email: true,
      hackathonUpdates: true,
      teamMessages: true,
      newsletter: false
    },
    theme: 'light',
    language: 'en'
  });

  const handleInputChange = (field, value) => {
    setSettings({ ...settings, [field]: value });
  };

  const handleNotificationChange = (key, value) => {
    setSettings({
      ...settings,
      notifications: { ...settings.notifications, [key]: value }
    });
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (settings.newPassword !== settings.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    alert('Password changed successfully!');
    setSettings({ ...settings, currentPassword: '', newPassword: '', confirmPassword: '' });
  };

  const handleSave = () => {
    alert('Settings saved successfully!');
  };

  return (
    <main>
      <Card>
        <h1 style={{ color: '#ffffff' }}>Account Settings</h1>
      </Card>

      <Card>
        <h2 style={{ color: '#ffffff' }}>Email & Password</h2>
        <form className="settings-form">
          <label>
            Email Address
            <TextInput style={{ color: '#3e6383' }}
              type="email"
              value={settings.email}
              onChange={(value) => handleInputChange('email', value)}
              placeholder="your.email@example.com"
            />
          </label>

          <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #e0e0e0' }}>
            <h3 style={{ marginBottom: '15px', color: '#ffffff' }}>Change Password</h3>
            
            <label>
              Current Password
              <TextInput
                type="password"
                value={settings.currentPassword}
                onChange={(value) => handleInputChange('currentPassword', value)}
                placeholder="Enter current password"
              />
            </label>

            <label>
              New Password
              <TextInput
                type="password"
                value={settings.newPassword}
                onChange={(value) => handleInputChange('newPassword', value)}
                placeholder="Enter new password"
              />
            </label>

            <label>
              Confirm New Password
              <TextInput
                type="password"
                value={settings.confirmPassword}
                onChange={(value) => handleInputChange('confirmPassword', value)}
                placeholder="Confirm new password"
              />
            </label>

            <Button onClick={handlePasswordChange} style={{ marginTop: '10px' }}>
              Update Password
            </Button>
          </div>
        </form>
      </Card>

      <Card>
        <h2 style={{ color: '#ffffff' }}>Notifications</h2>
        <div className="notification-settings">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={settings.notifications.email}
              onChange={(e) => handleNotificationChange('email', e.target.checked)}
            />
            <span>Email notifications</span>
          </label>

          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={settings.notifications.hackathonUpdates}
              onChange={(e) => handleNotificationChange('hackathonUpdates', e.target.checked)}
            />
            <span>Hackathon updates</span>
          </label>

          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={settings.notifications.teamMessages}
              onChange={(e) => handleNotificationChange('teamMessages', e.target.checked)}
            />
            <span>Team messages</span>
          </label>

          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={settings.notifications.newsletter}
              onChange={(e) => handleNotificationChange('newsletter', e.target.checked)}
            />
            <span>Newsletter</span>
          </label>
        </div>
      </Card>

      <Card>
        <h2 style={{ color: '#ffffff' }}>Preferences</h2>
        <div className="preferences-form">
          <label>
            Theme
            <select
              value={settings.theme}
              onChange={(e) => handleInputChange('theme', e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #4f6cc3ff',
                fontFamily: 'inherit',
                fontSize: '14px',
                marginTop: '5px'
              }}
            >
              <option value="light" style={{ color: '#f5707f' }}>Light</option>
              <option value="dark" style={{ color: '#f5707f' }}>Dark</option>
              <option value="auto" style={{ color: '#f5707f' }}>Auto</option>
            </select>
          </label>

          <label>
            Language
            <select
              value={settings.language}
              onChange={(e) => handleInputChange('language', e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #4f6cc3ff',
                fontFamily: 'inherit',
                fontSize: '14px',
                marginTop: '5px'
              }}
            >
              <option value="en">English</option>
              <option value="ru">Русский</option>
              <option value="am">Հայերեն</option>
            </select>
          </label>
        </div>
      </Card>

      <Card>
        <Button onClick={handleSave} style={{ width: '100%' }}>
          Save All Settings
        </Button>
      </Card>
    </main>
  );
};

export default Settings;
