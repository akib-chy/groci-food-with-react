import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axiosPrivet from "../../AxiosPrivet/AxiosPrivet";
import auth from "../../firebase.init";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getOrder = async () => {
      try {
        const email = user?.email;
        const url = `https://mysterious-temple-59624.herokuapp.com/orders?email=${email}`;
        const { data } = await axiosPrivet.get(url);
        setOrders(data);
      } catch (error) {
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getOrder();
  }, [user]);
  const handleDeleteProduct = (id) => {
    const confirm = window.confirm("Are Sure You Delete This Product ?");
    if (confirm) {
      const url = `https://mysterious-temple-59624.herokuapp.com/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = orders.filter((product) => product._id !== id);
          setOrders(remaining);
          toast.success("Your Product Delete SuccessFull");
        });
    }
  };
  return (
    <div className="container my-4">
      <h2 className="text-center fw-bold text-warning">
        Add order: {orders.length}
      </h2>
      <Table striped bordered hover>
        <thead className="text-center bg-dark">
          <tr>
            <td className="text-light">Name</td>
            <td className="text-light">Email</td>
            <td className="text-light">Price</td>
            <td className="text-light">Quantity</td>
          </tr>
        </thead>
        <tbody className="text-center">
          {orders.map((order) => (
            <tr key={order._id}>
              <td className="text-center">{order?.name}</td>
              <td>Name: ${order?.name}</td>
              <td>Price: {order?.price}</td>
              <td className="text-end">
                <button
                  onClick={() => handleDeleteProduct(order?._id)}
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

export default MyItems;
