import { NavLink } from "react-router-dom";
import { navLinks } from "../../utils/utils";

import "./Sidebar.css";

export default function Sidebar({ open, toggleOpen }) {
  return (
    <div
      onClick={() => toggleOpen(false)}
      className={open ? "sidebar-container open" : "sidebar-container"}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={open ? "sidebar open" : "sidebar"}
      >
        <button className="sidebar__close" onClick={() => toggleOpen(false)}>
          <div></div>
          <div></div>
        </button>
        <nav className="sidebar__nav">
          <ul className="sidebar__nav--list list-reset">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  className={(l) =>
                    l.isActive ? "sidebar__link active" : "sidebar__link"
                  }
                  to={link.path}
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
