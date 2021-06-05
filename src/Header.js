import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <nav className="header-container">
        <div className="header-title-container">
          <h1 className="title">Lucie Bellenger</h1>
          <h2 className="title">Full Stack Web Developer</h2>
        </div>

        {menuOpen ? (
          <FontAwesomeIcon
            icon={faTimes}
            className="icons-header fa-lg"
            onClick={toggleMenu}
          />
        ) : (
          <FontAwesomeIcon
            icon={faEllipsisH}
            className="icons-header fa-lg"
            onClick={toggleMenu}
          />
        )}
      </nav>
    </>
  );
}
