import React, { useState } from "react";
import "./Nav.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
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
        style={{ background: "#fff", width: "100%" }}
      >
        <div className="container justify-content-around">
          <Link to="/">
            <img style={{ width: "100px" }} src="./image/Logo.png" alt="lOGO" />
          </Link>
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
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#AboutUS">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Testimonial">
                  Testimonial
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#Team">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/TourList">
                  Tours
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav  ps-5">
              <li className="nav-item me-3 me-lg-0">
                <Link className="nav-link" to="Login">
                  Login
                </Link>
              </li>

              <li className="nav-item me-3 me-lg-0">
                <Link className="nav-link" to="/Choose">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
