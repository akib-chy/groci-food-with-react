import { useEffect, useState } from "react";

const useProduct = (productId) => {
  const [singleProduct, setSingleProduct] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/product/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  }, [productId]);
  return [singleProduct];
};

export default useProduct;
