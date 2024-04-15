/* eslint-disable react-hooks/exhaustive-deps */
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { setGeneralLoading } from 'models/actions/catalogActions';
import { getStaticContent } from 'models/actions/staticActions';
import { addNewsletterUser } from 'models/actions/userActions';
import { pages } from 'models/selectors/staticSelectors';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Footer = () => {
  const allPages = useSelector(pages);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStaticContent());
  }, []);

  return (
    <footer>
      <div className="footer-container">
        <div className="row">
          <div className="wrapper newsletter">
            <div className="footer-newsletter">
              <div className="title">NEWSLETTER</div>
              <div>
                <FormControl fullWidth className="newsletter-form">
                  <InputLabel htmlFor="newsletter">Your email</InputLabel>
                  <Input
                    fullWidth
                    id="newsletter"
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                  />
                  <button
                    className="button"
                    onClick={() => {
                      dispatch(setGeneralLoading(true));
                      dispatch(addNewsletterUser(newsletterEmail));
                    }}>
                    Subscribe
                  </button>
                </FormControl>
              </div>
            </div>
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
                      <div>Working Hours: 9:00 - 17:00</div>
                    </li>
                    <li>
                      <a href="tel:6977137837">Phone: 6977137837</a>
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
                    <li>
                      <a
                        rel="noreferrer"
                        href="https://www.instagram.com/tierra_purses/"
                        target="_blank">
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noreferrer"
                        href="https://www.tiktok.com/@tierra_purses"
                        target="_blank">
                        Tik-Tok
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noreferrer"
                        href="https://www.facebook.com/tierrapurses"
                        target="_blank">
                        Facebook
                      </a>
                    </li>
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
