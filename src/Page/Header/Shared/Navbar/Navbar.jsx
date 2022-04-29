import React from "react";
import logo from "../../../../img/logo.png";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div>
        <aside className="text-light py-3">
          <div className="aside-container container">
            <div>
              <span>
                {" "}
                <i class="fa-solid fa-clock text-primary"></i> Mon - Tues : 6.00
                am - 10.00 pm, Sunday Closed
              </span>
            </div>
            <div className="d-flex align-items-center justify-content-center mt-1">
              <div className="social-icons">
                <a href="/">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>

                <a href="/">
                  <i class="fa-brands fa-twitter"></i>
                </a>
                <a href="/">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="/">
                  <i class="fa-brands fa-google-plus-g"></i>
                </a>
              </div>
              <div className="user-login">
                <a href="/">Login</a>
                <span>or</span>
                <a href="/">Register</a>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <div className="navbar-container">
        <nav class="navbar navbar-expand-lg  container">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img className="img-fluid" src={logo} alt="" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class=" navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link text-light" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light" href="#">
                    Link
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light" href="#">
                    Link
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light" href="#">
                    Link
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light" href="#">
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
