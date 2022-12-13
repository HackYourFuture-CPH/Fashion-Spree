import React, { useState } from 'react';
import './ContactUs.styles.css';
import TextFormInput from '../components/Input/TextFormInput.component';
import EmailFormInput from '../components/Input/EmailFormInput.component';

export const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const formErrors = '';

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      formErrors.length === 0 &&
      message.length > 5 &&
      name.length > 0 &&
      email.length > 0
    ) {
      setIsSubmit(true);
    }
  };

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
            {/* TODO: replace the email icon with proper icon once it is placed with figma 48       */}
            <p>Fashionspree@fashion.com</p>
          </div>
          <p className="or">-OR-</p>
          <form>
            <TextFormInput
              value={name}
              setvalue={setName}
              name="fullname"
              placeholder="Full name"
            />
            ;
            <EmailFormInput
              value={email}
              type="email"
              setvalue={setEmail}
              name="email"
              placeholder="Email"
            />
            <TextFormInput
              value={message}
              type="text"
              setvalue={setMessage}
              name="message"
              placeholder="Message"
            />
            ;
            <button
              className="contactUs-btn"
              onClick={handleSubmit}
              type="submit"
            >
              Send Message
            </button>
            ;
            {isSubmit ? (
              <div className="success">
                <img
                  className="icon-success"
                  src="../../assets/icons/success.png"
                  alt="success sign"
                />
                <p className="message-success">Message sent successfully</p>
              </div>
            ) : null}
          </form>
          <h3>Follow or connect with us</h3>
          <div className="media-icons">
            <img src="../../assets/icons/Instagram.png" alt="Instagram" />

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
