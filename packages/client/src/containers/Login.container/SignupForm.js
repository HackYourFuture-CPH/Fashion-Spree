import React, { useState } from 'react';
import './Login.css';
import TextFormInput from '../../components/Input/TextFormInput.component';
import EmailFormInput from '../../components/Input/EmailFormInput.component';
import PasswordFormInput from '../../components/Input/PasswordFormInput.component';

const SignupForm = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const formErrors = '';

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      formErrors.length === 0 &&
      password.length > 0 &&
      name.length > 0 &&
      email.length > 0
    ) {
      setIsSubmit(true);
    }
  };

  return (
    <form className="signup-form">
      <TextFormInput
        value={name}
        setvalue={setName}
        name="fullname"
        placeholder="Full name"
      />
      ;
      <EmailFormInput
        value={email}
        type="email"
        setvalue={setEmail}
        name="email"
        placeholder="Email"
      />
      <PasswordFormInput
        value={password}
        type="password"
        setvalue={setPassword}
        name="password"
        placeholder="Password"
      />
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
