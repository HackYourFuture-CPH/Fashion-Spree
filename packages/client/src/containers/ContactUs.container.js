import React, { useState } from 'react';
import './ContactUs.styles.css';
import TextFormInput from '../components/Input/TextFormInput.component';
import EmailFormInput from '../components/Input/EmailFormInput.component';
import useInputValidation from '../utils/hooks/useInputValidation';
import Modal from '../components/Modal/Modal.component';

export const ContactUs = () => {
  const [validForm, setValidForm] = useState(false);
  const [invalidForm, setInvalidForm] = useState(false);
  const [name, nameError, validateName] = useInputValidation('fullname');
  const [email, emailError, validateEmail] = useInputValidation('email');
  const [message, messageError, validateMessage] =
    useInputValidation('message');
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      nameError ||
      emailError ||
      messageError ||
      name.length === 0 ||
      email.length === 0 ||
      message.length === 0
    ) {
      setInvalidForm(true);
      setValidForm(false);
    } else {
      setInvalidForm(false);
      setValidForm(true);
      setOpenConfirmationModal(true);
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
              type="text"
              value={name}
              placeholder="Fullname"
              onChange={validateName}
              error={nameError}
            />
            <EmailFormInput
              placeholder="Email"
              value={email}
              type="email"
              onChange={validateEmail}
              error={emailError}
            />
            <TextFormInput
              type="text"
              value={message}
              placeholder="Message"
              onChange={validateMessage}
              error={messageError}
            />
            <button
              className="contactUs-btn"
              onClick={handleSubmit}
              type="submit"
            >
              Send Message
            </button>
            {validForm && (
              <Modal
                title="confirmation"
                open={openConfirmationModal}
                toggle={() => setOpenConfirmationModal(false)}
              >
                Your message has been sent!
              </Modal>
            )}
            {invalidForm && <p className="error-message">Form is not valid</p>}
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
