import { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { FaHome, FaInfo, FaEnvelope, FaSignInAlt } from "react-icons/fa";
import "./Navbar.css";
import { Button } from "reactstrap";

function IndexNavbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  useEffect(() => {
    setScrolled(window.scrollY > 0);
    const onScroll = (): void => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll);
    return (): void => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleSignupClick = () => {
    window.scrollTo({
      top: 701,
      behavior: "smooth",
    });
  };

  return (
    <Navbar
      className={`transition-[background] transition-all duration-300 ${
        scrolled
          ? "bg-[#ffff] [@supports(backdrop-filter:blur(0))]:bg-white/60 [@supports(backdrop-filter:blur(0))]:backdrop-blur-md"
          : ""
      }`}
      fixed="top"
      collapseOnSelect // Navbar'ın küçüldüğünde otomatik olarak kapanmasını sağlar
      expand="lg"
    >
      <Navbar.Brand href="#home">
        <img
          src="../../images/logodeneme.png"
          alt="Car Rentex Logo"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
        <Nav className="nav mx-auto mt-3">
          <Nav.Link className="custom-nav-link" href="/Home">
            <div
              className={`custom-nav-link gap-x-5 ${
                scrolled ? "text-[#000]" : ""
              }`}
            >
              <FaHome /> Anasayfa
            </div>
          </Nav.Link>
          <Nav.Link className="custom-nav-link" href="/Home">
            <div
              className={`custom-nav-link gap-x-5 ${
                scrolled ? "text-[#000]" : ""
              }`}
            >
              <FaHome /> Araçlar
            </div>
          </Nav.Link>
          <Nav.Link className="custom-nav-link" href="/About">
            <div
              className={`custom-nav-link gap-x-5 ${
                scrolled ? "text-[#000]" : ""
              }`}
            >
              <FaInfo /> Hakkımızda
            </div>
          </Nav.Link>
          <Nav.Link className="custom-nav-link" href="/Contact">
            <div
              className={`custom-nav-link gap-x-5 ${
                scrolled ? "text-[#000]" : ""
              }`}
            >
              <FaEnvelope /> İletişim
            </div>
          </Nav.Link>
        </Nav>

        <Nav className="ml-auto">
          <Button
            className="btn-neutral btn-round mt-1 mb-1"
            color="info"
            onClick={handleSignupClick}
            size="lg"
          >
            <span style={{ display: "flex", alignItems: "center" }}>
              <FaSignInAlt style={{ marginRight: "8px" }} />
              Giriş Yap
            </span>
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default IndexNavbar;
