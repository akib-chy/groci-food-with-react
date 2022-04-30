import React from "react";
import useProducts from "../../Hooks/useProducts";
import AllProduct from "../AllProducts/AllProduct";

const Inventorys = () => {
  const [products] = useProducts();
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.slice(0, 6).map((product) => (
          <AllProduct product={product} />
        ))}
      </div>
    </div>
  );
};

export default Inventorys;
