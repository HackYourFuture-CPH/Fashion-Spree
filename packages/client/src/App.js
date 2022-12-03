import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { HomePage } from './containers/HomePage/HomePage.Container';
import { PageNotFound } from './containers/PageNotFound/PageNotFound.Container';
import { ProductView } from './containers/ProductView/ProductView.container';
import { AboutUs } from './components/PlaceholderPages/AboutUs.component';
import { ContactUs } from './components/PlaceholderPages/ContactUs.component';
import Login from './containers/Login/Login.container';
import Signup from './containers/Signup/Signup.container';
import Reset from './containers/Reset/Reset.container';
import { CollectionsPage } from './containers/CollectionsPage/CollectionsPage.Container';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path="/contact-us" element={<ContactUs />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/products/:id" element={<ProductView />} />
          <Route path="/collections" element={<CollectionsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
