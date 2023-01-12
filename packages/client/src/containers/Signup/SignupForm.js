import React from 'react';
import PropTypes from 'prop-types';
import TextFormInput from '../../components/Input/TextFormInput.component';
import EmailFormInput from '../../components/Input/EmailFormInput.component';
import PasswordFormInput from '../../components/Input/PasswordFormInput.component';
import './Signup.styles.css';

const SignupForm = ({
  name,
  email,
  password,
  nameError,
  emailError,
  passwordError,
  validateName,
  validateEmail,
  validatePassword,
}) => {
  return (
    <form className="signup-form">
      <TextFormInput
        type="text"
        value={name}
        placeholder="Fullname"
        onChange={validateName}
        error={nameError}
      />
      <EmailFormInput
        placeholder="Email"
        value={email}
        type="email"
        onChange={validateEmail}
        error={emailError}
      />
      <PasswordFormInput
        placeholder="Password"
        value={password}
        type="password"
        onChange={validatePassword}
        error={passwordError}
      />
    </form>
  );
};
SignupForm.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  nameError: PropTypes.bool,
  emailError: PropTypes.bool,
  passwordError: PropTypes.bool,
  validateName: PropTypes.func,
  validateEmail: PropTypes.func,
  validatePassword: PropTypes.func,
};
SignupForm.defaultProps = {
  name: null,
  email: null,
  password: null,
  nameError: false,
  emailError: false,
  passwordError: false,
  validateName: undefined,
  validateEmail: undefined,
  validatePassword: undefined,
};
export default SignupForm;
