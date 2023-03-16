import React from 'react';

import BarLoader from 'react-spinners/BarLoader';

interface IProps {
  height?: string;
}

const Loader = ({ height = 'h-72' }: IProps) => {
  return (
    <div className={`${height}  w-full flex justify-center items-center`}>
      <BarLoader color="#0080FE" />
    </div>
  );
};

export default Loader;
