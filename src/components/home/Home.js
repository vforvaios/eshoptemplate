/* eslint-disable react-hooks/exhaustive-deps */
import SEO from 'components/seo/SEO';
import { getHomePageData } from 'models/actions/homeActions';
import { homeOffers } from 'models/selectors/homeSelectors';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HomeOffersTabs from './home-offer-tabs/HomeOffersTabs';
import HomeSlider from './home-slider/HomeSlider';

const Home = () => {
  const offers = useSelector(homeOffers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHomePageData());
  }, []);

  return (
    <>
      <SEO
        title="Shoppy home page"
        description="Shoppy home page"
        name="Shoppy"
        type="article"
      />
      <div className="homeBG">
        <div className="row">
          <HomeSlider />
        </div>
        <div className="row">
          <div className="wrapper">
            <HomeOffersTabs offers={offers} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
