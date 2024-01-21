import { useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { FaHome, FaInfo, FaEnvelope } from 'react-icons/fa'; // Import icons from the FontAwesome icon set
import './Navbar.css';

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = useState('transparent');

  useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 699 ||
        document.body.scrollTop > 699
      ) {
        setNavbarColor('dark');
      } else {
        setNavbarColor('transparent');
      }
    };

    window.addEventListener('scroll', updateNavbarColor);

    return function cleanup() {
      window.removeEventListener('scroll', updateNavbarColor);
    };
  }, []);

  return (
    <Navbar bg={navbarColor} variant="dark" expand="lg" fixed="top">
      <Navbar.Brand href="#home">
        <img
          src="../../images/logodeneme.png"
          alt="Car Rentex Logo"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
  <Nav className="nav mx-auto mt-4">
    <Nav.Link className="custom-nav-link" href="#home">
      <FaHome /> Anasayfa
    </Nav.Link>
    <Nav.Link className="custom-nav-link" href="#link">
      <FaInfo /> Hakkımızda
    </Nav.Link>
    <Nav.Link className="custom-nav-link" href="#link">
      <FaEnvelope /> İletişim
    </Nav.Link>
  </Nav>
  <Nav className="ml-auto">
    <Nav.Link className="custom-nav-link" href="#link">
      <FaEnvelope /> Giriş Yap
    </Nav.Link>
    <Nav.Link className="custom-nav-link" href="#link">
      <FaEnvelope /> Kayıt Ol
    </Nav.Link>
  </Nav>
</Navbar.Collapse>

    </Navbar>
  );
}

export default IndexNavbar;
