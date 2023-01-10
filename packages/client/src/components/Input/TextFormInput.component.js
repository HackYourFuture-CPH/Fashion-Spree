import React from 'react';
import PropTypes from 'prop-types';
import './FormInput.style.css';

const TextFormInput = ({ value, type, placeholder, error, onChange }) => {
  return (
    <div className="input-wrapper">
      {/* {label && <label>{label}</label>} */}

      <input
        className="form-input"
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

TextFormInput.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
};

export default TextFormInput;
