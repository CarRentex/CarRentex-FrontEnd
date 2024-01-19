// Navbar.tsx

import { Link } from "react-router-dom";
import Logo from "../../images/logodeneme.png";
import { useState } from "react";
import "./Navbar.css";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-light navbar-custom`}>
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={() => window.scrollTo(0, 0)}>
          <img src={Logo} alt="logo-img" style={{ maxHeight: "50px" }} />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={openNav}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${nav ? "show" : ""}`}>
          <ul className="navbar-nav mx-auto"> {/* mx-auto for center alignment */}
            <li className="nav-item">
              <Link className="nav-link" onClick={openNav} to="/">
                Anasayfa
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" onClick={openNav} to="/about">
                Hakkımızda
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" onClick={openNav} to="/models">
                Araçlar
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" onClick={openNav} to="/contact">
                İletişim
              </Link>
            </li>
          </ul>
          
          <ul className="navbar-nav">
            <li className="nav-item">
              <div className="sign">
              <Link className="nav-link" onClick={openNav} to="/">
                Giriş Yap
              </Link>
              </div>
              </li>
            <li className="nav-item">
            <div className="register">
              <Link className="nav-link" onClick={openNav} to="/">
                Kayıt Ol
              </Link>
            </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
