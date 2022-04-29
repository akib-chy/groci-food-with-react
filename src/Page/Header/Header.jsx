import React from "react";
import { Carousel } from "react-bootstrap";
import "./Header.css";
const Header = () => {
  return (
    <div className="header-container">
      <h3>header sectrion</h3>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="https://klbtheme.com/groci/wp-content/uploads/2018/08/slider2.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://klbtheme.com/groci/wp-content/uploads/2018/08/slider1.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Header;
