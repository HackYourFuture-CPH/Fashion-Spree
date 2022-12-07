import React from 'react';
import './Newsletter.styles.css';
import { Button } from '../Button/Button.component';

export default function Newsletter() {
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
          <input type="email" placeholder="Enter email address" />
          <Button label="Subscribe" backgroundColor="#F5F5F5" />
        </div>
      </div>
    </div>
  );
}
