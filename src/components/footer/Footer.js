/* eslint-disable react-hooks/exhaustive-deps */

import {
  getStaticContent,
  getBusinessDetails,
  getSocialLinks,
} from 'models/actions/staticActions';
import {
  pages,
  businessdetails,
  socialLinks,
} from 'models/selectors/staticSelectors';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Newsletter from './Newsletter';

const Footer = () => {
  const allPages = useSelector(pages);
  const social = useSelector(socialLinks);
  const allBusinessdetails = useSelector(businessdetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStaticContent());
    dispatch(getBusinessDetails());
    dispatch(getSocialLinks());
  }, []);

  return (
    <footer>
      <div className="footer-container">
        <div className="row">
          <div className="wrapper newsletter">
            <Newsletter />
          </div>
        </div>
        <div className="row">
          <div className="wrapper">
            <div className="footer-row">
              <div className="footer-columns">
                <div>
                  <p className="title">ABOUT US</p>
                  <ul className="footer-links">
                    {allPages
                      ?.filter((page) => page?.isFooter)
                      ?.map((p) => (
                        <li key={p?.id}>
                          <Link to={`/static/${p?.id}`}>{p?.title}</Link>
                        </li>
                      ))}
                    <li>
                      <div>Working Hours: {allBusinessdetails?.hours}</div>
                    </li>
                    <li>
                      <a href={`tel:${allBusinessdetails?.phone}`}>
                        Phone: {allBusinessdetails?.phone}
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="title">WHAT TO KNOW</p>
                  <ul className="footer-links">
                    {allPages
                      ?.filter((p) => !p?.isFooter)
                      ?.map((page) => (
                        <li key={page?.id}>
                          <Link to={`/static/${page?.id}`}>{page?.title}</Link>
                        </li>
                      ))}
                  </ul>
                </div>
                <div>
                  <p className="title">FIND US</p>
                  <ul className="footer-links">
                    <li>
                      <Link to="/contact">Contact Form</Link>
                    </li>
                    {social?.map((netw) => (
                      <li key={netw?.id}>
                        <a rel="noreferrer" href={netw?.link} target="_blank">
                          {netw?.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="wrapper wrapper-copyright">
            <div className="footer-row">
              <div className="copyright"> (C) Tierra 2024</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
