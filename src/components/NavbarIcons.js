import React from "react";
import { navIcons } from "../utils/constants";

const NavbarIcons = () => {
  return (
    <nav className="nav-icons">
      <div className="section-center nav-icons-center">
        <p>We make your home more quality.</p>
        <ul className="nav-icons-list">
          {navIcons.map((icon) => (
            <li key={icon.id}>
              <a href={icon.url} target="_blank" rel="noreferrer">
                {icon.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavbarIcons;
