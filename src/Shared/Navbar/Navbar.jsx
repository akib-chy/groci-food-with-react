import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../img/logo-1.webp";
import CustomLink from "../CustomLink/CustomLink";
import "./Navbar.css";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
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
                {user ? (
                  <button
                    onClick={handleSignOut}
                    className="btn btn-link text-decoration-none shadow-none"
                  >
                    Log Out
                  </button>
                ) : (
                  <Link to="/login">Login</Link>
                )}
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
                  <CustomLink
                    className="nav-link text-light"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </CustomLink>
                </li>
                <li className="nav-item">
                  <CustomLink
                    className="nav-link text-light"
                    to="/manageInventory"
                  >
                    Manage Inventory
                  </CustomLink>
                </li>
                <li className="nav-item">
                  <CustomLink className="nav-link text-light" to="/blogs">
                    Blogs
                  </CustomLink>
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
