import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import '../styles/auth.css';
import TextInput from '../components/ui/TextInput';
import Button from '../components/ui/Button';
import useModal from '../hooks/useModal';
import { useAuth } from '../hooks/useAuth';

export default function Login({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { closeModal } = useModal();
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      closeModal();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Для демо: если email содержит "admin", даем админские права
    const isAdmin = email.toLowerCase().includes('admin');
    const userData = {
      email,
      name: email.split('@')[0],
      role: isAdmin ? 'admin' : 'user'
    };

    login(userData, isAdmin);

    // Закрываем модалку
    handleClose();

    // Перенаправляем на страницу, с которой пришли, или на главную
    const from = location.state?.from?.pathname || '/';
    if (isAdmin && from === '/') {
      navigate('/dashboard');
    } else {
      navigate(from);
    }
  };

  return (
    <div className="auth-page">
      <h2>Login</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
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
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}
