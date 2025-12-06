import React, { useState } from 'react';
import '../styles/pages/Contact.css';
import TextInput from '../components/ui/TextInput';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <main>
      <Card style={{ color: '#ffffff' }}>
        <h1 style={{ color: '#ffffff' }}>Contact Us</h1>
        <p style={{ color: '#ffffff' }}>Have questions or feedback? We'd love to hear from you!</p>
      </Card>

      <Card>
        <h2 style={{ color: '#ffffff' }}>Get in Touch</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            Your Name
            <TextInput
              type="text"
              value={formData.name}
              onChange={(value) => setFormData({ ...formData, name: value })}
              placeholder="Enter your name"
              required
            />
          </label>

          <label>
            Email Address
            <TextInput
              type="email"
              value={formData.email}
              onChange={(value) => setFormData({ ...formData, email: value })}
              placeholder="your.email@example.com"
              required
            />
          </label>

          <label>
            Subject
            <TextInput
              type="text"
              value={formData.subject}
              onChange={(value) => setFormData({ ...formData, subject: value })}
              placeholder="What is this about?"
              required
            />
          </label>

          <label>
            Message
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us more..."
              rows="6"
              required
              className="w-full p-sm rounded border resize-vertical font-inherit text-sm"
              style={{ borderColor: '#4f6cc3ff' }}
            />
          </label>

          <Button type="submit">Send Message</Button>
        </form>
      </Card>

      <Card>
        <h2 style={{ color: '#ffffff' }}>Other Ways to Reach Us</h2>
        <div className="contact-info">
          <div className="contact-item" style={{ color: '#385e7f' }}>
            <strong style={{ color: '#385e7f' }}>Email:</strong> support@hackamaka.com
          </div>
          <div className="contact-item" style={{ color: '#385e7f' }}>
            <strong>Discord:</strong> Join our community server
          </div>
          <div className="contact-item" style={{ color: '#385e7f' }}>
            <strong>GitHub:</strong> github.com/kanachi123/term_hackathon
          </div>
        </div>
      </Card>
    </main>
  );
};

export default Contact;
