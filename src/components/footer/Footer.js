import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="row">
          <div className="wrapper">
            <div className="footer-row">
              <div className="footer-newsletter">Newsletter</div>
              <div className="footer-columns">
                <div>
                  <p className="title">ΓΙΑ ΕΜΑΣ</p>
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
                  <p className="title">ΔΗΜΟΦΙΛΕΙΣ ΚΑΤΗΓΟΡΙΕΣ</p>
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
                  <p className="title">ΕΠΙΚΟΙΝΩΝΙΑ</p>
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
              </div>
            </div>
            <div className="footer-row">
              <div className="copyright">Copyright (C) By Vaios</div>
              <div className="footer-social-icons">
                <i className="footer-icon icon-facebook" />
                <i className="footer-icon icon-instagram" />
                <i className="footer-icon icon-twitter" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
