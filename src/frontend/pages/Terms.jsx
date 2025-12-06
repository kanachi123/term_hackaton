import React from 'react';
import '../styles/pages/Terms.css';
import Card from '../components/ui/Card';

const Terms = () => {
  return (
    <main>
      <Card>
        <h1>Terms of Service</h1>
        <p style={{ color: '#ffffff', marginBottom: '30px' }}>
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        <p style={{ color: '#ffffff' }}>
          Please read these Terms of Service carefully before using Hackamaka. By accessing or using our platform, 
          you agree to be bound by these terms.
        </p>
      </Card>

      <Card>
        <h2 style={{ color: '#ffffff' }}>1. Acceptance of Terms</h2>
        <p style={{ color: '#ffffff' }}>
          By creating an account, accessing, or using Hackamaka, you acknowledge that you have read, understood, 
          and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, you may not use our platform.
        </p>
      </Card>

      <Card>
        <h2 style={{ color: '#ffffff' }}>2. Description of Service</h2>
        <p style={{ color: '#ffffff' }}>
          Hackamaka is a platform that connects developers, designers, and innovators to participate in hackathons, 
          collaborate on projects, and showcase their work. We provide tools for hackathon organization, team management, 
          project submission, and judging.
        </p>
      </Card>

      <Card>
        <h2 style={{ color: '#ffffff' }}>3. User Accounts</h2>
        <h3 style={{ color: '#ffffff' }}>3.1 Account Creation</h3>
        <p style={{ color: '#ffffff' }}>To use certain features, you must create an account. You agree to:</p>
        <ul>
          <li>Provide accurate, current, and complete information</li>
          <li>Maintain and update your information as necessary</li>
          <li>Maintain the security of your account credentials</li>
          <li>Accept responsibility for all activities under your account</li>
        </ul>

        <h3 style={{ color: '#ffffff' }}>3.2 Account Termination</h3>
        <p style={{ color: '#ffffff' }}>
          We reserve the right to suspend or terminate your account if you violate these terms or engage in 
          fraudulent, abusive, or illegal activity.
        </p>
      </Card>

      <Card>
        <h2 style={{ color: '#ffffff' }}>4. User Conduct</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Violate any applicable laws or regulations</li>
          <li>Infringe on intellectual property rights</li>
          <li>Upload malicious code, viruses, or harmful content</li>
          <li>Harass, abuse, or harm other users</li>
          <li>Impersonate others or provide false information</li>
          <li>Interfere with or disrupt the platform's operation</li>
          <li>Use automated systems to access the platform without permission</li>
          <li>Attempt to gain unauthorized access to our systems</li>
        </ul>
      </Card>

      <div className="card">
        <h2 style={{ color: '#ffffff' }}>5. Hackathon Participation</h2>
        <h3 style={{ color: '#ffffff' }}>5.1 Eligibility</h3>
        <p style={{ color: '#ffffff' }}>
          Each hackathon may have specific eligibility requirements. You are responsible for ensuring you meet 
          these requirements before participating.
        </p>

        <h3 style={{ color: '#ffffff' }}>5.2 Team Formation</h3>
        <p style={{ color: '#ffffff' }}>
          Teams must be formed in accordance with each hackathon's rules. Team members are jointly responsible 
          for their team's compliance with hackathon rules.
        </p>

        <h3 style={{ color: '#ffffff' }}>5.3 Project Submissions</h3>
        <p style={{ color: '#ffffff' }}>
          All submissions must be original work created during the hackathon period (unless otherwise specified). 
          You retain ownership of your projects but grant Hackamaka and hackathon organizers a license to display, 
          promote, and judge your submissions.
        </p>

        <h3 style={{ color: '#ffffff' }}>5.4 Judging and Prizes</h3>
        <p style={{ color: '#ffffff' }}>
          Judging decisions are final. Prize distribution is subject to verification of eligibility and compliance
          with hackathon rules. We are not responsible for disputes between participants and organizers.
        </p>
      </div>

      <Card>
        <h2 style={{ color: '#ffffff' }}>6. Intellectual Property</h2>
        <h3 style={{ color: '#ffffff' }}>6.1 Your Content</h3>
        <p style={{ color: '#ffffff' }}>
          You retain all rights to content you create and submit. By submitting content, you grant us a 
          worldwide, non-exclusive, royalty-free license to use, display, and distribute your content on our platform.
        </p>

        <h3 style={{ color: '#ffffff' }}>6.2 Our Content</h3>
        <p style={{ color: '#ffffff' }}>
          All content on Hackamaka, including logos, designs, and software, is owned by us or our licensors 
          and is protected by copyright and other intellectual property laws.
        </p>
      </Card>

      <Card>
        <h2 style={{ color: '#ffffff' }}>7. Disclaimers</h2>
        <p style={{ color: '#ffffff' }}>
          Hackamaka is provided "as is" without warranties of any kind. We do not guarantee that:
        </p>
        <ul>
          <li>The platform will be error-free or uninterrupted</li>
          <li>Defects will be corrected</li>
          <li>The platform is free of viruses or harmful components</li>
          <li>Hackathon results or prizes will meet your expectations</li>
        </ul>
      </Card>

      <div className="card">
        <h2 style={{ color: '#ffffff' }}>8. Limitation of Liability</h2>
        <p style={{ color: '#ffffff' }}>
          To the maximum extent permitted by law, Hackamaka and its affiliates shall not be liable for any
          indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues,
          whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
        </p>
      </div>

      <Card>
        <h2 style={{ color: '#ffffff' }}>9. Indemnification</h2>
        <p style={{ color: '#ffffff' }}>
          You agree to indemnify and hold harmless Hackamaka, its officers, directors, employees, and agents 
          from any claims, damages, losses, liabilities, and expenses arising out of your use of the platform, 
          violation of these terms, or infringement of any rights of another.
        </p>
      </Card>

      <Card>
        <h2 style={{ color: '#ffffff' }}>10. Modifications to Terms</h2>
        <p style={{ color: '#ffffff' }}>
          We reserve the right to modify these terms at any time. We will notify users of significant changes. 
          Continued use of the platform after changes constitutes acceptance of the modified terms.
        </p>
      </Card>

      <Card>
        <h2 style={{ color: '#ffffff' }}>11. Governing Law</h2>
        <p style={{ color: '#ffffff' }}>
          These terms shall be governed by and construed in accordance with the laws of the State of California, 
          without regard to its conflict of law provisions.
        </p>
      </Card>

      <Card>
        <h2 style={{ color: '#ffffff' }}>12. Contact Information</h2>
        <p style={{ color: '#ffffff' }}>If you have questions about these Terms of Service, please contact us:</p>
        <ul>
          <li><strong>Email:</strong> legal@hackamaka.com</li>
          <li><strong>Address:</strong> Hackamaka Legal Team, 123 Tech Street, San Francisco, CA 94102</li>
        </ul>
      </Card>
    </main>
  );
};

export default Terms;
