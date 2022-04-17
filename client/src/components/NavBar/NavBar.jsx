import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Nav.css";
import "./Button.css";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiOutlineHeart,
} from "react-icons/hi";

import Login from "../Login/Login";
import Cookies from "js-cookie";

const NavBar = (props) => {
  const token = Cookies.get("Auth");

  const logoutClick = () => {
    Cookies.remove("Auth");
    window.location.reload();
  };
  const RenderMenu = () => {
    if (token) {
      return (
        <>
          <NavLink
            className="nav-links "
            to="/dashboard"
            activeclassname="active"
          >
            <li>
              <HiOutlineHeart fontSize="1.3em" />
            </li>
          </NavLink>

          <NavLink className="nav-links" to="/order" activeclassname="active">
            <li>
              <HiOutlineShoppingBag fontSize="1.3em" />
            </li>
          </NavLink>
          <NavLink className="nav-links " to="/#" activeclassname="active">
            <li className="nav-item dropdown">
              <span
                className="dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              >
                <HiOutlineUser fontSize="1.3em" />
                &nbsp; <span className="userName">Welcome</span>
              </span>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <span className="dropdown-item" onClick={logoutClick}>
                    Logout
                  </span>
                </li>
              </ul>
            </li>
          </NavLink>
        </>
      );
    } else {
      return (
        <>
          <li className="nav-links " activeclassname="active">
            <HiOutlineUser
              fontSize="1.3em"
              className="login-btn"
              onClick={() => setButtonPopup(true)}
            />

            <Login trigger={buttonPopup} setTrigger={setButtonPopup}></Login>
          </li>
          <NavLink
            className="nav-links "
            to="/dashboard"
            activeclassname="active"
          >
            <li>
              <HiOutlineHeart fontSize="1.3em" />
            </li>
          </NavLink>

          <NavLink className="nav-links" to="/order" activeclassname="active">
            <li>
              <HiOutlineShoppingBag fontSize="1.3em" />
            </li>
          </NavLink>
        </>
      );
    }
  };
  const [isMobile, setIsMobile] = useState(true);
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div>
      <div className="container">
        <div className="row">
          <nav className="NavbarItems">
            <div className="menu-icon" onClick={() => setIsMobile(!isMobile)}>
              <i className={!isMobile ? "fas fa-times" : "fas fa-bars"}></i>
            </div>

            <div className="col-lg-4 col-first ">
              <ul className={!isMobile ? "nav-menu1 active" : "nav-menu1"}>
                <NavLink
                  className="nav-links1 "
                  to="/men"
                  activeclassname="active"
                >
                  <li>Men</li>
                </NavLink>
                <NavLink
                  className="nav-links1 "
                  to="/women"
                  activeclassname="active"
                >
                  <li>Women</li>
                </NavLink>
                <NavLink
                  className="nav-links1 "
                  to="/lookbooks"
                  activeclassname="active"
                >
                  <li>Lookbooks</li>
                </NavLink>
              </ul>
            </div>

            <div className="col-lg-4 ">
              <Link to="/" className="main" activeclassname="active">
                <h1 className="navbar-logo">SICKFITS &nbsp; NEPAL</h1>
              </Link>
            </div>

            <div className="col-lg-4 col-third">
              <ul className={!isMobile ? "nav-menu active" : "nav-menu"}>
                <RenderMenu />
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col col-2-first">
            <ul className={!isMobile ? "nav-menu1 active" : "nav-menu1"}></ul>
          </div>
          <div className="col col-sm-3 search">
            <input
              type="search"
              placeholder="Search"
              className="form-control"
              autoFocus="autofocus"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
