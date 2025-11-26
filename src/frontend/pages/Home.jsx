import React, { useState } from 'react';
import '../styles/index.css';
import '../styles/App.css';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import TextInput from '../components/ui/TextInput';
import Modal from '../components/ui/Modal';

export default function Home() {
  const [regModal, setRegModal] = useState(false);

  // Состояние для формы
  const [formData, setFormData] = useState({
    nickname: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (value, fieldName) => {
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Логика для обработки данных (например, отправка на сервер)
    console.log(formData);
    setRegModal(false); // Закрытие модального окна после отправки формы
  };

  return (
    <div>
      <Button onClick={() => setRegModal(true)}>Open Registration</Button>
      <Card>
        <Modal isOpen={regModal} onClose={() => setRegModal(false)}>
          <form onSubmit={handleSubmit}>
            <TextInput
              label="Nickname"
              name="nickname"
              value={formData.nickname}
              onChange={(value) => handleInputChange(value, 'nickname')} // Передаем значение
              placeholder="NICKNAME"
              required
            />
            <TextInput
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={(value) => handleInputChange(value, 'email')} // Передаем значение
              placeholder="E-MAIL@geocities.com"
              required
            />
            <TextInput
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={(value) => handleInputChange(value, 'password')} // Передаем значение
              placeholder="PASSWORD (max 8 chars)"
              maxLength={8}
              required
            />
            <TextInput
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={(value) => handleInputChange(value, 'confirmPassword')} // Передаем значение
              placeholder="CONFIRM PASSWORD"
              maxLength={8}
              required
            />
            <Button type="submit" className="pixel-button">
              Submit
            </Button>
          </form>
        </Modal>
      </Card>
    </div>
  );
}
