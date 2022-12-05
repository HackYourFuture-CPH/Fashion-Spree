import React, { useEffect, useState } from 'react';
import './ContactUs.styles.css';

export const ContactUs = () => {
  const [formValues, setFormValues] = useState({
    fullname: '',
    email: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    setFormErrors(validation(formValues));
    setIsSubmit(true);

    e.preventDefault();

    /* eslint-disable no-console */
    console.log(
      `fullname: ${formValues.fullname}, \nemail: ${formValues.email},\nmessage:${formValues.message}`,
    );
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }

    // eslint-disable-next-line
  }, [formErrors, isSubmit]);

  const validation = (values) => {
    const errors = {};
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!values.fullname) {
      errors.fullname = 'Full name is required.';
    }
    if (!values.email) {
      errors.email = 'Email is required.';
    } else if (!regex.test(values.email)) {
      errors.email = 'Email is invalid.';
    }
    if (!values.message) {
      errors.message = 'Message is required.';
    } else if (values.message.length < 5) {
      errors.message = 'Message must be more than five characters.';
    }

    return errors;
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
            <input
              className="contactUs-input"
              type="text"
              placeholder="Full Name"
              name="fullname"
              value={formValues.fullname}
              onChange={handleChange}
            />
            {formErrors.fullname && (
              <p className="error-msg">{formErrors.fullname}</p>
            )}

            <input
              className="contactUs-input"
              type="email"
              placeholder="Email Address"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
            {formErrors.email && (
              <p className="error-msg">{formErrors.email}</p>
            )}
            <input
              className="contactUs-input"
              type="text"
              placeholder="Message"
              name="message"
              value={formValues.message}
              onChange={handleChange}
            />
            {formErrors.message && (
              <p className="error-msg">{formErrors.message}</p>
            )}

            <button
              className="contactUs-btn"
              onClick={handleFormSubmit}
              type="submit"
            >
              Send Message
            </button>
            {Object.keys(formErrors).length === 0 && isSubmit ? (
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
