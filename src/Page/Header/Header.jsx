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
  if (products.length === 0) {
    return <Spiner />;
  }
  return (
    <div className="header-container">
      <Carousel fade>
        <Carousel.Item className="">
          <div className="dark-overlay">
            <img
              className="d-block w-100 "
              src="https://klbtheme.com/groci/wp-content/uploads/2018/08/slider2.jpg"
              alt="First slide"
            />
          </div>
          <Carousel.Caption>
            <h2 className="text-warning">Healthy Foods For Kids</h2>
            <p>We have a lot of healthy foods for the kids</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="dark-overlay">
            <img
              className="d-block w-100 "
              src="https://klbtheme.com/groci/wp-content/uploads/2018/08/2-2.jpg"
              alt="First slide"
            />
          </div>
          <Carousel.Caption>
            <h2 className="text-warning">Formalin Free</h2>
            <p>
              Our fruit does not contain any formalin. We sell formalin-laced
              fruit
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="dark-overlay">
            <img
              className="d-block w-100"
              src="https://klbtheme.com/groci/wp-content/uploads/2018/08/slider1.jpg"
              alt="Third slide"
            />
          </div>
          <Carousel.Caption>
            <h2 className="text-warning">Healthy Foods For All</h2>
            <p>
              If you are looking for healthy fruits then you can buy fruits from
              here
            </p>
          </Carousel.Caption>
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
