import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../../components/ProductCard/ProductCard.component';
import { apiURL } from '../../apiURL';
import { ViewAfterCarousel } from '../../components/ViewCarousel/ViewForwadCarousel/ViewAfterCarousel';
import './RelatedItems.styles.css';
import { ViewBackCarousel } from '../../components/ViewCarousel/ViewBackCarousel/ViewBackCarousel.component';

export const RelatedItems = ({ category }) => {
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [offSet, setOffset] = useState(0);
  const [dataFlag, setDataFlag] = useState(true);

  const fetchProductsByCategory = useCallback(async () => {
    const response = await fetch(
      `${apiURL()}/products?category=${category}&limit=3&offset=${offSet}`,
    );
    const categoryProductData = await response.json();

    if (categoryProductData.data.length < 3) {
      fetchAllProducts();
    } else {
      setDataFlag(true);
      setCategoryProducts(categoryProductData.data);
    }
  }, [category, offSet]);

  const fetchAllProducts = async () => {
    const response = await fetch(`${apiURL()}/products`);
    const allProductsData = await response.json();
    const productsData = allProductsData.slice(0, 3);
    setCategoryProducts(productsData);
    setDataFlag(false);
  };

  useEffect(() => {
    fetchProductsByCategory();
  }, [category, fetchProductsByCategory]);

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
          <ViewBackCarousel text="" onClick={handleBackCarousel} />
        </div>
        {categoryProducts.map((prod) => (
          <ProductCard
            key={prod.id}
            product={prod}
            rating={5}
            title={prod.name}
            price={prod.price}
          />
        ))}
        <div className="after-Carousel">
          {dataFlag && (
            <ViewAfterCarousel text="" onClick={handleAfterCarousel} />
          )}
        </div>
      </div>
    </div>
  );
};

RelatedItems.propTypes = {
  category: PropTypes.string.isRequired,
};
