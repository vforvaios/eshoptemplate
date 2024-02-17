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
                  <InputLabel htmlFor="newsletter">
                    Your email
                  </InputLabel>
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
                    {allPages?.map((page) => (
                      <li key={page?.id}>
                        <Link to={`/static/${page?.id}`}>{page?.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="title">POPULAR</p>
                  <ul className="footer-links">
                    <li>
                      <Link to="/">Link 1</Link>
                    </li>
                    <li>
                      <Link to="/">Link 2</Link>
                    </li>
                    <li>
                      <Link to="/">Link 3</Link>
                    </li>
                    <li>
                      <Link to="/">Link 4</Link>
                    </li>
                    <li>
                      <Link to="/">Link 5</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="title">FIND US</p>
                  <ul className="footer-links">
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>

                    <li><Link to="/">Instagram</Link></li>
                    <li><Link to="/">X - Twitter</Link></li>
                    <li><Link to="/">Facebook</Link></li>
                    <li><Link to="/">Working Hours: 9:00 - 17:00</Link></li>
                    <li><Link to="/">Phone: 1234567890</Link></li>
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
    </footer >
  );
};

export default Footer;
