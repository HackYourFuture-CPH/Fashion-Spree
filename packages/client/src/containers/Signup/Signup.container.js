import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../userContext';
import './Signup.styles.css';
import SignupForm from './SignupForm';

function Signup() {
  const { user, loading, signInWithGoogle } = useUserContext();
  const navigate = useNavigate();

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
        <SignupForm />
        <br />
        <span className="dont-want-signup">
          Dont want to Sign Up? Continue as a Guest
        </span>
      </div>
    </main>
  );
}
export default Signup;
