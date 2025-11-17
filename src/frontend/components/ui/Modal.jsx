import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ children, isOpen, onClose, title = "HACKATON 98", className = "" }) {
  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    if (isOpen) {
      document.addEventListener('keydown', esc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', esc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className={`modal-window ${className}`} onClick={e => e.stopPropagation()}>
        <div className="modal-titlebar">
          <span> {title}</span>
          <button className="modal-close-btn" onClick={onClose}>X</button>
        </div>
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}