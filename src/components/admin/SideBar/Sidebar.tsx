import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Sidebar.css";
import navLinks from "../TestData";
import { Col } from "react-bootstrap";

const Sidebar = () => {

  const [mobileOpenState, setMobileOpenState] = React.useState<boolean>(false);

  return (
      <div 
      className={`transition-[background] transition-all duration-300  ${
          "clear-filter"
      }`}
      filter-color="blue">
      <Col xs={12} sm={2} className={`${mobileOpenState ? 'sidebarActive' : 'sidebar'}`} style={{}}>
      <img
          src="/carlogo.png"
          className="mt-1 ml-14 pb-1"
          alt="logo"
          style={{ width: "150px", height: "50px" }}
        />
        <div className="sidebar__content">
          <div className="menu">
            <ul className="nav__list">
              {navLinks.map((item, index) => (
                <li className="nav__item" key={index}>
                  <NavLink onClick={() => { setMobileOpenState(prev => !prev) }}
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__link" : "nav__link"
                    }
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
                <i className="fas fa-sign-out-alt"></i> Logout
              </span>
            </Link>
          </div>
        </div>
      </Col> 
      </div>
  );
};

export default Sidebar;