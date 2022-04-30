import React from "react";

const AllProduct = ({ product }) => {
  const { img, name, price, description, quantity, suplayerName } = product;
  return (
    <div class="col ">
      <div class="card h-100">
        <img className="img-fluid" src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h4 class="card-title text-warning fw-bold mb-3">{name}</h4>
          <h5>Price: ${price}</h5>
          <p>Quantity: {quantity}</p>
          <p class="card-text">{description.slice(0, 125)}</p>
          <h6 className="text-primary">SupLyer Name; {suplayerName}</h6>
        </div>
        <div>
          <button className="btn btn-primary w-100 rounded-0 shadow-none">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
