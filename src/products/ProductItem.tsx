import { EGlobalOps, GlobalContext } from 'contexts/GlobalContextProvider';
import React, { useContext } from 'react';

export interface IProduct {
  id: string;
  name: string;
}

interface IProps {
  product: IProduct;
  handleClick: () => void;
}

const ProductItem = ({ product, handleClick }: IProps) => {
  const { dispatch } = useContext(GlobalContext);
  const showDetails = (e: React.MouseEvent) => {
    dispatch({ type: EGlobalOps.setCurrentProductId, payload: product.id });
    handleClick();
  };
  return (
    <div
      role={'listitem'}
      className="cursor-pointer bg-slate-100 p-4 shadow-lg"
      onClick={showDetails}
    >
      <span>{product.name}</span>
    </div>
  );
};

export default ProductItem;
