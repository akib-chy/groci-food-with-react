import React from "react";
import { Table } from "react-bootstrap";
import toast from "react-hot-toast";
import useProducts from "../../Hooks/useProducts";
import Spiner from "../../Shared/Spiner/Spiner";
import "./ManageInventory.css";

const ManageInventory = () => {
  const [products, setProducts] = useProducts();
  if (products.length === 0) {
    return <Spiner />;
  }
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
    <div className="container-fluid my-4 manage-items">
      <Table striped bordered hover>
        <tbody className="text-center bg-dark">
          <tr>
            <th className="text-light">Name</th>
            <th className="text-light">Email</th>
            <th className="text-light">Price</th>
            <th className="text-light">Delete</th>
          </tr>
        </tbody>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td className="text-center">{product?.name}</td>
              {product?.email ? (
                <td className="text-center">{product?.email}</td>
              ) : (
                <td className="text-center">Product Email NOt Set</td>
              )}
              <td>Pice: ${product?.price}</td>
              <td className="text-end">
                <button
                  onClick={() => handleDeleteProduct(product?._id)}
                  className="btn btn-outline-danger shadow-none"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageInventory;
