import { Link } from "react-router-dom";
import Logo from "../../images/logodeneme.png"; 
import { useState } from "react";
import "./styles/_index.scss";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <>
    <nav>
    {/* mobile */}
    <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
      <div onClick={openNav} className="mobile-navbar__close">
        <i className="fa-solid fa-xmark"></i>
      </div>
      <ul className="mobile-navbar__links">
        <li>
          <Link onClick={openNav} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={openNav} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link onClick={openNav} to="/models">
            Models
          </Link>
        </li>
        <li>
          <Link onClick={openNav} to="/testimonials">
            Testimonials
          </Link>
        </li>
        <li>
          <Link onClick={openNav} to="/team">
            Our Team
          </Link>
        </li>
        <li>
          <Link onClick={openNav} to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>

    {/* desktop */}

    <div className="navbar">
      <div className="navbar__img">
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <img src={Logo} alt="logo-img" />
        </Link>
      </div>
      <ul className="navbar__links">
        <li>
          <Link className="home-link" to="/">
            Anasayfa
          </Link>
        </li>
        <li>
          {" "}
          <Link className="about-link" to="/about">
            Hakkımızda
          </Link>
        </li>
        <li>
          {" "}
          <Link className="models-link" to="/models">
            Araçlar
          </Link>
        </li>
        <li>
          {" "}
          <Link className="contact-link" to="/contact">
            İletişim
          </Link>
        </li>
        <li>
        <div className="navbar__buttons">
        <Link className="navbar__buttons__sign-in" to="/">
          Giriş Yap
        </Link>
        <Link className="navbar__buttons__register" to="/">
          Kayıt Ol
        </Link>
      </div>

        </li>
      </ul>

      {/* mobile */}
      <div className="mobile-hamb" onClick={openNav}>
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  </nav>
  </>
  );
};
export default Navbar;
