import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closePhoneMenu = () => setClick(false);
  const Button = styled(motion.button)`
    padding: 1rem 3rem;
    font-size: 1rem;
    border: 2px solid;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    background: transparent;
    align-item: center;
  `;
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closePhoneMenu}>
            <motion.h
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            >
              CG
            </motion.h>
            <motion.i 
             initial={{ opacity: 0, y: -100 }}
             animate={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
            className="fas fa-coffee fa-s"></motion.i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closePhoneMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closePhoneMenu}>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closePhoneMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links-mobile"
                onClick={closePhoneMenu}
              >
                Hire Me
              </Link>
            </li>
          </ul>
          {button && (
            <Button
              whileHover={{ scale: 1.05, backgroundColor: "#e8c7c8" }}
              whileTap={{
                scale: 0.95,
                backgroundColor: "#e8c7c8",
                border: "none",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 2 } }}
            >
              HIRE ME
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
