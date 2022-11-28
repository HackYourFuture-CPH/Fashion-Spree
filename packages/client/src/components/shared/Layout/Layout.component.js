import React from 'react';
import PropTypes from 'prop-types';

export const Layout = (props) => {
  return (
    <div className="body-container">
      <div className="body">{props.children}</div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
