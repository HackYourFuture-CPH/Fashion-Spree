import React, { useState } from 'react';
import './Login.css';
import TextFormInput from '../../components/Input/TextFormInput.component';
import EmailFormInput from '../../components/Input/EmailFormInput.component';
import PasswordFormInput from '../../components/Input/PasswordFormInput.component';
import useInputValidation from '../../utils/hooks/useInputValidation';

const SignupForm = () => {
  const [validForm, setValidForm] = useState(false);
  const [invalidForm, setInvalidForm] = useState(false);
  const [name, nameError, validateName] = useInputValidation('fullname');
  const [email, emailError, validateEmail] = useInputValidation('email');
  const [password, passwordError, validatePassword] =
    useInputValidation('password');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      nameError ||
      emailError ||
      passwordError ||
      name.length === 0 ||
      email.length === 0 ||
      password.length === 0
    ) {
      setInvalidForm(true);
      setValidForm(false);
    } else {
      setInvalidForm(false);
      setValidForm(true);
    }
  };

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

      <button
        onClick={handleSubmit}
        className="signup-submit-button"
        type="submit"
      >
        Sign up
      </button>
      {validForm && <p className="success-message">Thank you for Signing up</p>}
      {invalidForm && <p className="error-message">Form is not valid</p>}
    </form>
  );
};

export default SignupForm;
