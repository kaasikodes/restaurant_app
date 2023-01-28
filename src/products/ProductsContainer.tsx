import React, { useEffect, useState } from 'react';
import { getProducts } from 'services/api/products';
import { IProduct } from './ProductItem';
import ProductItems from './ProductItems';

const ProductsContainer = () => {
  const [data, setData] = useState<IProduct[]>([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        return res.json();
      })
      .then((data: any) => {
        console.log('dsdsd', data);
        const items = data.map(
          (item: any): IProduct => ({ id: item.id, name: item.title })
        );
        setData(items);
      });
  }, []);
  return (
    <>
      <h4>Love</h4>
      <ul className="mx-4 my-4">
        <ProductItems products={data} />
      </ul>
    </>
  );
};

export default ProductsContainer;
