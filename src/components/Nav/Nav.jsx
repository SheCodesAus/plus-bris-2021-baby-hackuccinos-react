import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavbarDropdown from "react-navbar-dropdown";
import { faCaretUp,faCaretDown, } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    window.localStorage.getItem("token")
  );

  const logout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate.push('/');
  };

  const navigate = useNavigate();

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/impact">Impact</Link>
      <Link to="/contact">Contact</Link>
      <NavbarDropdown>
        <NavbarDropdown.Toggle className="nav-drop">
          Portal
          <NavbarDropdown.Open>
            <FontAwesomeIcon icon={faCaretDown} fixedWidth className="arrow" />
          </NavbarDropdown.Open>
          <NavbarDropdown.Close>
            <FontAwesomeIcon icon={faCaretUp} fixedWidth className="arrow" />
          </NavbarDropdown.Close>
        </NavbarDropdown.Toggle>
        <NavbarDropdown.CSSTransitionMenu
          className="example1-dropdown-menu"
          classNames="example1-dropdown-menu"
          timeout={200}
        >
          <NavbarDropdown.Item className="example1-dropdown-menu-item">
            <div className="example1-dropdown-menu-item__spacer" />
            <Link to="/coders">Coders Tribe</Link>
          </NavbarDropdown.Item>
          {isLoggedIn && (
          <NavbarDropdown.Item className="example1-dropdown-menu-item">
            <div className="example1-dropdown-menu-item__spacer" />
            <Link to="/submit">Create Profile</Link>
          </NavbarDropdown.Item>
          )}
          <NavbarDropdown.Item className="example1-dropdown-menu-item">
            <div className="example1-dropdown-menu-item__spacer" />
            {!isLoggedIn && (
            <Link to="/login">Login/Sign Up</Link>
            )}
            {isLoggedIn && (
            <Link onClick={logout} to="/">Logout</Link>
            )}
          </NavbarDropdown.Item>
        </NavbarDropdown.CSSTransitionMenu>
      </NavbarDropdown>
    </nav>
  );
};

export default Nav;
