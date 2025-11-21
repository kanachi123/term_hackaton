import React, { useState } from 'react';
import '../styles/index.css';
import '../styles/App.css';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import TextInput from '../components/ui/TextInput';
import Modal from '../components/ui/Modal';

export default function Home() {
  const [regModal, setRegModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setRegModal(true)}>Open Registration</Button>

      <Modal isOpen={regModal} onClose={() => setRegModal(false)}>
        <Card>
          <form onSubmit={(e) => { e.preventDefault(); setRegModal(false); }}>
            <TextInput type="text" placeholder="NICKNAME" required />
            <TextInput type="email" placeholder="E-MAIL@geocities.com" required />
            <TextInput type="password" placeholder="PASSWORD (max 8 chars)" maxLength={8} required />
            <TextInput type="password" placeholder="CONFIRM PASSWORD" maxLength={8} required />
            <Button type="submit" className="submit-btn">
              <h6>ENTER THE MATRIX</h6>
            </Button>
          </form>
        </Card>
      </Modal>
    </div>
  );
}
