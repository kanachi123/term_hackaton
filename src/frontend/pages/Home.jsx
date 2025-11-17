import React, { useState } from 'react';
import '../styles/index.css';
import '../styles/App.css';
//import Modal from '../components/ui/Modal';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import TextInput from '../components/ui/TextInput';
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [regModal, setRegModal] = useState(false);

  return (
          <Card><form onSubmit={(e) => { e.preventDefault(); setRegModal(false); }}>
          <TextInput type="text" placeholder="NICKNAME" required />
          <TextInput type="email" placeholder="E-MAIL@geocities.com" required />
          <TextInput type="password" placeholder="PASSWORD (max 8 chars)" maxLength={8} required />
          <TextInput type="password" placeho lder=" submit Password (max 8 chars)" maxLength={8} required />
          
          <Button type="submit" className="submit-btn">
            ENTER THE MATRIX
          </Button>
        </form></Card>
        
        
  );
}