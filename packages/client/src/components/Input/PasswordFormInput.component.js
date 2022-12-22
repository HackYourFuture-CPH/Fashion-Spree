import React from 'react';
import PropTypes from 'prop-types';
import './FormInput.style.css';

const PasswordFormInput = ({ value, error, onChange }) => {
  /*   const [formErrors, setFormErrors] = useState('');

  const handleChange = (e) => {
    setvalue(e.target.value);
  };

  const handleValidation = () => {
    setFormErrors(validateForm(value, name, type));
  };

  const cleanUpValidation = () => {
    setFormErrors(''); 
  }; */

  return (
    <div className="input-wrapper">
      {/*       {label && <label>{label}</label>}
       */}
      <input
        className="form-input"
        type="password"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

PasswordFormInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};

export default PasswordFormInput;
