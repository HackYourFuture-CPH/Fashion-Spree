import React from 'react';
import './LandingPage.Style.css';
import { Header } from '../../components/Header/Header.component';
import Footer from '../../components/Footer/Footer';

export const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <div className="content-wrap">
        <Header />
      </div>
      <Footer />
    </div>
  );
};
