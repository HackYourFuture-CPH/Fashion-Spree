import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../userContext';
import './Signup.styles.css';
import SignupForm from './SignupForm';
import validateForm from '../../utils/validateForm';

function Signup() {
  const { user, loading, registerWithEmailAndPassword, signInWithGoogle } =
    useUserContext();
  const [formValues, setFormValues] = useState({
    fullname: '',
    email: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleValidation = () => {
    setFormErrors(validateForm(formValues));
  };

  const cleanUpValidation = () => {
    setFormErrors({
      fullname: {},
      email: {},
      password: {},
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(formErrors).length !== 0) {
      return;
      // Probably want to do something more here, like inform the user about why the form was not allowed to be submitted.
    }
    registerWithEmailAndPassword(
      formValues.fullname,
      formValues.email,
      formValues.password,
    );
  };
  useEffect(() => {
    if (loading) return;
    if (user) navigate('/');
  }, [user, loading, navigate]);
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
              alt=" facebooklogo"
            />
            sign in with Facebook
          </button>
        </div>
        <p className="or-text">-OR-</p>
        <SignupForm
          handleChange={handleChange}
          handleValidation={handleValidation}
          cleanUpValidation={cleanUpValidation}
          formValues={formValues}
          formErrors={formErrors}
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
}
export default Signup;
