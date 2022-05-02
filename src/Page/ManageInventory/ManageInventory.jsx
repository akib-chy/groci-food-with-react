import React from "react";
import { Table } from "react-bootstrap";
import toast from "react-hot-toast";
import useProducts from "../../Hooks/useProducts";

const ManageInventory = () => {
  const [products, setProducts] = useProducts();
  const handleDeleteProduct = (id) => {
    const confirm = window.confirm("Are Sure You Delete This Product ?");
    if (confirm) {
      const url = `https://mysterious-temple-59624.herokuapp.com/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
          toast.success("Product Delete SuccessFull");
        });
    }
  };
  return (
    <div className="container my-4">
      {products.map((product) => (
        <Table key={product._id} striped bordered hover>
          <tbody>
            <tr>
              <td className="text-center">{product?.name}</td>
              <td>Pice: ${product?.price}</td>
              <td>Quantity: {product?.quantity}</td>
              <td className="text-end">
                <button
                  onClick={() => handleDeleteProduct(product?._id)}
                  className="btn btn-outline-danger shadow-none"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
      ))}
    </div>
  );
};

export default ManageInventory;
