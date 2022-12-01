import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../../components/ProductCard/ProductCard.component';
import { apiURL } from '../../apiURL';
import './RelatedItems.styles.css';

export const RelatedItems = ({ category }) => {
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      const response = await fetch(`${apiURL()}/products?category=${category}`);
      const categoryProductData = await response.json();

      setCategoryProducts(categoryProductData);
    };

    fetchProductsByCategory();
  }, [category]);

  return (
    // TODO: will refactor function Number of items to display below. CLASS22-63"
    <div className="related-items">
      <h1 className="realtedItems-heading">Related Items</h1>
      <div className="related-items-display">
        {categoryProducts.map((prod) => (
          <ProductCard key={prod.id} product={prod} rating={5} />
        ))}
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

RelatedItems.propTypes = {
  category: PropTypes.string.isRequired,
};
