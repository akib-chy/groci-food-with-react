import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header-container">
      <aside className="text-light py-3">
        <div className="d-flex container justify-content-between">
          <div>
            <span>
              {" "}
              <i class="fa-solid fa-clock text-primary"></i> Mon - Tues : 6.00
              am - 10.00 pm, Sunday Closed
            </span>
          </div>
          <div className="d-flex align-items-center">
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
  );
};

export default Header;
