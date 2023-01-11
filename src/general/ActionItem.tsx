import React from 'react';
interface IProps {
  children: React.ReactNode;
}

const ActionItem: React.FC<IProps> = ({ children }) => {
  return (
    <div className="hover:bg-green-600 p-4 rounded-full hover:text-white transition duration-75 cursor-pointer">
      {children}
    </div>
  );
};

export default ActionItem;
