import React from 'react';
import './LandingPage.Style.css';
import { Header } from '../../components/Header/Header.component';
import Footer from '../../components/Footer/Footer.component';
import ProductList from '../../components/ProductList/ProductList.component';

export const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <div className="content-wrap">
        <Header />
        <ProductList />
        <span>Landing Page</span>
      </div>
      <Footer />
    </div>
  );
};
