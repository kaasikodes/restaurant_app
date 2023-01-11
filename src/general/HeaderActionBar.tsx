import React from 'react';
interface IProps {
  children: React.ReactNode;
}

const HeaderActionBar: React.FC<IProps> = ({
  children,
}): React.ReactElement => {
  return (
    <div className="flex items-center py-2 px-4 shadow-sm bg-white rounded-full">
      {children}
    </div>
  );
};

export default HeaderActionBar;
