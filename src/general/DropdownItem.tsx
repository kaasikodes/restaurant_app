import React from 'react';

interface IProps {
  children: React.ReactNode;
}
const DropdownItem: React.FC<IProps> = ({ children }) => {
  return (
    <div
      className={`absolute top-8 left-8 rounded-lg bg-white px-4 py-4 shadow-lg`}
    >
      {children}
    </div>
  );
};

export default DropdownItem;
