import React from "react";
import "./Footer.css";

const Footer = () => {
  const time = new Date();
  const year = time.getFullYear();
  return (
    <footer>
      <p className="m-0">
        <small>
          Copyright &copy; {year} Groci Food | Designg-By :{" "}
          <a
            className="text-decoration-none text-warning"
            target="_black"
            href="https://www.facebook.com/Minhajul69"
          >
            AKIB
          </a>
        </small>
      </p>
    </footer>
  );
};

export default Footer;
