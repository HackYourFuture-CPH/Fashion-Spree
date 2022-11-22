import React, { useEffect, useState } from 'react';
import { apiURL } from '../../apiURL';
import './HomePage.Style.css';
import { Navigation } from '../../components/Navigation/Navigation.component';
import { Header } from '../../components/Header/Header.component';
import { Body } from '../../components/Body/Body.component';
import { Newsletter } from '../../components/Newsletter/Newsletter.component';
import { Footer } from '../../components/Footer/Footer.component';

export const HomePage = () => {
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
    <div className="homepage-container">
      <div className="navigation-container">
        <div className="navigation">
          <Navigation />
        </div>
      </div>
      <div className="header-container">
        <div className="navigation">
          <Header />
        </div>
      </div>
      <div className="divider-container"> </div>
      <div className="body-container">
        <div className="body">
          <Body />
        </div>
      </div>
      <div className="divider-container"> </div>
      <div className="newsletter-container">
        <div className="newsletter">
          <Newsletter />
        </div>
      </div>
      <div className="divider-container"> </div>
      <div className="footer-container">
        <div className="footer">
          <Footer />
        </div>
      </div>

      {/*
      exampleResources.map((example) => (
        <div key={example.id}>{example.title}</div>
      ))
      */}
    </div>
  );
};
