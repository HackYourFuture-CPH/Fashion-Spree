import React from 'react';
import './LandingPage.Style.css';
import Newsletter from '../../components/Newsletter/Newsletter';
import { Header } from '../../components/Header/Header.component';

export const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <div className="content-wrap">
        <Header />
        <Newsletter />
      </div>
    </div>
  );
};
