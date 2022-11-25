import React, { useEffect, useState } from 'react';
import { apiURL } from '../../apiURL';
import './LandingPage.Style.css';
import Footer from '../../components/Footer/Footer';
import ProductList from '../../components/ProductList/ProductList.component';

export const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <div className="content-wrap">
        <ProductList />
        <span>Landing Page</span>
      </div>
      <Footer />
    </div>
  );
};
