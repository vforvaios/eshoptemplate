import React from 'react';
import Slider from 'react-slick';

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
      {[1, 2, 3, 4]?.map((item) => (
        <div className="homeSlickSlide" key={item}>
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet="https://via.placeholder.com/767x500"
            />
            <img
              src="https://via.placeholder.com/1920x600"
              alt="Chris standing up holding his daughter Elva"
            />
          </picture>
        </div>
      ))}
    </Slider>
  );
};
export default HomeSlider;
