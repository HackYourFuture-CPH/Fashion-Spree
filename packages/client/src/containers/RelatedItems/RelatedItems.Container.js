import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../../components/ProductCard/ProductCard.component';
import { apiURL } from '../../apiURL';
import { ViewForwardCarousel } from '../../components/ViewCarousel/ViewForwardCarousel/ViewForwardCarousel.component';
import './RelatedItems.styles.css';
import { ViewBackCarousel } from '../../components/ViewCarousel/ViewBackCarousel/ViewBackCarousel.component';

export const RelatedItems = ({ category }) => {
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [offSet, setOffset] = useState(0);
  const [hasMoreProducts, setHasMoreProducts] = useState(true);

  useEffect(() => {
    async function fetchProductsByCategory() {
      const response = await fetch(
        `${apiURL()}/products?category=${category}&limit=3&offset=${offSet}`,
      );
      const categoryProductData = await response.json();

      if (
        categoryProductData.length === 0 ||
        typeof categoryProductData === 'string'
      ) {
        if (
          (categoryProductData.length === 0 && offSet === 0) ||
          typeof categoryProductData === 'string'
        ) {
          await fetchAllProducts();
        }
        setHasMoreProducts(false);
      } else if (categoryProductData.length < 3) {
        setHasMoreProducts(false);
        setCategoryProducts(categoryProductData);
      } else {
        setHasMoreProducts(true);
        setCategoryProducts(categoryProductData);
      }
    }
    async function fetchAllProducts() {
      const response = await fetch(`${apiURL()}/products`);
      const products = await response.json();
      setCategoryProducts(products.slice(0, 3));
    }
    fetchProductsByCategory();
  }, [category, offSet]);

  const handleBackCarousel = () => {
    if (offSet > 2) {
      setOffset(offSet - 3);
    }
  };

  const handleAfterCarousel = () => {
    setOffset(offSet + 3);
  };

  return (
    // TODO: will refactor function Number of items to display below. CLASS22-63"
    <div className="related-items">
      <h1 className="relatedItems-heading">Related Items</h1>
      <div className="related-items-display">
        <div className="back-carousel">
          {offSet > 2 && <ViewBackCarousel onClick={handleBackCarousel} />}
        </div>
        {categoryProducts.map((prod) => (
          <ProductCard
            key={prod.id}
            product={prod}
            rating={5}
            title={prod.name}
            price={prod.price}
            imageUrl={prod.imageUrl}
          />
        ))}
        <div className="after-Carousel">
          {hasMoreProducts && (
            <ViewForwardCarousel onClick={handleAfterCarousel} />
          )}
        </div>
      </div>
    </div>
  );
};

RelatedItems.propTypes = {
  category: PropTypes.string.isRequired,
};
