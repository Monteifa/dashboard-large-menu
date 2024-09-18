'use client';
import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: 'primary' | 'secondary';
}

import './Button.css';

const Button = ({ children, variant, ...props }: ButtonProps) => {
  return (
    <button {...props} className={`button ${variant}`}>
      {children}
    </button>
  );
};

export default Button;
