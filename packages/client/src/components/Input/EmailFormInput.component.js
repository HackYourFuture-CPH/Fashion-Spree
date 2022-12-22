import React from 'react';
import PropTypes from 'prop-types';
/* import validateForm from '../../utils/validateForm';
 */ import './FormInput.style.css';

const EmailFormInput = ({ value, error, onChange }) => {
  /*  const [formErrors, setFormErrors] = useState('');

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
      {/* {label && <label>{label}</label>} */}

      <input
        className="form-input"
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
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};

export default EmailFormInput;
