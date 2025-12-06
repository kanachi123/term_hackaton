import React from 'react';
import '../styles/pages/Privacy.css';
import Card from '../components/ui/Card';

const Privacy = () => {
  return (
    <main>
      <Card>
        <h1 style={{ color: '#ffffff' }}>Privacy Policy</h1>
        <p style={{ color: '#ffffff', marginBottom: '30px' }}>
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        <p style={{ color: '#ffffff' }}>
          At Hackamaka, we take your privacy seriously. This Privacy Policy explains how we collect, 
          use, disclose, and safeguard your information when you use our platform.
        </p>
      </Card>

      <Card>
        <h2 style={{ color: '#ffffff' }}>1. Information We Collect</h2>
        <h3 style={{ color: '#ffffff' }}>1.1 Personal Information</h3>
        <p style={{ color: '#ffffff' }}>We collect information that you provide directly to us, including:</p>
        <ul style={{ color: '#ffffff' }}>
          <li>Name and email address</li>
          <li>Profile information (bio, skills, location)</li>
          <li>Account credentials</li>
          <li>Hackathon submissions and project information</li>
        </ul>

        <h3 style={{ color: '#ffffff' }}>1.2 Automatically Collected Information</h3>
        <p style={{ color: '#ffffff' }}>We automatically collect certain information when you use our platform:</p>
        <ul style={{ color: '#ffffff' }}>
          <li>Device information (browser type, operating system)</li>
          <li>Usage data (pages visited, time spent, interactions)</li>
          <li>IP address and location data</li>
          <li>Cookies and similar tracking technologies</li>
        </ul>
      </Card>

      <Card>
        <h2 style={{ color: '#ffffff' }}>2. How We Use Your Information</h2>
        <p style={{ color: '#ffffff' }}>We use the information we collect to:</p>
        <ul style={{ color: '#ffffff' }}>
          <li>Provide, maintain, and improve our services</li>
          <li>Process your hackathon registrations and submissions</li>
          <li>Communicate with you about your account and hackathons</li>
          <li>Send you updates, newsletters, and promotional materials (with your consent)</li>
          <li>Detect, prevent, and address technical issues and security threats</li>
          <li>Comply with legal obligations</li>
        </ul>
      </Card>

      <Card>
        <h2 style={{ color: '#ffffff' }}>3. Information Sharing and Disclosure</h2>
        <p style={{ color: '#ffffff' }}>We do not sell your personal information. We may share your information in the following circumstances:</p>
        <ul style={{ color: '#ffffff' }}>
          <li><strong   style={{ color: '#ffffff' }}>With your consent:</strong> When you explicitly agree to share information</li>
          <li><strong style={{ color: '#ffffff' }}>With hackathon organizers:</strong> To facilitate hackathon participation and judging</li>
          <li><strong style={{ color: '#ffffff' }}>With service providers:</strong> Third-party services that help us operate our platform</li>
          <li><strong style={{ color: '#ffffff' }}>For legal reasons:</strong> When required by law or to protect our rights</li>
        </ul>
      </Card>

      <Card>
        <h2 style={{ color: '#ffffff' }}>4. Data Security</h2>
        <p style={{ color: '#ffffff' }}>
          We implement appropriate technical and organizational measures to protect your personal information 
          against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
          over the Internet is 100% secure, and we cannot guarantee absolute security.
        </p>
      </Card>

      <Card>
        <h2 style={{ color: '#ffffff' }}>5. Your Rights and Choices</h2>
        <p style={{ color: '#ffffff' }}>You have the right to:</p>
        <ul style={{ color: '#ffffff' }}>
          <li>Access and update your personal information</li>
          <li>Delete your account and personal data</li>
          <li>Opt-out of marketing communications</li>
          <li>Request a copy of your data</li>
          <li>Object to certain processing activities</li>
        </ul>
        <p style={{ color: '#ffffff' }}>To exercise these rights, please contact us at <strong>privacy@hackamaka.com</strong></p>
      </Card>

      <Card>
        <h2 style={{ color: '#ffffff' }}>6. Cookies and Tracking Technologies</h2>
        <p style={{ color: '#ffffff' }}>
          We use cookies and similar technologies to enhance your experience, analyze usage patterns, 
          and personalize content. You can control cookies through your browser settings, but this may 
          affect certain features of our platform.
        </p>
      </Card>

      <Card>
        <h2 style={{ color: '#ffffff' }}>7. Children's Privacy</h2>
        <p style={{ color: '#ffffff' }}>
          Our platform is not intended for users under the age of 13. We do not knowingly collect 
          personal information from children. If you believe we have collected information from a child, 
          please contact us immediately.
        </p>
      </Card>

      <Card>
        <h2 style={{ color: '#ffffff' }}>8. International Data Transfers</h2>
        <p style={{ color: '#ffffff' }}>
          Your information may be transferred to and processed in countries other than your country of residence.
          These countries may have different data protection laws. By using our platform, you consent to such transfers.
        </p>
      </Card>

      <div className="card">
        <h2 style={{ color: '#ffffff' }}>9. Changes to This Privacy Policy</h2>
        <p style={{ color: '#ffffff' }}>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting
          the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review
          this Privacy Policy periodically.
        </p>
      </div>

      <Card>
        <h2 style={{ color: '#ffffff' }}>10. Contact Us</h2>
        <p style={{ color: '#ffffff' }}>
          If you have any questions about this Privacy Policy, please contact us:
        </p>
        <ul style={{ color: '#ffffff' }}>
          <li><strong style={{ color: '#ffffff' }}>Email:</strong> privacy@hackamaka.com</li>
          <li><strong style={{ color: '#ffffff' }}>Address:</strong> Hackamaka Privacy Team, 123 Tech Street, San Francisco, CA 94102</li>
        </ul>
      </Card>
    </main>
  );
};

export default Privacy;
