// hooks/useModal.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = (path) => {
    setIsOpen(true);
    navigate(path, { state: { backgroundLocation: window.location } });
  };

  const closeModal = () => {
    setIsOpen(false);
    navigate(-1);
  };

  return { isOpen, openModal, closeModal };
}
