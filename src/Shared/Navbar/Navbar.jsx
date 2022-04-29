import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo-1.webp";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div>
        <aside className="text-light py-3 text-center">
          <div className="aside-container container">
            <div>
              <span>
                {" "}
                <i className="fa-solid fa-clock text-primary"></i> Mon - Tues :
                6.00 am - 10.00 pm, Sunday Closed
              </span>
            </div>
            <div className="d-flex align-items-center justify-content-center mt-1">
              <div className="social-icons">
                <a href="/">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>

                <a href="/">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="/">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="/">
                  <i className="fa-brands fa-google-plus-g"></i>
                </a>
              </div>
              <div className="user-login">
                <Link to="/login">Login</Link>
                <span>or</span>
                <Link to="/register">Register</Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <div className="navbar-container">
        <nav className="navbar navbar-expand-lg  container navbar-dark">
          <div className="container-fluid">
            <Link className="navbar-brand fs-2 fw-bold text-light" to="/">
              <img className="img-fluid" src={logo} alt="" />
            </Link>
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
              <ul className=" navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                <li className="nav-item">
                  <a
                    className="nav-link text-light"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#">
                    Link
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
