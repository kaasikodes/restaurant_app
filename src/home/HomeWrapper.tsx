import { homeCarouselItems } from 'data/home';
import ProductsContainer from 'products/ProductsContainer';
import React from 'react';
import HomeCarousel from './HomeCarousel';

const HomeWrapper = () => {
  return (
    <div>
      <div className="h-64" />
      <HomeCarousel items={homeCarouselItems} />
      <ProductsContainer />
    </div>
  );
};

export default HomeWrapper;
