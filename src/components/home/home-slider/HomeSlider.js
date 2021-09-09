import React from 'react';
import Slider from 'react-slick';

import './homeSlider.scss';

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="homeSlickSlide">
        <img src="https://via.placeholder.com/1920x600" alt="slider" />
      </div>
      <div className="homeSlickSlide">
        <img src="https://via.placeholder.com/1920x600" alt="slider" />
      </div>
      <div className="homeSlickSlide">
        <img src="https://via.placeholder.com/1920x600" alt="slider" />
      </div>
      <div className="homeSlickSlide">
        <img src="https://via.placeholder.com/1920x600" alt="slider" />
      </div>
      <div className="homeSlickSlide">
        <img src="https://via.placeholder.com/1920x600" alt="slider" />
      </div>
      <div className="homeSlickSlide">
        <img src="https://via.placeholder.com/1920x600" alt="slider" />
      </div>
    </Slider>
  );
};
export default HomeSlider;
