import React, { useEffect, useState, useCallback } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import './HomePage.styles.css';
import { auth, db, logout } from '../../firebase';
import { query, collection, getDocs, where } from 'firebase/firestore';
import { Navigation } from '../../components/Navigation/Navigation.component';
import { Header } from '../../components/Header/Header.component';
import { Body } from '../../components/Body/Body.component';
import Newsletter from '../../components/Newsletter/Newsletter.component';
import Footer from '../../components/Footer/Footer.component';
import { Layout } from '../../components/shared/Layout/Layout.component';

export const HomePage = () => {
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
    if (loading) return;
    if (!user) return navigate('/');
    fetchUserName();
  }, [user, loading, fetchUserName, navigate]);
  return (
    <div className="homepage-container">
      <Navigation name={name} loading={loading} logout={logout} user={user} />
      <div className="header-container">
        <div className="navigation">
          <Header />
        </div>
      </div>
      <div className="divider-container"> </div>
      <Layout>
        <Body />
      </Layout>
      <div className="divider-container"> </div>
      <div className="newsletter-container-main">
        <div className="newsletter">
          <Newsletter />
        </div>
      </div>
      <div className="divider-container"> </div>
      <Footer />
    </div>
  );
};
