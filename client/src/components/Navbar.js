import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  const title = "University";
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <nav
            className="navbar navbar-expand-lg navbar-dark py-0"
            style={{ backgroundColor: "#000000" }}
          >
            <NavLink className="navbar-brand" to="/">
              {" "}
              {title}
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
