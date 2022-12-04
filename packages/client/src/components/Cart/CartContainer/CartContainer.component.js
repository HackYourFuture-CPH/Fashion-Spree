import React from 'react';
import './CartContainer.styles.css';
import PropTypes from 'prop-types';

export default function CartContainer({ children }) {
  return <div className="cart-wrapper">{children}</div>;
}

CartContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
