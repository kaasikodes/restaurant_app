import React from 'react';

interface IProps {
  children: React.ReactNode;
}

const NavBar: React.FC<IProps> = ({ children }) => {
  return (
    <div className="bg-green-500 mx-12 rounded-full px-6 py-4 mt-12">
      {children}
    </div>
  );
};

export default NavBar;
