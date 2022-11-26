import React from 'react';
import PropTypes from 'prop-types';
import './Header.styles.css';
import { Button } from '../Button/Button.component';
import imageHeader from '../../assets/image-header.png';

/**
 * Primary UI component for user interaction
 */
export const Header = ({ primary, backgroundColor, size, label, ...props }) => {
  return (
    <div className="header-component">
      <div className="header-text">
        <h1>Fashion Shopping made easier with Fashion Spree</h1>
        <div className="subtitle">
          <p>
            We are bringing shopping to your doorstep !! With the new Fashion
            spree webshop, you can now shop for all fashion accessories with
            ease.
          </p>
        </div>
        <Button label="Start Shopping" backgroundColor="#F2EBE8" />
      </div>
      <div className="header-image">
        <img src={imageHeader} />
      </div>
    </div>
  );
};

Header.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Header.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
