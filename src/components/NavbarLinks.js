import React from "react";
import logo from "../assets/logo.jpeg";
import { FaBars, FaSearch } from "react-icons/fa";
import { navLinks } from "../utils/constants";

const NavbarLinks = ({setIsSidebarOpen}) => {
  return (
    <nav className="nav-links">
      <div className="nav-links-center section-center">
        <div className="nav-header">
          <div className="logo-header">
            <img src={logo} alt="auhandy logo" />
            <div>
              <h5>auhandy</h5>
              <p>we repair everything</p>
            </div>
          </div>
          <button type="button" onClick={()=>{setIsSidebarOpen(true)}}>
            <FaBars />
          </button>
        </div>

        <ul className="nav-links-list">
          {navLinks.map((link) => {
            const { id, label } = link;
            return (
              <li key={id}>
                <a href="#">{label}</a>
              </li>
            );
          })}
          <li>
            <FaSearch />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarLinks;
