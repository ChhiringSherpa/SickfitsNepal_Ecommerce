import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Nav.css";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiOutlineHeart,
} from "react-icons/hi";
import Login from "../Login/Login";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

const NavBar = (props) => {
  const token = Cookies.get("Auth");
  const history = useHistory();

  const logoutClick = () => {
    Cookies.remove("Auth");
    localStorage.clear();
    history.push(`/`);
    window.location.reload();
  };

  const AdminMenu = () => {
    if (localStorage.getItem("email") === "admin@admin.com") {
      return (
        <>
          <div className=" col-lg-10  admin-links">
            <NavLink
              className="admin-navlink "
              to="/addproduct"
              activeclassname="active"
            >
              <li>Add Product</li>
            </NavLink>

            <NavLink
              className="admin-navlink ms-1"
              to="/orderlist"
              activeclassname="active"
            >
              <li>Orders</li>
            </NavLink>
          </div>
        </>
      );
    }
  };
  const RenderMenu = () => {
    if (token) {
      return (
        <>
          <NavLink
            className="nav-links "
            to="/wishlist"
            activeclassname="active"
          >
            <li>
              <HiOutlineHeart fontSize="1.3em" />
            </li>
          </NavLink>

          <NavLink
            className="nav-links"
            to="/shoppingbag"
            activeclassname="active"
          >
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
                &nbsp;{" "}
                <span className="userName">{localStorage.getItem("user")}</span>
              </span>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li onClick={logoutClick}>
                  <a className="dropdown-item">Logout</a>
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
            <div>
              <button
                className="login-btn"
                onClick={() => setModal(true)}
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <HiOutlineUser fontSize="1.3em" />
              </button>
            </div>

            <Login trigger={modal} setTrigger={setModal} />
          </li>

          <NavLink
            className="nav-links "
            to="/wishlist"
            activeclassname="active"
          >
            <li>
              <HiOutlineHeart fontSize="1.3em" />
            </li>
          </NavLink>

          <NavLink
            className="nav-links"
            to="/shoppingbag"
            activeclassname="active"
          >
            <li>
              <HiOutlineShoppingBag fontSize="1.3em" />
            </li>
          </NavLink>
        </>
      );
    }
  };
  const [isMobile, setIsMobile] = useState(true);

  const [modal, setModal] = useState(false);
  return (
    <div className="fixed-top navigation">
      <div className="container mt-3">
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
                  to="/lookbook"
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

      <div className="container mt-2">
        <div className="row">
          <div className="col-lg-8">
            <AdminMenu />
          </div>
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
