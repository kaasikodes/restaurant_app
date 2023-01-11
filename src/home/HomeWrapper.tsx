import { homeCarouselItems } from 'data/home';
import React from 'react';
import HomeCarousel from './HomeCarousel';

const HomeWrapper = () => {
  return (
    <div>
      <div className="h-64" />
      <HomeCarousel items={homeCarouselItems} />
    </div>
  );
};

export default HomeWrapper;
