import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/ui/Button.css';

export default function Button({ as = 'button', to, children, ...props }) {
  const className = 'pixel-button';

  if (to) {
    return (
      <Link
        to={to}
        {...props}
        style={{ textDecoration: 'none', ...props.style }}
      >
        <button className={className} {...props}>
          {children}
        </button>
      </Link>
    );
  }

  if (as === 'a') {
    return (
      <a className={className} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
