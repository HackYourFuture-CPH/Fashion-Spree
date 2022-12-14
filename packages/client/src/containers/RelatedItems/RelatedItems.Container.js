import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../../components/ProductCard/ProductCard.component';
import { apiURL } from '../../apiURL';
import './RelatedItems.styles.css';
import { ViewBackCarousel } from '../../components/ViewCarousel/ViewBackCarousel/ViewBackCarousel.component';
import { ViewForwardCarousel } from '../../components/ViewCarousel/ViewForwardCarousel/ViewForwardCarousel.component';

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
      <h1 className="relatedItems-heading">Related Items</h1>
      <div className="related-items-display">
        <div className="related-items-back">
          <ViewBackCarousel />
        </div>
        {categoryProducts.map((prod) => (
          <ProductCard
            key={prod.id}
            title={prod.name}
            price={prod.price}
            rating={5}
          />
        ))}
        <div className="related-items-forward">
          <ViewForwardCarousel />
        </div>
      </div>
    </div>
  );
};

RelatedItems.propTypes = {
  category: PropTypes.string.isRequired,
};
