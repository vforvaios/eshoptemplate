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
                backgroundImage: `url('${process.env.REACT_APP_IMAGES_URL}/${banner.imgHref}')`,
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
            <li className="videoLi">
              <div>
                <video autoPlay loop muted>
                  <source
                    type="video/mp4"
                    src={`${process.env.REACT_APP_IMAGES_URL}/${banner.imgHref}`}
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
