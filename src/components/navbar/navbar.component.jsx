import React, { useState, useEffect } from "react";
import "./navbar.style.css";
import { Link } from "react-scroll";
import {
  getLocalStorageItem,
  removeLocalStorageItem,
  setLocalStorageItem,
} from "../../utils/storage";
import ToggleSwitch from "../common/toggle-switch.component";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 90) {
        if (!nav) {
          setNav(true);
        }
      } else {
        setNav(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [nav]);

  const handleToggle = () => {
    if (getLocalStorageItem("theme")) {
      document
        .querySelector("body")
        .classList.remove(getLocalStorageItem("theme"));
      removeLocalStorageItem("theme");
    } else {
      setLocalStorageItem("theme", "dark");
      document
        .querySelector("body")
        .classList.add(getLocalStorageItem("theme"));
    }
  };

  return (
    <nav className={`nav ${nav && "nav__sticky"}`}>
      <div className="logo">
        <img src="/assets/img/avatar.jpg" alt="avatar" />
      </div>
      <div className={`navlinks ${showMenu ? "navlinks-show-menu" : ""}`}>
        <ul>
          <li className="nav-link">
            <Link
              to="home"
              spy
              smooth
              hashSpy
              offset={-100}
              duration={500}
              delay={100}
            >
              Home
            </Link>
          </li>
          <li className="nav-link">
            <Link
              to="skills"
              spy
              smooth
              hashSpy
              offset={-250}
              duration={500}
              delay={100}
            >
              Skills
            </Link>
          </li>
          <li className="nav-link">
            <Link
              to="about"
              spy
              smooth
              hashSpy
              offset={-100}
              duration={500}
              delay={100}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
      <span className="toggle-switch-container">
        <ToggleSwitch
          onChange={handleToggle}
          isToggled={!!getLocalStorageItem("theme")}
        />
      </span>
      <div className="nav-menu">
        <button onClick={toggleMenu}>
          {!showMenu ? (
            <i className="fas fa-bars"></i>
          ) : (
            <i className="fas fa-times"></i>
          )}
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
