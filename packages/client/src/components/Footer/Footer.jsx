import React from 'react';
import './FooterStyle.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <div className="main-footer">
        <div className="row">
          {/* Column1 */}
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
                  src="/assets/icons/Instagram.png"
                  className="icon"
                  alt="instagram icon"
                />
              </li>
              <li>
                <img
                  src="/assets/icons/Facebook.png"
                  className="icon"
                  alt="facebook icon"
                />
              </li>
              <li>
                <img
                  src="/assets/icons/Website.png"
                  className="icon"
                  alt="website icon"
                />
              </li>
              <li>
                <img
                  src="/assets/icons/twitter.png"
                  className="icon"
                  alt="twitter icon"
                />
              </li>
              <li>
                <img
                  src="/assets/icons/tikTok.png"
                  className="icon"
                  alt="tiktok icon"
                />
              </li>
            </p>
          </div>
        </div>
      </div>

      <div className="main-sm-footer">
        <p>ⓒ {new Date().getFullYear()}. Fashion spree, All rights reserved.</p>
      </div>
    </>
  );
}
