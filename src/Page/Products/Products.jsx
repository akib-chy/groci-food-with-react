import React from "react";
import useProducts from "../../Hooks/useProducts";
import Spiner from "../../Shared/Spiner/Spiner";
import AllProduct from "../AllProducts/AllProduct";

const Products = () => {
  const [products] = useProducts();
  if (products.length === 0) {
    return <Spiner />;
  }
  return (
    <div className="container my-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product) => (
          <AllProduct key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
