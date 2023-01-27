import React, { useEffect, useState } from 'react';
import { getProducts } from 'services/api/products';
import { IProduct } from './ProductItem';
import ProductItems from './ProductItems';

const ProductsContainer = () => {
  const [data, setData] = useState<IProduct[]>([]);
  useEffect(() => {
    getProducts().then((data) => {
      const items = data.map(
        (item): IProduct => ({ id: item.id, name: item.title })
      );
      setData(items);
    });
  }, []);
  return (
    <div className="mx-4 my-4">
      <ProductItems products={data} />
    </div>
  );
};

export default ProductsContainer;
