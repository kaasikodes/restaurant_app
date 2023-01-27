import React from 'react';

export interface IProduct {
  id: string;
  name: string;
}

interface IProps {
  product: IProduct;
}

const ProductItem = ({ product }: IProps) => {
  return (
    <div role={`listitem`}>
      <span>{product.name}</span>
    </div>
  );
};

export default ProductItem;
