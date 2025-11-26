// hooks/useModal.js
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function useModal() {
  const navigate = useNavigate();
  const location = useLocation();

  const openModal = (path) => {
    navigate(path, {
      state: { backgroundLocation: location }
    });
  };

  const closeModal = () => {
    const bg = location.state?.backgroundLocation;

    if (bg) {
      navigate(bg.pathname + bg.search + bg.hash);
    } else {
      navigate("/");
    }
  };

  return { openModal, closeModal };
}
