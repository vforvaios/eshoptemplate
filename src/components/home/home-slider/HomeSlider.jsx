import React from 'react';
import { Link } from 'react-router-dom';

const HomeSlider = ({ banners }) => {
  return (
    <div className="accordion">
      <ul>
        {banners?.map((banner, index) =>
          !banner?.isVideo ? (
            <li
              key={banner.id}
              tabIndex={index}
              style={{
                backgroundImage: `url('${import.meta.env.VITE_IMAGES_URL}/${
                  banner.imgHref
                }')`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
              }}>
              <div>
                <Link to={banner.link}>
                  <h2>{banner.title}</h2>
                </Link>
              </div>
            </li>
          ) : (
            <li className="videoLi" key={banner.id}>
              <div>
                <video autoPlay loop muted playsInline>
                  <source
                    type="video/mp4"
                    src={`${import.meta.env.VITE_IMAGES_URL}/${banner.imgHref}`}
                  />
                </video>
                <Link to={banner.link}>
                  <h2>{banner.title}</h2>
                </Link>
              </div>
            </li>
          ),
        )}
      </ul>
    </div>
  );
};

export default HomeSlider;
