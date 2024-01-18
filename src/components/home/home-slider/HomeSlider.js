import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const HomeSlider = ({ banners }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchMove: true,
  };

  return (
    <Slider {...settings}>
      <div className="homeSlickSlide" key={'vaios'}>
        <video preload="auto" width={'100%'} autoPlay loop muted>
          <source  src={`${process.env.PUBLIC_URL}/video.mp4`} type="video/mp4"/>
        </video>
      </div>
      {banners?.map((banner) =>
        banner?.product_id ? (
          <div className="homeSlickSlide" key={banner.id}>
            <Link to={`product/${banner.product_id}`}>
              <img
                // src={`${process.env.REACT_APP_IMAGES_URL}/${banner.imgHref}`}
                src={'https://via.assets.so/movie.png?id=4&q=80&w=1350&h=500'}
                alt={banner.title}
                title={banner.title}
              />
            </Link>
          </div>
        ) : (
          <div className="homeSlickSlide" key={banner.id}>
            <img
              src={`${process.env.REACT_APP_IMAGES_URL}/${banner.imgHref}`}
              alt={banner.title}
              title={banner.title}
            />
          </div>
        ),
      )}
    </Slider>
  );
};

export default HomeSlider;
