import React from "react";
import { Carousel } from "react-bootstrap";
import OurService from "../OurService/OurService";
import "./Header.css";
const Header = () => {
  return (
    <div className="header-container">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="https://klbtheme.com/groci/wp-content/uploads/2018/08/slider2.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://klbtheme.com/groci/wp-content/uploads/2018/08/slider1.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <OurService />
    </div>
  );
};

export default Header;
