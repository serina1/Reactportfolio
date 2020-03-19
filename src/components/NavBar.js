import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <React.Fragment>
      <nav className="nav-container">
        <ul className="tabs">
          <li>
            <Link to="/" className="link">
              About
            </Link>
          </li>
          <li> | </li>
          <li>
            <Link to="/contact" className="link">
              Contact
            </Link>
          </li>
          <li> | </li>

          <li>
            <Link to="/portfolio" className="link">
              Portfolio
            </Link>
          </li>
          <li> | </li>

          <li>
            <a
              href="https://www.linkedin.com/in/serina-mohammed-970760a5/" className="link">
                LinkedIn
            </a>
          </li>
          <li> | </li>
          <li>
            <a 
                href="https://github.com/serina1" className="link">
                GitHub
            </a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default NavBar;