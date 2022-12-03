import React, { useEffect, useState, useCallback } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db, logout } from '../../firebase';
import { query, collection, getDocs, where } from 'firebase/firestore';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from 'react-router-dom';
import PropTypes from 'prop-types';

import './Navigation.styles.css';
import { Button } from '../Button/Button.component';

export const Navigation = () => {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const fetchUserName = useCallback(async () => {
    try {
      const q = query(collection(db, 'users'), where('uid', '==', user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      alert('An error occured while fetching user data');
    }
  }, [user?.uid]);
  useEffect(() => {
    if (user) {
      fetchUserName();
    }
  }, [user, fetchUserName]);

  return (
    <div className="navigation-container">
      <div className="navigation">
        <div className="nav">
          <span className="navbar-brand">Fashion Spree</span>
          <Link to="/" className="home">
            Home
          </Link>
          <Link to="/about-us" className="about-us">
            About Us
          </Link>
          <Link to="/collections" className="collections">
            Our collections
          </Link>
          <Link to="/contact-us" className="contact-us">
            Contact Us
          </Link>
          {user ? (
            <div className="logged-in-container">
              <div className="logged-in-text">
                <div>{name}</div>
                <div>{user?.email}</div>
              </div>
              <div className="logout-button-container">
                <Button
                  label="Logout"
                  backgroundColor="#F5F5F5"
                  onClick={logout}
                />
              </div>
            </div>
          ) : (
            <div className="nav-buttons">
              <Link to="/login" className="login">
                <Button label="Login" backgroundColor="#F5F5F5" />
              </Link>
              <Link to="/signup" className="signup">
                <Button label="Sign Up" backgroundColor="#F5F5F5" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
