import React, { useState } from 'react';
import '../styles/pages/CreateHackaton.css';
import TextInput from '../components/ui/TextInput';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const CreateHackaton = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    location: 'online',
    maxParticipants: '',
    maxTeamSize: '',
    categories: [],
    prizes: '',
    rules: '',
    requirements: ''
  });

  const categories = ['Web Development', 'Mobile App', 'AI/ML', 'Blockchain', 'IoT', 'Game Development', 'Design', 'Other'];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Hackathon created successfully! It will be reviewed before going live.');
    // Reset form
    setFormData({
      title: '',
      description: '',
      startDate: '',
      endDate: '',
      location: 'online',
      maxParticipants: '',
      maxTeamSize: '',
      categories: [],
      prizes: '',
      rules: '',
      requirements: ''
    });
  };

  const handleCategoryToggle = (category) => {
    setFormData({
      ...formData,
      categories: formData.categories.includes(category)
        ? formData.categories.filter(c => c !== category)
        : [...formData.categories, category]
    });
  };

  return (
    <main>
      <Card>
        <h1>Create a Hackathon</h1>
        <p>Organize your own hackathon and bring together developers, designers, and innovators.</p>
      </Card>

      <form onSubmit={handleSubmit}>
        <Card>
          <h2>Basic Information</h2>
          <label>
            Hackathon Title *
            <TextInput
              value={formData.title}
              onChange={(value) => setFormData({ ...formData, title: value })}
              placeholder="e.g., Spring 2024 Innovation Challenge"
              required
            />
          </label>

          <label>
            Description *
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Describe your hackathon, its goals, and what participants can expect..."
              rows="6"
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #4f6cc3ff',
                fontFamily: 'inherit',
                fontSize: '14px',
                resize: 'vertical',
                marginTop: '5px'
              }}
            />
          </label>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            <label>
              Start Date & Time *
              <input
                type="datetime-local"
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '5px',
                  border: '1px solid #4f6cc3ff',
                  fontFamily: 'inherit',
                  fontSize: '14px',
                  marginTop: '5px'
                }}
              />
            </label>

            <label>
              End Date & Time *
              <input
                type="datetime-local"
                value={formData.endDate}
                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '5px',
                  border: '1px solid #4f6cc3ff',
                  fontFamily: 'inherit',
                  fontSize: '14px',
                  marginTop: '5px'
                }}
              />
            </label>
          </div>
        </Card>

        <div className="card">
          <h2>Location & Format</h2>
          <label>
            Location Type *
            <select
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
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
              <option value="online">Online (Virtual)</option>
              <option value="offline">In-Person</option>
              <option value="hybrid">Hybrid (Online + In-Person)</option>
            </select>
          </label>

          {formData.location !== 'online' && (
            <label>
              Physical Location
              <TextInput
                value={formData.physicalLocation || ''}
                onChange={(value) => setFormData({ ...formData, physicalLocation: value })}
                placeholder="Address or venue name"
              />
            </label>
          )}
        </div>

        <Card>
          <h2>Participation Rules</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            <label>
              Maximum Participants
              <TextInput
                type="number"
                value={formData.maxParticipants}
                onChange={(value) => setFormData({ ...formData, maxParticipants: value })}
                placeholder="Leave empty for unlimited"
              />
            </label>

            <label>
              Maximum Team Size *
              <TextInput
                type="number"
                value={formData.maxTeamSize}
                onChange={(value) => setFormData({ ...formData, maxTeamSize: value })}
                placeholder="e.g., 5"
                required
              />
            </label>
          </div>

          <label>
            Categories *
            <div className="categories-grid" style={{ marginTop: '10px' }}>
              {categories.map((category) => (
                <label key={category} className="checkbox-label" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <input
                    type="checkbox"
                    checked={formData.categories.includes(category)}
                    onChange={() => handleCategoryToggle(category)}
                    style={{ marginRight: '8px' }}
                  />
                  <span>{category}</span>
                </label>
              ))}
            </div>
          </label>
        </Card>

        <Card>
          <h2>Prizes & Rewards</h2>
          <label>
            Prize Information
            <textarea
              value={formData.prizes}
              onChange={(e) => setFormData({ ...formData, prizes: e.target.value })}
              placeholder="Describe prizes, rewards, and recognition for winners..."
              rows="4"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #4f6cc3ff',
                fontFamily: 'inherit',
                fontSize: '14px',
                resize: 'vertical',
                marginTop: '5px'
              }}
            />
          </label>
        </Card>

        <Card>
          <h2>Rules & Requirements</h2>
          <label>
            Rules *
            <textarea
              value={formData.rules}
              onChange={(e) => setFormData({ ...formData, rules: e.target.value })}
              placeholder="List the rules and guidelines for participants..."
              rows="5"
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #4f6cc3ff',
                fontFamily: 'inherit',
                fontSize: '14px',
                resize: 'vertical',
                marginTop: '5px'
              }}
            />
          </label>

          <label>
            Requirements
            <textarea
              value={formData.requirements}
              onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
              placeholder="Any specific requirements (skills, tools, etc.)..."
              rows="4"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #4f6cc3ff',
                fontFamily: 'inherit',
                fontSize: '14px',
                resize: 'vertical',
                marginTop: '5px'
              }}
            />
          </label>
        </Card>

        <Card>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'flex-end' }}>
            <Button type="button" style={{ background: '#6C5B7B' }}>Save as Draft</Button>
            <Button type="submit">Create Hackathon</Button>
          </div>
          <p style={{ marginTop: '15px', fontSize: '14px', color: '#6C5B7B' }}>
            * Required fields. Your hackathon will be reviewed before it goes live.
          </p>
        </Card>
      </form>
    </main>
  );
};

export default CreateHackaton;
