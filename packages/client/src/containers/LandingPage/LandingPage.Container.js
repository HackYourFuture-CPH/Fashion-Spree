import React, { useEffect, useState } from 'react';
import { apiURL } from '../../apiURL';
import './LandingPage.Style.css';
import Footer from '../../components/Footer/Footer';
import ProductList from '../../components/ProductList/ProductList.component';

export const LandingPage = () => {
  const [exampleResources, setExampleResources] = useState([]);
  useEffect(() => {
    async function fetchExampleResources() {
      const response = await fetch(`${apiURL()}/exampleResources`);
      const examples = await response.json();
      setExampleResources(examples);
    }

    fetchExampleResources();
  }, []);

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
