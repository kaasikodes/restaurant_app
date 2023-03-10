import { GlobalContext } from 'contexts/GlobalContextProvider';
import React, { useContext, useEffect, useState } from 'react';
import { getProducts } from 'services/api/products';
import { IProduct } from './ProductItem';
import ProductItems from './ProductItems';

const ProductsContainer = () => {
  const [data, setData] = useState<IProduct[]>([]);
  const [requestState, setRequestState] = useState<
    '' | 'error' | 'success' | 'loading'
  >('');
  const { state } = useContext(GlobalContext);
  const { currentProductId } = state;
  useEffect(() => {
    setRequestState('loading');
    getProducts()
      .then((data: any) => {
        const items = data.map(
          (item: any): IProduct => ({ id: item.id, name: item.title })
        );
        setData(items);
        setRequestState('success');
      })
      .catch(() => setRequestState('error'));
  }, []);
  return (
    <>
      <h4>Products</h4>
      <h6>CurrentProductId: {currentProductId}</h6>
      {requestState === 'loading' && <span>{requestState}</span>}
      {requestState === 'error' && <span>{requestState}</span>}
      {requestState === 'success' && (
        <ul className="mx-4 my-4">
          <ProductItems products={data} />
        </ul>
      )}
    </>
  );
};

export default ProductsContainer;
