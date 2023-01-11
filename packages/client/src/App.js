import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { UserProvider } from './userContext';
import { Navigation } from './components/Navigation/Navigation.component';
import { Footer } from './components/Footer/Footer.component';
import { HomePage } from './containers/HomePage/HomePage.Container';
import { PageNotFound } from './containers/PageNotFound/PageNotFound.Container';
import { ProductView } from './containers/ProductView/ProductView.container';
import Login from './containers/Login/Login.container';
import { Signup } from './containers/Signup/Signup.container';
import Reset from './containers/Reset/Reset.container';
import { AboutUs } from './containers/AboutUs.container';
import { ContactUs } from './containers/ContactUs.container';
import { CollectionsPage } from './containers/CollectionsPage/CollectionsPage.Container';
import { ShoppingCartPage } from './containers/ShoppingCartPage/ShoppingCartPage.container';
import { FavoritesPage } from './containers/FavoritesPage/FavoritesPage.container';
import ShoppingCartProvider from './utils/ShoppingCartContext/ShoppingCartContext';

function App() {
  return (
    <div className="app">
      <Router>
        <UserProvider>
          <ShoppingCartProvider>
            <Navigation />
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
              <Route path="/shopping-cart" element={<ShoppingCartPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/not-found" element={<PageNotFound />} />
            </Routes>
            <Footer />
          </ShoppingCartProvider>
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;
