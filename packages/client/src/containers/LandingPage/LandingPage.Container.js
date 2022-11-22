import React, { useEffect, useState } from 'react';
import { apiURL } from '../../apiURL';
import './LandingPage.Style.css';
import Footer from '../../components/Footer/Footer';

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
        <span>Landing Page</span>
        <h1>h</h1>
        <h1>h</h1>
        <h1>h</h1>
        <h1>h</h1>
        <h1>h</h1>
        <h1>h</h1>
        <h1>h</h1>
        <h1>h</h1>
        <h1>h</h1>
        <h1>h</h1>
        <h1>h</h1>
        <h1>h</h1>e45
        <h1>h</h1>
        <h1>h</h1>
        <h1>h</h1>
        <h1>h</h1>
        <h1>h</h1>
        <h1>h</h1>
        <h1>h</h1>
        <h1>h</h1>
        <h1>h</h1>
        <h1>h</h1>
        <h1>h</h1>
        <h1>h</h1>
        <h1>hi</h1>
        {exampleResources.map((example) => (
          <div key={example.id}>{example.title}</div>
        ))}
      </div>
      <Footer />
    </div>
  );
};
