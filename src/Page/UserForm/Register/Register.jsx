import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import Spiner from "../../../Shared/Spiner/Spiner";
import useToken from "../../../Hooks/useToken";

const Register = () => {
  const [chacked, setChacked] = useState(false);
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPassRef = useRef("");
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile] = useUpdateProfile(auth);
  const [token] = useToken(user);
  if (loading) {
    return <Spiner />;
  }
  if (user || token) {
    toast.success("User Creat SuccessFull");
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }
  const handleRegister = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPassRef.current.value;
    if (!name || !email || !password || !confirmPassword) {
      toast.error("Please Fill Up Input Field");
    }
    if (password !== confirmPassword) {
      toast.error("Opps Your Pass Dosn't Match");
      return;
    }
    if (error) {
      toast.error(error.message.split(":")[1]);
      return;
    }
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
  };
  const handleAcceptCondition = (event) => {
    setChacked(event.target.checked);
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
          <Form.Group
            className="mb-3 shadow-none"
            controlId="formBasicCheckbox"
          >
            <Form.Check
              className={`${!chacked && "text-danger"} ${
                chacked && "text-success"
              }`}
              onClick={handleAcceptCondition}
              type="checkbox"
              label="Accept Every Term And Condition"
            />
          </Form.Group>
          <p className="text-center">
            Already have an account ?{" "}
            <Link className="text-decoration-none fw-bold" to="/login">
              Login
            </Link>
          </p>
          <Button
            className={`${!chacked && "disabled"} shadow-none w-100 py-2`}
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
