import { TNavRoute } from 'data/routes';
import React from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import DropdownItem from './DropdownItem';

interface IProps {
  item: TNavRoute;
}
const NavItem: React.FC<IProps> = ({ item }) => {
  const { DropdownComp } = item;
  return (
    <div className="pointer uppercase font-bold flex gap-2 items-center relative">
      {item?.highlight && (
        <div className="absolute bottom-6 left-8 -rotate-6 origin-bottom-left">
          <div
            className={`px-2 py-1 rounded-md ${
              typeof item.highlight === 'string'
                ? 'bg-red-700'
                : item.highlight.color
            } text-xs text-white`}
          >
            <span>
              {typeof item.highlight === 'string'
                ? item.highlight
                : item.highlight.value}
            </span>
          </div>
        </div>
      )}
      <item.icon className="text-green-300 text-xl" />

      <div className="flex gap-2 items-center">
        <span>{item.name}</span>
        <RiArrowDropDownLine />
      </div>
      {DropdownComp && <DropdownItem>{DropdownComp}</DropdownItem>}
    </div>
  );
};

export default NavItem;
