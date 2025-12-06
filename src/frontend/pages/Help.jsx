import React, { useState } from 'react';
import '../styles/pages/Help.css';
import Card from '../components/ui/Card';

const Help = () => {
  const [openSection, setOpenSection] = useState(null);

  const faqSections = [
    {
      title: 'Getting Started',
      items: [
        {
          question: 'How do I create an account?',
          answer: 'Click on the "Sign Up" button in the header, fill in your details, and verify your email address. You\'ll be ready to join hackathons in minutes!'
        },
        {
          question: 'How do I join a hackathon?',
          answer: 'Browse available hackathons on the Hackathons page, click on one that interests you, and press the "Join Hackathon" button. Make sure you meet the requirements!'
        },
        {
          question: 'Can I participate in multiple hackathons?',
          answer: 'Yes! You can join multiple hackathons as long as their schedules don\'t conflict. Manage your participation from your profile dashboard.'
        }
      ]
    },
    {
      title: 'Teams & Collaboration',
      items: [
        {
          question: 'How do I create a team?',
          answer: 'When joining a hackathon, you can create a new team or join an existing one. Team creation is available from the hackathon details page.'
        },
        {
          question: 'What is the maximum team size?',
          answer: 'Team size limits vary by hackathon. Most hackathons allow teams of 2-5 members. Check the specific hackathon rules for details.'
        },
        {
          question: 'How do I invite team members?',
          answer: 'Once you create a team, you\'ll get a team code. Share this code with your teammates, or invite them directly through the team dashboard.'
        }
      ]
    },
    {
      title: 'Submissions & Judging',
      items: [
        {
          question: 'How do I submit my project?',
          answer: 'Navigate to your hackathon dashboard, find the submission section, and upload your project files, GitHub repository link, and a demo video if required.'
        },
        {
          question: 'What happens after I submit?',
          answer: 'Your submission will be reviewed by judges. Results are typically announced within 1-2 weeks after the hackathon ends. Check the leaderboard for updates!'
        },
        {
          question: 'How are projects judged?',
          answer: 'Projects are evaluated based on innovation, technical implementation, design, and presentation. Each hackathon may have specific criteria outlined in its rules.'
        }
      ]
    },
    {
      title: 'Account & Profile',
      items: [
        {
          question: 'How do I update my profile?',
          answer: 'Go to your Profile page and click "Edit Profile". You can update your bio, skills, contact information, and more.'
        },
        {
          question: 'How do I change my password?',
          answer: 'Navigate to Settings, find the "Email & Password" section, and follow the instructions to change your password.'
        },
        {
          question: 'Can I delete my account?',
          answer: 'Yes, you can delete your account from the Settings page. This action is permanent and cannot be undone.'
        }
      ]
    }
  ];

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <main>
      <Card>
        <h1 style={{ color: '#ffffff' }}>Help & Support</h1>
        <p style={{ color: '#ffffff' }}>Find answers to common questions and get help with using Hackamaka.</p>
      </Card>

      <Card>
        <h2 style={{ color: '#ffffff' }}>Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="faq-section">
              <h3 style={{ color: '#ffffff' }}>{section.title}</h3>
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="faq-item">
                  <button
                    className="faq-question"
                    onClick={() => toggleSection(`${sectionIndex}-${itemIndex}`)}
                  >
                    {item.question}
                    <span className="faq-toggle">
                      {openSection === `${sectionIndex}-${itemIndex}` ? '−' : '+'}
                    </span>
                  </button>
                  {openSection === `${sectionIndex}-${itemIndex}` && (
                    <div className="faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h2 style={{ color: '#ffffff' }}>Still Need Help?</h2>
        <div className="help-options">
          <div className="help-option">
            <h3>📧 Email Support</h3>
            <p>Send us an email at <strong>support@hackamaka.com</strong></p>
            <p>We typically respond within 24 hours.</p>
          </div>

          <div className="help-option">
            <h3>💬 Community Discord</h3>
            <p>Join our Discord server to chat with other participants and get real-time help.</p>
            <a href="#" className="help-link">Join Discord →</a>
          </div>

          <div className="help-option">
            <h3>📚 Documentation</h3>
            <p>Check out our comprehensive documentation for detailed guides.</p>
            <a href="#" className="help-link">View Docs →</a>
          </div>

          <div className="help-option">
            <h3>🐛 Report a Bug</h3>
            <p>Found a bug? Let us know so we can fix it!</p>
            <a href="/support" className="help-link">Report Bug →</a>
          </div>
        </div>
      </Card>

      <Card>
        <h2 style={{ color: '#ffffff' }}>Quick Links</h2>
        <div className="quick-links" >
          <a href="/create-hackathon" style={{ color: '#ffffff' }}>Create a Hackathon</a>
          <a href="/hackathons" style={{ color: '#ffffff' }}>Browse Hackathons</a>
          <a href="/leaderboard" style={{ color: '#ffffff' }}>View Leaderboard</a>
          <a href="/terms" style={{ color: '#ffffff' }}>Terms of Service</a>
          <a href="/privacy" style={{ color: '#ffffff' }}>Privacy Policy</a>
        </div>
      </Card>
    </main>
  );
};

export default Help;
