import React, { useState, useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { FaHome, FaInfo, FaEnvelope, FaSignInAlt, FaUserPlus, FaCar, FaBrain, FaBook } from "react-icons/fa";
import "./Navbar.css";
import { Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import UserDropdown from "../User/UserDropdown";

function IndexNavbar() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

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

  const handleSignInClick = () => {
    // Giriş yap butonuna tıklandığında hedef bileşenin id'sine odaklan
    navigate("/login");
    
  };

  const handleSignUpClick = () => {
    navigate("/register");
  };

  // Check if user is logged in on component mount
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setIsLoggedIn(!!storedToken);
  }, []);

  return (
    <Navbar
      className={`transition-[background] transition-all duration-300  ${
        scrolled
          ? "bg-[#ffff] [@supports(backdrop-filter:blur(0))]:bg-white/60 [@supports(backdrop-filter:blur(0))]:backdrop-blur-md"
          : "clear-filter"
      }`}
      fixed="top"
      collapseOnSelect
      expand="lg"
      filter-color="blue"
    >
      <Navbar.Brand>
        <img
          src="/carlogo.png"
          className="mt-1 ml-14 pb-1"
          alt="logo"
          style={{ width: "150px", height: "50px" }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center" style={{backgroundColor: scrolled ? 'transparent' : 'rgba(255, 255, 255, 0.6)',
  transition: 'background-color 0.8s ease',}}>
        <Nav className="nav  mt-3 ">
          <Nav.Link as={Link} className="custom-nav-link" to="/">
            <div
              className={`custom-nav-link gap-x-5 ${
                scrolled ? "text-[#000]" : ""
              }`}
            >
              <FaHome /> Anasayfa
            </div>
          </Nav.Link>
          <Nav.Link as={Link} className="custom-nav-link" to="/model">
            <div
              className={`custom-nav-link gap-x-5 ${
                scrolled ? "text-[#000]" : ""
              }`}
            >
              <FaCar /> Araçlar
            </div>
          </Nav.Link>
          <Nav.Link as={Link} className="custom-nav-link" to="/about">
            <div
              className={`custom-nav-link gap-x-5 ${
                scrolled ? "text-[#000]" : ""
              }`}
            >
              <FaBook /> Hakkımızda
            </div>
          </Nav.Link>
          <Nav.Link as={Link} className="custom-nav-link" to="/contact">
            <div
              className={`custom-nav-link gap-x-5 ${
                scrolled ? "text-[#000]" : ""
              }`}
            >
              <FaEnvelope /> İletişim
            </div>
          </Nav.Link>
        </Nav>

        <Nav className="">
          {isLoggedIn ? (
            <UserDropdown /> // Show UserDropdown if logged in
          ) : (
            <>
              <button className="button" color="info" onClick={handleSignInClick}>
                <div className={`custom-nav-link gap-x-5 ${scrolled ? "text-[#000]" : ""}`}>
                  <span style={{ display: "flex", alignItems: "center"}}>
                    <FaSignInAlt style={{ marginRight: "8px" }} />
                    GİRİŞ YAP
                  </span>
                </div>
              </button>
              <button className="button" color="info" onClick={handleSignUpClick} >
                <div className={`custom-nav-link gap-x-5 ${scrolled ? "text-[#000]" : ""}`}>
                  <span style={{ display: "flex", alignItems: "center"}}>
                    <FaUserPlus style={{ marginRight: "8px" }} />
                    KAYIT OL
                  </span>
                </div>
              </button>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default IndexNavbar;
