import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Sidebar.css";
import navLinks from "../NavLink";
import { Col } from "react-bootstrap";

const Sidebar = () => {
  const [mobileOpenState, setMobileOpenState] = React.useState<boolean>(false);

  return (
    <Col xs={12} sm={2} className="sidebar" style={{}}>
      <div className="sidebar__content">
        <div className="sidebar__top">
          <img
            src="/carlogo.png"
            className="mt-1 ml-10"
            alt="logo"
            style={{ width: "160px", height: "60px" }}
          />
        </div>

        <div className="menu">
          <ul className="nav__list mt-5">
            {navLinks.map((item, index) => (
              <li className="nav__item  mt-2" key={index}>
                <NavLink
                  onClick={() => {
                    setMobileOpenState((prev) => !prev);
                  }}
                  to={item.path}
                  className={`nav__link`}
                >
                  {item.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar__bottom">
          <Link to="/">
            <span>
              <i className="fas fa-sign-out-alt mt-5"></i> Logout
            </span>
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default Sidebar;
