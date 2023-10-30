import React from "react";
import { FaHome, FaSearch, FaSignInAlt, FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

function Nav() {

  return (
    <>
      <div class="container">
        <div class="nav">
          <div class="logo">
            <img src={process.env.PUBLIC_URL + "/assets/images/logo-03.png"} alt="LOGO" />
          </div>
          <div class="menuBar">
            <ul class="menuBar-links">
              <li class="link home">
                <Link to='/home' className="link home" >
                  <FaHome />
                  Home
                </Link>
              </li>
              <li class="menuLink">
                <Link to='/shop' className="link menuLink" >
                  Shop
                </Link>
              </li>
              <li>
                <Link to='/products' className="link menuLink" >
                  Features
                </Link>
              </li>
              <li>
                <Link to='/blog' className="link menuLink" >
                  Blog
                </Link>
              </li>
              <li>
                <Link to='/about' className="link menuLink" >
                  About
                </Link>
              </li>
              <li>
                <Link to='/contact' className="link menuLink" >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div class="searchBar">
            <input type="text" class="searchBox" />
            <FaSearch />
          </div>
          <div class="loginBox">
            <div class="login">
              <FaSignInAlt />
            </div>
            <div class="shoppingCart">
              <FaCartPlus />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;