import React from "react";
// Font awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          Welcome To Scott's Portal
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#00FFFF" }} />
          {/* <span className="navbar-toggler-icon"></span> */}
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
            <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                about me
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">
                services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio">
                portfolio
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/contact">
                contact
              </Link>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="https://www.canva.com/design/DAEmt8Bj4no/gScuvdT-CtwTGKf05Q0pxQ/view?utm_content=DAEmt8Bj4no&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton">
                resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
