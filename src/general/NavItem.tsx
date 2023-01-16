import { TNavRoute } from 'data/routes';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import DropdownItem from './DropdownItem';

interface IProps {
  item: TNavRoute;
}
const NavItem: React.FC<IProps> = ({ item }) => {
  const { DropdownComp } = item;
  const [showDrop, setShowDrop] = useState(false);
  return (
    <motion.div
      className="cursor-pointer flex gap-2 items-center relative"
      onHoverStart={() => setShowDrop(true)}
      onHoverEnd={() => setShowDrop(false)}
      role={`menuitem`}
    >
      {item?.highlight && (
        <motion.div
          animate={{ marginBottom: showDrop ? 8 : 0 }}
          className="uppercase absolute bottom-6 left-8 -rotate-6 origin-bottom-left"
        >
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
        </motion.div>
      )}
      <item.icon className="text-green-300 text-xl" />

      <div className="flex gap-2 items-center pointer uppercase font-bold">
        <span>{item.name}</span>
        {DropdownComp && <RiArrowDropDownLine />}
      </div>
      {DropdownComp && showDrop && <DropdownItem>{DropdownComp}</DropdownItem>}
    </motion.div>
  );
};

export default NavItem;
