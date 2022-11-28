import React from 'react';
import './HomePage.styles.css';
import { Navigation } from '../../components/Navigation/Navigation.component';
import { Header } from '../../components/Header/Header.component';
import { Body } from '../../components/Body/Body.component';
import Newsletter from '../../components/Newsletter/Newsletter.component';
import Footer from '../../components/Footer/Footer.component';
import { Layout } from '../../components/shared/Layout/Layout.component';

export const HomePage = () => {
  return (
    <div className="homepage-container">
      <Navigation />
      <div className="header-container">
        <div className="navigation">
          <Header />
        </div>
      </div>
      <div className="divider-container"> </div>
      <Layout>
        <Body />
      </Layout>
      <div className="divider-container"> </div>
      <div className="newsletter-container-main">
        <div className="newsletter">
          <Newsletter />
        </div>
      </div>
      <div className="divider-container"> </div>
      <Footer />
    </div>
  );
};
