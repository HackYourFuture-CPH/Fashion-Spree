import React, { useState } from 'react';
import './Login.css';
import FormValidation from './FormValidation';

const SignupForm = () => {
  const [formValues, setFormValues] = useState({
    fullname: '',
    email: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleValidation = () => {
    setFormErrors(FormValidation(formValues));
  };

  const cleanUpValidation = () => {
    setFormErrors({
      fullname: '',
      email: '',
      password: '',
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(formErrors).length === 0) {
      setIsSubmit(true);
    }
  };

  return (
    <form className="signup-form">
      <input
        className="sign-up-form__fullname"
        placeholder="Full Name"
        name="fullname"
        values={formValues.fullname}
        onChange={handleChange}
        onBlur={handleValidation}
        onFocus={cleanUpValidation}
        type="text"
      />
      {formErrors.fullname && (
        <p className="form-erros">{formErrors.fullname}</p>
      )}
      <input
        className="sign-up-form__email"
        placeholder="Email Address"
        name="email"
        type="email"
        values={formValues.email}
        onChange={handleChange}
        onBlur={handleValidation}
        onFocus={cleanUpValidation}
      />
      {formErrors.email && <p className="form-erros">{formErrors.email}</p>}
      <input
        className="sign-up-form__password"
        placeholder="Password"
        name="password"
        type="password"
        values={formValues.password}
        onChange={handleChange}
        onBlur={handleValidation}
        onFocus={cleanUpValidation}
      />
      {formErrors.password && (
        <p className="form-erros">{formErrors.password}</p>
      )}
      <button
        onClick={handleSubmit}
        className="signup-submit-button"
        type="submit"
      >
        Sign up
      </button>
      {isSubmit && <p className="success-message">Thank you for Signing up</p>}
    </form>
  );
};

export default SignupForm;
