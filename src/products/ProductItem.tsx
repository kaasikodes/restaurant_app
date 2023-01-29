import React from 'react';

export interface IProduct {
  id: string;
  name: string;
}

interface IProps {
  product: IProduct;
  handleClick: () => void;
}

const ProductItem = ({ product, handleClick }: IProps) => {
  const showDetails = (e: React.MouseEvent) => {
    handleClick();
  };
  return (
    <div role={'listitem'} className="cursor-pointer" onClick={showDetails}>
      <span>{product.name}</span>
    </div>
  );
};

export default ProductItem;
