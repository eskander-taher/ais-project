import React from 'react';
import './Button.css';

const Button = ({ onClick, label, variant }) => {
  return (
    <button className={`custom-button ${variant}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
