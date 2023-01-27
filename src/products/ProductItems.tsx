import React from 'react';
import ProductItem, { IProduct } from './ProductItem';

interface IProps {
  products: IProduct[];
}

const ProductItems = ({ products }: IProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {products.map((item) => (
        <ProductItem key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ProductItems;
