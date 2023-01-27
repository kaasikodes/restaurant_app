import React, { useEffect, useState } from 'react';
import { getProducts } from 'services/api/products';
import { IProduct } from './ProductItem';
import ProductItems from './ProductItems';

const ProductsContainer = () => {
  const [data, setData] = useState<IProduct[]>([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        console.log(res);
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
    <ul className="mx-4 my-4">
      {/* <ProductItems products={data} /> */}

      {data?.map((item) => (
        <li key={item.name}> {item.name}</li>
      ))}
    </ul>
  );
};

export default ProductsContainer;
