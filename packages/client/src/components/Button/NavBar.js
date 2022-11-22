import React from 'react';

import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';

import './NavBar.css';

const NavBar = () => {
  return (
    <Navbar className="navbar">
      <Navbar.Brand className="navbar-brand">Fashion Spree</Navbar.Brand>
      <Nav activeKey="/home" className="nav">
        <NavItem className="nav-item-home">
          <Nav.Link href="/">Home</Nav.Link>
        </NavItem>
        <NavItem className="nav-item-about-us">
          <Nav.Link href="/about-us">About Us</Nav.Link>
        </NavItem>
        <NavItem className="nav-item-our-collections">
          <Nav.Link href="/our-collections">Our collections</Nav.Link>
        </NavItem>
        <NavItem className="nav-item-contact-us">
          <Nav.Link href="/contact-us">Contact Us</Nav.Link>
        </NavItem>
        <Button className="login-button" href="/login" type="submit">
          Login
        </Button>
        <Button type="submit" href="/signup" className="signup-button">
          Sign Up
        </Button>
      </Nav>
    </Navbar>
  );
};
export default NavBar;
