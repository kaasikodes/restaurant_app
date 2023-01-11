import React from 'react';

export type TShowCaseItem = { photo: string; name: string };

interface IProps {
  item: TShowCaseItem;
}

const ShowcaseItem: React.FC<IProps> = ({ item }) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="h-48 w-48">
        <img
          src={item.photo}
          alt={item.name}
          className=" object-cover h-full w-full rounded-full border border-green-500"
        />
      </div>

      <h6 className="uppercase text-sm">{item.name}</h6>
    </div>
  );
};

export default ShowcaseItem;
