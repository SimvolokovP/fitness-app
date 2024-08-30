import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { useEffect, useState } from "react";

import "./Header.css";
import Burger from "../Burger/Burger";

export default function Header() {
  const [sidebar, setSidebar] = useState(false);
  const [position, setPosition] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      let moving = window.scrollY;

      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const headerClasses = visible ? "header visible" : "header hidden";

  return (
    <header className={ headerClasses }>
      <div className="container header__container">
        <Link to={"/"} className="economica header__logo">Fitness-Timeout</Link>
        <Burger setSidebar={setSidebar} active={sidebar} />
      </div>
      <Sidebar open={sidebar} toggleOpen={setSidebar} />
    </header>
  );
}
