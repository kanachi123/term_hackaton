import React, { useState } from 'react';
import '../styles/pages/Support.css';
import TextInput from '../components/ui/TextInput';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Support = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'general',
    subject: '',
    message: '',
    priority: 'medium'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting support! We will get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      category: 'general',
      subject: '',
      message: '',
      priority: 'medium'
    });
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <main>
      <Card>
        <h1 >Support Center</h1>
        <p style={{ color: '#ffffff' }}>We're here to help! Get in touch with our support team for assistance.</p>
      </Card>

      <Card>
        <h2 style={{ color: '#ffffff' }}>Submit a Support Ticket</h2>
        <form onSubmit={handleSubmit} className="support-form">
          <label style={{ color: '#ffffff' }}>
            Your Name
            <TextInput
              type="text"
              value={formData.name}
              onChange={(value) => handleChange('name', value)}
              placeholder="Enter your name"
              required
            />
          </label>

          <label style={{ color: '#ffffff' }}>
            Email Address
            <TextInput
              type="email"
              value={formData.email}
              onChange={(value) => handleChange('email', value)}
              placeholder="your.email@example.com"
              required
            />
          </label>

          <label style={{ color: '#ffffff' }}>
            Category
            <select
              value={formData.category}
              onChange={(e) => handleChange('category', e.target.value)}
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
              <option value="general">General Inquiry</option>
              <option value="technical">Technical Issue</option>
              <option value="account">Account Problem</option>
              <option value="hackathon">Hackathon Question</option>
              <option value="billing">Billing Issue</option>
              <option value="bug">Bug Report</option>
              <option value="feature">Feature Request</option>
            </select>
          </label>

          <label style={{ color: '#ffffff' }}>
            Priority
            <select
              value={formData.priority}
              onChange={(e) => handleChange('priority', e.target.value)}
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
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="urgent">Urgent</option>
            </select>
          </label>

          <label style={{ color: '#ffffff' }}>
            Subject
            <TextInput
              type="text"
              value={formData.subject}
              onChange={(value) => handleChange('subject', value)}
              placeholder="Brief description of your issue"
              required
            />
          </label>

          <label style={{ color: '#ffffff' }}>
            Message
            <textarea
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              placeholder="Please provide as much detail as possible..."
              rows="8"
              required
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

          <Button type="submit">Submit Ticket</Button>
        </form>
      </Card>

      <Card>
        <h2>Other Ways to Get Help</h2>
        <div className="support-options">
          <div className="support-option">
            <h3>📚 Help Center</h3>
            <p>Browse our comprehensive help articles and FAQs.</p>
            <a href="/help" className="support-link">Visit Help Center →</a>
          </div>

          <div className="support-option">
            <h3>💬 Community Discord</h3>
            <p>Join our Discord server for real-time community support.</p>
            <a href="#" className="support-link">Join Discord →</a>
          </div>

          <div className="support-option">
            <h3>📧 Email Support</h3>
            <p>Send us an email at <strong>support@hackamaka.com</strong></p>
            <p>Response time: Within 24 hours</p>
          </div>

          <div className="support-option">
            <h3>🐛 Bug Reports</h3>
            <p>Found a bug? Report it through our bug tracking system.</p>
            <a href="https://github.com/hackamaka/issues" className="support-link" target="_blank" rel="noopener noreferrer">
              Report on GitHub →
            </a>
          </div>
        </div>
      </Card>

      <Card>
        <h2 style={{ color: '#ffffff' }}>Response Times</h2>
        <div className="response-times">
          <div className="response-item">
            <strong>Urgent:</strong> Within 4 hours
          </div>
          <div className="response-item">
            <strong>High:</strong> Within 12 hours
          </div>
          <div className="response-item">
            <strong>Medium:</strong> Within 24 hours
          </div>
          <div className="response-item">
            <strong>Low:</strong> Within 48 hours
          </div>
        </div>
        <p style={{ marginTop: '15px', fontSize: '14px', color: '#ffffff' }}>
          Response times are estimates and may vary based on ticket volume.
        </p>
      </Card>
    </main>
  );
};

export default Support;
