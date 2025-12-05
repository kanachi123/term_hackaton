
import React, { useState } from "react";
import '../styles/auth.css';
import Modal from '../components/ui/Modal';
import TextInput from '../components/ui/TextInput';
import useModal from '../hooks/useModal';

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { isOpen, closeModal } = useModal();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire to auth API
    alert(`Registering ${name} <${email}>`);
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <div className="auth-page">
        <h2>Sign Up</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            Name
            <TextInput value={name} onChange={setName} required placeholder="Enter your name" />
          </label>
          <label>
            Email
            <TextInput type="email" value={email} onChange={setEmail} required placeholder="Enter your email" />
          </label>
          <label>
            Password
            <TextInput type="password" value={password} onChange={setPassword} required placeholder="Enter your password" />
          </label>
          <button type="submit" className="pixel-button">Create account</button>
        </form>
      </div>
    </Modal>
  );
}
