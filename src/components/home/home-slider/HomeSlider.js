import { homeBanners } from 'models/selectors/homeSelectors';
import React from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';

const HomeSlider = () => {
  const banners = useSelector(homeBanners);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {banners?.map((banner) => (
        <div className="homeSlickSlide" key={banner.id}>
          <picture>
            <source media="(max-width: 767px)" srcSet={banner.respimg} />
            <img
              src={banner.img}
              alt="Chris standing up holding his daughter Elva"
            />
          </picture>
        </div>
      ))}
    </Slider>
  );
};

export default HomeSlider;
