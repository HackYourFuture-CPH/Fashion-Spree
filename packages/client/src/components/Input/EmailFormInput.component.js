import React from 'react';
import PropTypes from 'prop-types';
import './FormInput.style.css';

const EmailFormInput = ({ value, placeholder, error, onChange }) => {
  return (
    <div className="input-wrapper">
      <input
        className="form-input"
        placeholder={placeholder}
        type="email"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

EmailFormInput.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
};

export default EmailFormInput;
