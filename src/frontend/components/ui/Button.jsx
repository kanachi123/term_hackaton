import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/ui/Button.css';

export default function Button({ as = 'button', to, children, className: customClassName, style, ...props }) {
  const className = customClassName || 'pixel-button';

  if (to) {
    return (
      <Link
        to={to}
        className={className}
        style={{ textDecoration: 'none', display: 'inline-block', ...style }}
        {...props}
      >
        {children}
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
