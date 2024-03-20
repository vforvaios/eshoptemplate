import { Tooltip } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const HomeLastBanner = ({ banner }) => {
  return (
    <div className="row">
      <div className="last-banner-section">
        {banner.link ? (
          <Link to={banner.link}>
            <Tooltip title={banner.description}>
              <img
                alt={banner.description}
                src={`${process.env.REACT_APP_IMAGES_URL}/${banner.imgHref}`}
              />
            </Tooltip>
          </Link>
        ) : (
          <Tooltip title={banner.description}>
            <img
              alt={banner.description}
              src={`${process.env.REACT_APP_IMAGES_URL}/${banner.imgHref}`}
            />
          </Tooltip>
        )}
      </div>
    </div>
  );
};

export default HomeLastBanner;
