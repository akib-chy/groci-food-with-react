import { async } from "@firebase/util";
import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, ResatError] =
    useSendPasswordResetEmail(auth);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (error) {
      AllError(error);
      return;
    }
    signInWithEmailAndPassword(email, password);
    toast.success("Login User SuccessFUll");
    e.target.reset();
  };
  const handleForgetPassword = async () => {
    const email = emailRef.current.value;
    if (!email) {
      toast.error("Type Valid Email");
      return;
    }
    await sendPasswordResetEmail(email);
    toast.success("Reset Email Sent");
  };
  const AllError = (errors) => {
    const error = errors?.message.splice(":")[1];
    toast.error(error);
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
          <button
            onClick={handleForgetPassword}
            className="btn btn-link shadow-none"
          >
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
