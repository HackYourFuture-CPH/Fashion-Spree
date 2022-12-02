import React, { useState } from 'react';
import './ContactUs.styles.css';

export const ContactUs = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formError, setFormError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fullname.length === 0 || email.length === 0 || message.length === 0) {
      setFormError(true);
    }
    if (fullname && email && message) {
      console.log(
        `fullname: ${fullname}, \nemail: ${email},\nmessage:${message}`,
      );
    }
  };
  /* 
  TODO: place this regex in the form validation
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
 */
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
          <form onSubmit={handleSubmit}>
            <input
              className="contactUs-input"
              type="text"
              placeholder="Full Name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
            {formError && fullname.length <= 0 ? (
              <label className="error-msg">Full name is required</label>
            ) : (
              ''
            )}
            <input
              className="contactUs-input"
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {formError && email.length <= 0 ? (
              <label className="error-msg">Email is required</label>
            ) : (
              ''
            )}
            <input
              className="contactUs-input"
              type="text"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {formError && message.length <= 0 ? (
              <label className="error-msg">Message is required</label>
            ) : (
              ''
            )}
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
