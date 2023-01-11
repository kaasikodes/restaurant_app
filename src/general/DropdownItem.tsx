import { motion } from 'framer-motion';
import React from 'react';

interface IProps {
  children: React.ReactNode;
}
const DropdownItem: React.FC<IProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`absolute top-8 left-8 rounded-lg bg-white px-4 py-4 shadow-lg`}
    >
      {children}
    </motion.div>
  );
};

export default DropdownItem;
