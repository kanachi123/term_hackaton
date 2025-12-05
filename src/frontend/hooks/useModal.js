import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function useModal() {
  const navigate = useNavigate();
  const location = useLocation();
  const isOpen = Boolean(location.state && location.state.backgroundLocation);

  const openModal = (path) => {
    navigate(path, {
      state: { backgroundLocation: location },
    });
  };

  const closeModal = () => {
    const bg = location.state?.backgroundLocation;

    if (bg) {
      navigate(bg.pathname + (bg.search || "") + (bg.hash || ""));
    } else {
      navigate("/");
    }
  };

  return { openModal, closeModal, isOpen };
}
