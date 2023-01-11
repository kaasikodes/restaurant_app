import React from 'react';
import ShowcaseItem, { TShowCaseItem } from './ShowcaseItem';

interface IProps {
  items: TShowCaseItem[];
}

const ShowCaseItems: React.FC<IProps> = ({ items }) => {
  return (
    <div className="flex gap-4">
      {items.map((item) => (
        <ShowcaseItem key={item.name} item={item} />
      ))}
    </div>
  );
};

export default ShowCaseItems;
