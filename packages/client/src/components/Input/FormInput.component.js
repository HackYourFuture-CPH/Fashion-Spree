import React, { useState } from 'react';
import PropTypes from 'prop-types';
import validateForm from '../../utils/validateForm';
import './FormInput.style.css';

const FormInput = ({ value, type, name, label, placeholder, onChange }) => {
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setErrors(validateForm(event.target.value));
    onChange(value);
  };
  return (
    <div className="input-wrapper">
      {label && <label>{label}</label>}

      <input
        className="form-input"
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
      {errors && <p className="error-message">{errors.message}</p>}
    </div>
  );
};

FormInput.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'password']),
  onChange: PropTypes.func.isRequired,
};

FormInput.defaultProps = {
  value: '',
  name: '',
  label: '',
  placeholder: '',
  type: 'text',
};

export default FormInput;
