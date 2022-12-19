import React from 'react';
import './Login.css';
import PropTypes from 'prop-types';

const SignupForm = ({
  handleChange,
  handleValidation,
  cleanUpValidation,
  formValues,
  formErrors,
}) => {
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
      {/*
      <button
        /* onClick={handleSubmit}
        onClick={register}
        className="signup-submit-button"
        type="submit"
      >
        Sign up
      </button>
      if I use button here - firebase doesn't work... */}
    </form>
  );
};

export default SignupForm;

SignupForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleValidation: PropTypes.func.isRequired,
  cleanUpValidation: PropTypes.func.isRequired,
  formValues: PropTypes.shape({
    fullname: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
  }),
  formErrors: PropTypes.shape({
    fullname: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
  }),
};

SignupForm.defaultProps = {
  formErrors: '',
  formValues: '',
};
