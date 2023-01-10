import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../userContext';
import './Signup.styles.css';
import SignupForm from './SignupForm';
import { apiURL } from '../../apiURL';
import useInputValidation from '../../utils/hooks/useInputValidation';

export const Signup = () => {
  const {
    user,
    userFullname,
    loading,
    registerWithEmailAndPassword,
    signInWithGoogle,
  } = useUserContext();
  const navigate = useNavigate();
  const [name, nameError, validateName] = useInputValidation('fullname');
  const [email, emailError, validateEmail] = useInputValidation('email');
  const [password, passwordError, validatePassword] =
    useInputValidation('password');

  const addUserToDb = useCallback(async (userCreated, fullName) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        full_name: fullName,
        email: userCreated.email,
        uid: userCreated?.uid,
      }),
    };
    await fetch(`${apiURL()}/users`, requestOptions);
  }, []);
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
      return;
    }
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    if (user) {
      addUserToDb(user, userFullname);
      navigate('/');
    }
  }, [user, userFullname, loading, navigate, addUserToDb]);
  return (
    <main>
      <img
        className="signup-body-img"
        src="../../assets/images/signup-body-img.png"
        alt="woman dress and styles art"
      />
      <div className="signup-section">
        <h1 className="signup-text">Sign Up</h1>
        <div className="signin-with-btn">
          <button
            type="button"
            className="google-signin-btn"
            onClick={signInWithGoogle}
          >
            <img
              className="signin-icons"
              src="../../assets/icons/Google.png"
              alt="google logo"
            />
            sign in with Google
          </button>
          <button type="button" className="facebook-signin-btn">
            <img
              className="signin-icons"
              src="../../assets/icons/facebook.png"
              alt="facebooklogo"
            />
            sign in with Facebook
          </button>
        </div>
        <p className="or-text">-OR-</p>
        <SignupForm
          fullname={name}
          email={email}
          password={password}
          nameError={nameError}
          emailError={emailError}
          passwordError={passwordError}
          validateName={validateName}
          validateEmail={validateEmail}
          validatePassword={validatePassword}
        />
        <button
          type="submit"
          className="signup-submit-button"
          onClick={handleSubmit}
        >
          Signup
        </button>
        <br />
        <span className="dont-want-signup">
          Dont want to Sign Up? Continue as a Guest
        </span>
      </div>
    </main>
  );
};
