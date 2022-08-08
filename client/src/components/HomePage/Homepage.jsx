import React from "react";
import "./HomePage.css";
import { GiReturnArrow } from "react-icons/gi";
import { BsCreditCard2Back, BsTruck } from "react-icons/bs";
import { NavLink } from "react-router-dom";

function Homepage() {
  return (
    <div className="container homepage-container">
      <div className="col-lg-12 ">
        <div className="row">
          <div className="col-lg-4 ms-4 text-center service">
            <GiReturnArrow color="darkgrey" fontSize="1.5em" /> &nbsp; Free
            returns and pickup service
          </div>
          <div className="col-lg-3 ms-4 text-center service">
            <BsTruck color="darkgrey" fontSize="1.5em" /> &nbsp; Fast and secure
            delivery
          </div>
          <div className="col-lg-4 ms-5 text-center service ">
            <BsCreditCard2Back color="darkgrey" fontSize="1.5em" /> &nbsp;
            Secure payment
          </div>
        </div>
        <div className="row image-home">
          <div className="col-lg-6">
            <NavLink to="/men" className="home-link">
              <img
                src={"http://localhost:3001/uploads/1650384409622.jpg"}
                alt=""
              />
              <li className="title-home text-center">SHOP MEN</li>
            </NavLink>
          </div>
          <div className="col-lg-6">
            <NavLink to="/women" className="home-link">
              <img
                src={"http://localhost:3001/uploads/1650384418938.jpg"}
                alt=""
              />
              <li className="title-home text-center">SHOP WOMEN</li>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
