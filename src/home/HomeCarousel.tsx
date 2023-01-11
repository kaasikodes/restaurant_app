import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel as ReactCarousel } from 'react-responsive-carousel';

export type THomeCarouselItem = {
  photo: string;
  text: string;
};

interface IProps {
  items: THomeCarouselItem[];
}

const Carousel: React.FC<IProps> = ({ items }) => {
  return (
    <ReactCarousel
      infiniteLoop
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
    >
      {items.map((item, i) => (
        <div style={{ height: '600px' }} key={i}>
          <div className="relative">
            <img src={item.photo} alt={item.text} className="object-contain" />
            <div className="absolute top-32 flex items-center justify-center w-full  z-10">
              <h4 className="text-white text-6xl capitalize font-bold leading-10">
                {item.text}
              </h4>
            </div>
          </div>
        </div>
      ))}
    </ReactCarousel>
  );
};

export default Carousel;
