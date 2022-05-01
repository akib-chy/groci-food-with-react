import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import toast from "react-hot-toast";

const AddProduct = () => {
  const imgRef = useRef("");
  const nameRef = useRef("");
  const priceRef = useRef("");
  const quantityRef = useRef("");
  const suplyerRef = useRef("");
  const descriptionRef = useRef("");
  const handleAddProduct = (e) => {
    e.preventDefault();
    const img = imgRef.current.value;
    const name = nameRef.current.value;
    const price = priceRef.current.value;
    const quantity = quantityRef.current.value;
    const suplayerName = suplyerRef.current.value;
    const description = descriptionRef.current.value;
    if (!img || !name || !price || !quantity || !suplayerName || !description) {
      return toast.error("Please Fil Up All Input Value");
    } else if (isNaN(price)) {
      return toast.error("Please Price Must Be Number");
    } else if (isNaN(quantity)) {
      return toast.error("Please Quantity Must Be Number");
    }
    const product = { img, price, name, suplayerName, quantity, description };
    fetch("http://localhost:5000/products", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        //   const newUser = [...users, data];
        //   setUsers(newUser);
        toast.success("Product Added SuccessFull");
      });
    e.target.reset();
  };
  return (
    <div>
      <div className="login-container">
        <div className="shadow p-4 my-4">
          <Form onSubmit={handleAddProduct}>
            <h3 className="text-warning fw-bold text-center">Add Product</h3>
            <Form.Group className="mb-3" controlId="formBasicImgURL">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                required
                ref={imgRef}
                type="text"
                className="shadow-none border-primary"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                ref={nameRef}
                type="text"
                className="shadow-none border-primary"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                required
                ref={priceRef}
                type="text"
                className="shadow-none border-primary"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicQuantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                required
                ref={quantityRef}
                type="text"
                className="shadow-none border-primary"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicSuplyerName">
              <Form.Label>Suplyer Name</Form.Label>
              <Form.Control
                required
                ref={suplyerRef}
                type="text"
                className="shadow-none border-primary"
              />
            </Form.Group>
            <textarea
              ref={descriptionRef}
              name=""
              id=""
              cols="40"
              rows="5"
              className="w-100 border-primary active-border-0 mb-3 rounded"
            ></textarea>
            <Button
              className="shadow-none px-4 w-100 py-2 fw-bold"
              variant="warning"
              type="submit"
            >
              Add Product
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
