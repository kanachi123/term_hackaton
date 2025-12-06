import React, { useState } from "react";
import '../styles/auth.css';
import TextInput from '../components/ui/TextInput';
import Button from '../components/ui/Button';
import useModal from '../hooks/useModal';

export default function Signup({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { closeModal } = useModal();

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      closeModal();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire to auth API
    alert(`Registering ${name} <${email}>`);
    handleClose();
  };

  return (
    <div className="auth-page">
      <h2>Sign Up</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label>
          Name
          <TextInput
            type="text"
            value={name}
            onChange={(val) => setName(val)}
            required
            placeholder="Enter your name"
          />
        </label>
        <label>
          Email
          <TextInput
            type="email"
            value={email}
            onChange={(val) => setEmail(val)}
            required
            placeholder="Enter your email"
          />
        </label>
        <label>
          Password
          <TextInput
            type="password"
            value={password}
            onChange={(val) => setPassword(val)}
            required
            placeholder="Enter your password"
          />
        </label>
        <Button type="submit">Create account</Button>
      </form>
    </div>
  );
}
