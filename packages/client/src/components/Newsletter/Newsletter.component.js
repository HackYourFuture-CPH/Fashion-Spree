import React, { useState } from 'react';
import useInputValidation from '../../utils/hooks/useInputValidation';
import { Button } from '../Button/Button.component';
import EmailFormInput from '../Input/EmailFormInput.component';
import Modal from '../Modal/Modal.component';
import './Newsletter.styles.css';

export default function Newsletter() {
  const [validForm, setValidForm] = useState(false);
  const [email, emailError, validateEmail] = useInputValidation('email');
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (emailError || email.length === 0) {
      setValidForm(false);
    } else {
      setValidForm(true);
      setOpenConfirmationModal(true);
    }
  };

  return (
    <div className="main-newsletter">
      <div className="newsletter-container">
        <div className="content">
          <h2>Dont be left out! Stay up to date.</h2>
          <p>
            Get early access to our news, discounts and promotions. Also get
            updates on new releases, latest news and information. <br /> Enter
            below your email address to get latest updates.
          </p>
        </div>
        <div className="user-email">
          <EmailFormInput
            placeholder="Enter email address"
            value={email}
            type="email"
            onChange={validateEmail}
            error={emailError}
          />
          <Button
            label="Subscribe"
            backgroundColor="#F5F5F5"
            onClick={handleSubmit}
          />
          {validForm && (
            <Modal
              title="Thank you for your subscription!"
              open={openConfirmationModal}
              toggle={() => setOpenConfirmationModal(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
