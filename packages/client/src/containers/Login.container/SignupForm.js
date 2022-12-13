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
      {/*   <input
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
      )} */}
      {/* 
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
      */}
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
