import { useEffect, useState } from "react";
import { Nav,  Navbar } from "react-bootstrap";
import "./Navbar.css";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = useState("transparent");

  useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 699 ||
        document.body.scrollTop > 699
      ) {
        setNavbarColor("dark"); // Scroll aşağıda, dark mod
      } else {
        setNavbarColor("transparent"); // Scroll yukarıda, şeffaf mod
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  }, []);

  return (
    <Navbar bg={navbarColor} variant="dark" expand="lg" fixed="top">
      <Navbar.Brand href="#home">
        <img
          src="../../images/logodeneme.png"  // Logo veya metin ekleyebilirsiniz
          alt="Car Rentex Logo"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
      <Nav className="nav">
  <Nav.Link className="custom-nav-link" href="#home">Anasayfa</Nav.Link>
  <Nav.Link className="custom-nav-link" href="#link">Hakkımızda</Nav.Link>
  <Nav.Link className="custom-nav-link" href="#link">İletişim</Nav.Link>
</Nav>
        {/* <Nav className="ml-auto">
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav> */}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default IndexNavbar;
