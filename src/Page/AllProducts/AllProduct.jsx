import React from "react";
import { useNavigate } from "react-router-dom";

const AllProduct = ({ product }) => {
  const { _id, img, name, price, description, quantity, suplayerName } =
    product;
  const navigate = useNavigate();
  const navigateToProductDetail = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="card h-100">
        <img src={img} className="card-img-top img-fluid" />
        <div className="card-body">
          <h4 className="card-title text-warning fw-bold mb-3">{name}</h4>
          <h5>Price: ${price}</h5>
          <p>Quantity: {quantity}</p>
          <p className="card-text">
            {description.slice(0, 125) + "...read more"}
          </p>
          <h6 className="text-primary">SupLyer Name; {suplayerName}</h6>
        </div>
        <div>
          <button
            onClick={() => navigateToProductDetail(_id)}
            className="btn btn-primary w-100 rounded-0 shadow-none"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
