import SEO from '@/components/seo/SEO';
import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="notfound content">
      <SEO
        title="Not-found"
        description="Not-found page"
        name="Tierra"
        type="article"
      />
      <div className="row">
        <div className="wrapper">
          <div className="page-not-found-countainer">
            <h1 className="page-not-found-title">404</h1>
            <p>Sorry, we couldn't find this page.</p>
            <p className="page-not-found-subtext">
              But don't worry, you can find plenty of other things on our
              homepage
            </p>
            <Link to="/" className="button next">
              HOME PAGE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
