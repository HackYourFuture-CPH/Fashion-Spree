import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { LandingPage } from './containers/LandingPage/LandingPage.Container';
import { PageNotFound } from './containers/PageNotFound/PageNotFound.Container';
import { ProductView } from './containers/ProductView/ProductView.container';
import ProductList from './components/ProductList/ProductList.component';
// TODO: change ProductList into the page container CLASS22-40
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/collections" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductView />} />
          {/* TODO: change ProductList into the page container CLASS22-40 */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
