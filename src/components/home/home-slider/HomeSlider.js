import React from 'react';
import { Link } from 'react-router-dom';

const HomeSlider = ({ banners }) => {

  return (
    <div className="accordion">
      <ul>
        {banners?.map((banner, index) => (
          <li key={banner.id} tabIndex={index} style={{
            backgroundImage: `url('${process.env.REACT_APP_API}/${banner.imgHref}')`, backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center', backgroundSize: 'cover',
          }}>
            <div>
              <Link to={`/product/${banner.productId}`} >
                <h2>{banner.title}</h2>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div >
  );
};

export default HomeSlider;
