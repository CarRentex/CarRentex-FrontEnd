import React from 'react'
import { Link } from 'react-router-dom'
import './AdminNavbar.css'
import { FaBell } from 'react-icons/fa'


type Props = {}

const AdminNavbar = (props: Props) => {
  return (
    <div className="top__nav">
    <div className="top__nav-wrapper">
      <div className="search__box">
        <input type="text" placeholder="search or type" />
        <span>
          <i>
            deneme
          </i>
        </span>
      </div>
      <div className="top__nav-right">
        <span className="notification">
          <i className="ri-notification-3-line">
          <FaBell />
          </i>
          <span className="badge">1</span>
          
        </span>
        <div className="profile">
          <Link to="/settings">
          <img
            src="/images/42profil.JPG"
            className=" ml-5 pb-1 "
            alt="logo"
            style={{ width: "50px", height: "50px" }}
          />
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AdminNavbar