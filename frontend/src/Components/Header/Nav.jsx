import React, { useState } from "react";
import "./Nav.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
export default function Nav() {
  const [IsTogle, setTogle] = useState(false);
  const handeltogle = () => {
    if (IsTogle) {
      setTogle(false);
    } else {
      setTogle(true);
    }
  };
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-light  mask-custom shadow-0"
        style={{ background: "#ffffff2b", position: "absolute", zIndex: "2", width: "100%" }}
      >
        <div className="container">
          <a className="navbaainerr-brand" href="#!">
            <img style={{ width: "100px" }} src="./image/Logo.png" alt="lOGO" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handeltogle}
          >
            <i className="fas fa-bars"></i>
          </button>
          <div
            className={IsTogle ? "collapse navbar-collapse show" : "collapse navbar-collapse "}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto ps-5">
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Customer Says
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Team
                </a>
              </li>
              <li className="nav-item me-3 me-lg-0">
                <a className="nav-link" href="#!">
                  Login
                </a>
              </li>

              <li className="nav-item me-3 me-lg-0">
                <a className="nav-link" href="#!">
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
