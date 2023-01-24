import { faFaceAngry } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/footer.css';
// import {
//   faTwitter,
//   faFacebook,
//   faInstagram,
//   faYoutube,
// } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer-footer">
      <div className="footer-wrapper">
        <footer className="footer-container">
          <div>
            <h1>Zoezi Fitness</h1>
            <div className="footer-links">
              <Link to="">
                Terms and Conditions
              </Link>
              <Link to="">
                Privacy Policy
              </Link>
              <Link to="">
                Contact
              </Link>
            </div>
          </div>
          <div className="footer-center">
            <h2>Join us </h2>
            <p style={{ color: 'white', borderLeft: '1px solid #DFBD69', borderRight: '1px solid #DFBD69' }}>Subscribe to our newsletter today</p>
            <form>
              <input type="text" placeholder="Email" style={{ color: 'white' }} />
              <button type="submit">Subscribe</button>
            </form>
          </div>
          <div className="footer-right">
            <h2>Links</h2>
            <div className="footer-links">
              <Link className="footer__Link" to="">
                About Us
              </Link>
              <Link className="footer__Link" to="">
                FAQ
              </Link>

              <Link className="footer__Link" to="">
                Maps
              </Link>
            </div>
          </div>
        </footer>

        <div className="bottom__Footer">
          <div>
            <div className="social__Media">
              <Link className="social__Media__Link" to="">
                {/* <i className="fab fa-facebook"></i> */}
              </Link>
              <Link className="social__Media__Link" to="">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link className="social__Media__Link" to="">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link className="social__Media__Link" to="">
                <i className="fab fa-youtube"></i>
              </Link>
            </div>
            <h5>© 2022 Copyright. Zoezi Fitness All Rights Reserved.</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
