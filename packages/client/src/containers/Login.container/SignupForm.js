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
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(FormValidation(formValues));
  };

  return (
    <form className="signup-form">
      <input
        className="sign-up-form__fullname"
        placeholder="Full Name"
        name="fullname"
        values={formValues.fullname}
        onChange={handleChange}
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
      />
      {formErrors.email && <p className="form-erros">{formErrors.email}</p>}

      <input
        className="sign-up-form__password"
        placeholder="Password"
        name="password"
        type="password"
        values={formValues.password}
        onChange={handleChange}
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
    </form>
  );
};

export default SignupForm;
