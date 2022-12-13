import React, { useState } from 'react';
import PropTypes from 'prop-types';
import validateForm from '../../utils/validateForm';
import './FormInput.style.css';

const TextFormInput = ({ value, type, setvalue, name, label, placeholder }) => {
  const [formErrors, setFormErrors] = useState('');

  const handleChange = (e) => {
    setvalue(e.target.value);
  };

  const handleValidation = () => {
    setFormErrors(validateForm(value, name, type));
  };

  const cleanUpValidation = () => {
    setFormErrors('');
  };
  return (
    <div className="input-wrapper">
      {label && <label>{label}</label>}

      <input
        className="form-input"
        type="text"
        name={name}
        value={value}
        setvalue={setvalue}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleValidation}
        onFocus={cleanUpValidation}
      />
      {formErrors && <p className="error-message">{formErrors}</p>}
    </div>
  );
};

TextFormInput.propTypes = {
  value: PropTypes.string,
  setvalue: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

TextFormInput.defaultProps = {
  value: '',
  setvalue: '',
  name: '',
  label: '',
  placeholder: '',
  type: 'text',
};

export default TextFormInput;
