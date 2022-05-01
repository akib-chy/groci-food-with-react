import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import AllProduct from "../AllProducts/AllProduct";

const Inventorys = () => {
  const [products] = useProducts();
  return (
    <div className="container">
      <h1 className="text-center fw-bold my-4 text-warning">Inventory</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.slice(0, 6).map((product) => (
          <AllProduct key={product._id} product={product} />
        ))}
      </div>
      <div className="text-center mt-5">
        <Link className="btn btn-danger shadow-none p-3" to="/manageInventory">
          Manage Inventory
        </Link>
      </div>
    </div>
  );
};

export default Inventorys;
