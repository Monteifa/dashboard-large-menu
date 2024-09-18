'use client';
import { ReactNode } from 'react';

import './InputGroup.css';

interface InputGroupProps {
  id: string;
  children: ReactNode;
  label: string;
}

const InputGroup = ({ id, children, label }: InputGroupProps) => {
  return (
    <div className='input_group'>
      <label htmlFor={id}>{label}</label>

      {children}
    </div>
  );
};

export { InputGroup };
