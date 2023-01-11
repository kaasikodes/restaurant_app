import React from 'react';

interface IProps {
  children: React.ReactNode;
  bg?: string;
}

const Button: React.FC<IProps> = ({ children, bg = 'bg-red-700' }) => {
  return (
    <button
      className={`rounded-full p-2 ${bg} hover:opacity-80 text-sm font-bold text-white shadow-sm`}
    >
      {children}
    </button>
  );
};

export default Button;
