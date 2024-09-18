'use client';
import { InputHTMLAttributes } from 'react';

import './Input.css';

const Input = ({ ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  return <input {...props} autoComplete='off' className='input' />;
};

export { Input };
