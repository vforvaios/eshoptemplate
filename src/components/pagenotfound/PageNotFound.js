import SEO from 'components/seo/SEO';
import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="notfound content">
      <SEO
        title="Shoppy not-found"
        description="Shoppy not-found page"
        name="Shoppy"
        type="article"
      />
      <div className="row">
        <div className="wrapper">
          <div className="page-not-found-countainer">
            <h1>PAGE NOT FOUND</h1>
            <Link to="/" className="button green">
              HOME PAGE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
