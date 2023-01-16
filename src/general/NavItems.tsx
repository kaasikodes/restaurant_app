import { TNavRoute } from 'data/routes';
import React from 'react';
import NavItem from './NavItem';

interface IProps {
  items: TNavRoute[];
}

const NavItems: React.FC<IProps> = ({ items }) => {
  return (
    <div className="flex justify-evenly gap-4" role={'menu'}>
      {items.map((item) => (
        <NavItem key={item.name} item={item} />
      ))}
    </div>
  );
};

export default NavItems;
