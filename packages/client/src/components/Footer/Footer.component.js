import React from 'react';
import './Footer.styles.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="footer-container-main">
      <div className="footer">
        <div className="main-footer">
          <div className="footer-container">
            {/* Column1 */}
            <div className="row">
              <div className="col">
                <h4>About Us</h4>
                <p className="list-footer">
                  <li>
                    <Link to="/company">Company</Link>
                  </li>
                  <li>
                    <Link to="/partners">Partners</Link>
                  </li>
                  <li>
                    <Link to="/press">Press</Link>
                  </li>
                  <li>
                    <Link to="/careers">Careers</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                </p>
              </div>
              {/* Column2 */}
              <div className="col">
                <h4>Customer care</h4>
                <p className="list-footer">
                  <li>
                    <Link to="/shipping-delivery">Shipping and Delivery</Link>
                  </li>
                  <li>
                    <Link to="/return-refunds">Return and refunds</Link>
                  </li>
                  <li>
                    <Link to="/customer-service">Customer Service</Link>
                  </li>
                  <li>
                    <Link to="/store-locator">Store Locator</Link>
                  </li>
                  <li>
                    <Link to="/size-guide">Size Guide</Link>
                  </li>
                </p>
              </div>
              {/* Column3 */}
              <div className="col">
                <h4>Information</h4>
                <p className="list-footer">
                  <li>
                    <Link to="/terms-service">Terms of Service</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policies">Privacy policies</Link>
                  </li>
                  <li>
                    <Link to="/cookies-policies">Cookies policies</Link>
                  </li>
                  <li>
                    <Link to="/contactsUs">Contact us</Link>
                  </li>
                  <li>
                    <Link to="/FAQs">FAQs</Link>
                  </li>
                </p>
              </div>
              {/* Column4 */}
              <div className="col">
                <h4>Social Media</h4>
                <p className="list-footer">
                  <li>
                    <img
                      className="icon-footer"
                      src="../../assets/icons/Instagram.png"
                      alt="Instagram"
                    />
                  </li>
                  <li>
                    <img
                      className="icon-footer"
                      src="../../assets/icons/facebook.png"
                      alt="Facebook"
                    />
                  </li>
                  <li>
                    <img
                      className="icon-footer"
                      src="../../assets/icons/Website.png"
                      alt="Website"
                    />
                  </li>
                  <li>
                    <img
                      className="icon-footer"
                      src="../../assets/icons/Twitter.png"
                      alt="Twitter"
                    />
                  </li>
                  <li>
                    <img
                      className="icon-footer"
                      src="../../assets/icons/tiktok.png"
                      alt="TikTok"
                    />
                  </li>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* footer bottom */}
        <div className="main-sm-footer">
          <p>
            ⓒ {new Date().getFullYear()}. Fashion spree, All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
