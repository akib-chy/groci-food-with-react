import React from "react";
import { Carousel } from "react-bootstrap";
import useProducts from "../../Hooks/useProducts";
import BgFoods from "../BgFoods/BgFoods";
import Contact from "../Contact/Contact";
import Inventorys from "../Inventorys/Inventorys";
import OurService from "../OurService/OurService";
import Spiner from "../../Shared/Spiner/Spiner";
import "./Header.css";
const Header = () => {
  const [products] = useProducts();
  return (
    <div className="header-container">
      {products.length === 0 && <Spiner />}
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
            className="d-block w-100 "
            src="https://klbtheme.com/groci/wp-content/uploads/2018/08/2-2.jpg"
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
      <BgFoods />
      <Inventorys />
      <Contact />
    </div>
  );
};

export default Header;
