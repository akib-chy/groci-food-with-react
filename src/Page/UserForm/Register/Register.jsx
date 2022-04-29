import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPassRef = useRef("");
  const handleRegister = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPassRef.current.value;
    if (password !== confirmPassword) {
      toast.error("Opps Your Pass Dosn't Match");
      return;
    }
    console.log(name, email);
    console.log(password, confirmPassword);
    e.target.reset();
  };
  return (
    <div className="login-container">
      <div className=" shadow p-4 my-4">
        <Form onSubmit={handleRegister}>
          <h3 className="text-primary fw-bold text-center">Please Register</h3>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name </Form.Label>
            <Form.Control
              required
              name="name"
              type="text"
              placeholder="Enter Name"
              className="shadow-none"
              ref={nameRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              name="email"
              type="email"
              placeholder="Enter email"
              className="shadow-none"
              ref={emailRef}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              ref={passwordRef}
              type="password"
              placeholder="Password"
              className="shadow-none"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              required
              name="conPass"
              type="password"
              placeholder="Confirm Password"
              className="shadow-none"
              ref={confirmPassRef}
            />
          </Form.Group>
          <p className="text-center">
            Already have an account ?{" "}
            <Link className="text-decoration-none fw-bold" to="/login">
              Login
            </Link>
          </p>
          <Button
            className="shadow-none px-4 w-100 py-2 fw-bold"
            variant="primary"
            type="submit"
          >
            Register
          </Button>
        </Form>
        <SocialLogin />
      </div>
    </div>
  );
};

export default Register;
