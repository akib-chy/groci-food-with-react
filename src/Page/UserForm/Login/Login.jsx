import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const handleLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
    e.target.reset();
  };
  return (
    <div className="login-container">
      <div className="shadow p-4 my-4">
        <Form onSubmit={handleLogin}>
          <h3 className="text-primary fw-bold text-center">Please Login</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              ref={emailRef}
              type="email"
              placeholder="Enter email"
              className="shadow-none"
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
          <button className="btn btn-link shadow-none">
            Forget-password ?
          </button>
          <p className="text-center">
            New to Combo | Immigrationt ?{" "}
            <Link className="text-decoration-none fw-bold" to="/register">
              Register
            </Link>
          </p>
          <Button
            className="shadow-none px-4 w-100 py-2 fw-bold"
            variant="primary"
            type="submit"
          >
            login
          </Button>
        </Form>
        <SocialLogin />
      </div>
    </div>
  );
};

export default Login;
