import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Headbar.css';
import logo from './logo.png';

const Headbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <Navbar bg="light" expand="lg" className="header">
      <Navbar.Brand href="#home">
        <img
          src={logo}
          width="100"
          className="d-inline-block align-top app-logo"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto icons">
          <Nav.Link href="#notifications">
            <i className="fas fa-bell"></i>
          </Nav.Link>
          <Nav.Link href="#profile">
            <i className="fas fa-user-circle"></i>
          </Nav.Link>
          <Nav.Link onClick={handleLogout}>
            <i className="fas fa-sign-out-alt"></i> Logout
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Headbar;
