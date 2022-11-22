import React from 'react';
import './FooterStyle.css';

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
                <a href="#">Company</a>
              </li>
              <li>
                <a href="#">Partners</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </p>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Customer care</h4>
            <p className="list-footer">
              <li>
                <a href="#">Shipping and Delivery</a>
              </li>
              <li>
                <a href="#">Return and refunds</a>
              </li>
              <li>
                <a href="#">Customer Service</a>
              </li>
              <li>
                <a href="#">Store locator</a>
              </li>
              <li>
                <a href="#">Size Guide</a>
              </li>
            </p>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Information</h4>
            <p className="list-footer">
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Privacy policies</a>
              </li>
              <li>
                <a href="#">Cookies policies</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </p>
          </div>
          {/* Column4 */}
          <div className="col">
            <h4>Social Media</h4>
            <p className="list-footer">
              <li>
                <img
                  src="Instagram.png"
                  className="icon"
                  alt="instagram icon"
                />
              </li>
              <li>
                <img src="Facebook.png" className="icon" alt="facebook icon" />
              </li>
              <li>
                <img src="Website.png" className="icon" alt="website icon" />
              </li>
              <li>
                <img src="twitter.png" className="icon" alt="twitter icon" />
              </li>
              <li>
                <img src="tikTok.png" className="icon" alt="tiktok icon" />
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
