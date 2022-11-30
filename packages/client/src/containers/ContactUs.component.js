import React from 'react';
import './ContactUs.styles.css';

export const ContactUs = () => {
  return (
    <main className="contactUs-wrapper">
      <img
        className="contactUs-img"
        src="/assets/images/contactUs.png"
        alt="contactUs-profile"
      />
      <div className="contact-info-container">
        <div className="contact-info">
          <h3>Contact Us</h3>
          <div className="fashion-email">
            <img
              className="icon-email"
              src="../../assets/icons/email.png"
              alt="email"
            />
            {/* TODO: replace the email icon with proper icon once it is placed with figma 48 */}
            <p>Fashionspree@fashion.com</p>
          </div>
          <p className="or">-OR-</p>
          <form>
            <input
              className="contactUs-input"
              type="text"
              placeholder="Full Name"
            />
            <input
              className="contactUs-input"
              type="email"
              placeholder="Email Address"
            />
            <input
              className="contactUs-input"
              type="text"
              placeholder="Message"
            />
            <button className="contactUs-btn" type="submit">
              Send Message
            </button>
          </form>
          <h3>Follow or connect with us</h3>
          <div className="media-icons">
            <img
              className="icon"
              src="../../assets/icons/Instagram.png"
              alt="Instagram"
            />

            <img src="../../assets/icons/facebook.png" alt="Facebook" />

            <img src="../../assets/icons/Website.png" alt="Website" />

            <img src="../../assets/icons/Twitter.png" alt="Twitter" />

            <img src="../../assets/icons/tiktok.png" alt="TikTok" />
          </div>
        </div>
      </div>
    </main>
  );
};
