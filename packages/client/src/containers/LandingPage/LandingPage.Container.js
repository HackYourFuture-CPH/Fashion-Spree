import React from 'react';
import './LandingPage.Style.css';
import Newsletter from '../../components/Newsletter/Newsletter';
import { Header } from '../../components/Header/Header.component';
import Footer from '../../components/Footer/Footer';
import ProductList from '../../components/ProductList/ProductList.component';


export const LandingPage = () => {
  return (
    <>
      <div className="landing-page-container">
        <span>Landing Page</span>
        {exampleResources.map((example) => (
          <div key={example.id}>{example.title}</div>
        ))}
      </div>
      <Newsletter />
    </>
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
