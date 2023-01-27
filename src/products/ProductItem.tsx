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
    <li>
      <span>{product.name}</span>
    </li>
  );
};

export default ProductItem;
