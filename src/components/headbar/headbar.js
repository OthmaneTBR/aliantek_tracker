import { Navbar, Nav } from 'react-bootstrap';
import './Headbar.css';
import logo from "./logo.png";

const Headbar = () => {
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
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
};

export default Headbar;