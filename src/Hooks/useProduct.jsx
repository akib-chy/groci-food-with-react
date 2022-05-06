import { useEffect, useState } from "react";

const useProduct = (productId) => {
  const [singleProduct, setSingleProduct] = useState({});
  useEffect(() => {
    const url = `https://mysterious-temple-59624.herokuapp.com/product/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  }, [productId]);
  return [singleProduct, setSingleProduct];
};

export default useProduct;
