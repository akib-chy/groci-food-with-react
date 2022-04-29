import React from "react";
import "./OurService.css";
const OurService = () => {
  return (
    <div className="container service my-5">
      <h2 className="text-center mb-4 text-warning fw-bold">Our Service</h2>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-center">
          <div className="service-icon">
            <i className="fa-solid fa-truck-fast"></i>
          </div>
          <div>
            <h5 className="m-0">Free & Next Day Delivery</h5>
            <p>Lorem ipsum dolor sit amet consectetur </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-center">
          <div className="service-icon">
            <i className="fa-solid fa-basket-shopping"></i>
          </div>
          <div>
            <h5 className="m-0">100% Satisfaction Guarantee</h5>
            <p>Lorem ipsum dolor sit amet consectetur </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-center">
          <div className="service-icon">
            <i className="fa-solid fa-tags"></i>
          </div>
          <div>
            <h5 className="m-0">Great Daily Deals Discount</h5>
            <p>Lorem ipsum dolor sit amet consectetur </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
