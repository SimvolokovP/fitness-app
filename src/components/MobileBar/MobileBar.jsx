import { NavLink } from "react-router-dom";
import { navLinks } from "../../utils/utils";


import './MobileBar.css';

export default function MobileBar() {
  return (
    <div className="mobile-bar">
      <div className="container mobile-bar__container">
        <nav className="mobile-bar__nav">
        <ul className="list-reset">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  key={link.path}
                  className={({ isActive }) =>
                    isActive ? "mobile-bar__link active" : "mobile-bar__link"
                  }
                  to={link.path}
                >
                  <span>{<link.icon size={20} />}</span>
                  <div>{link.text}</div>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
