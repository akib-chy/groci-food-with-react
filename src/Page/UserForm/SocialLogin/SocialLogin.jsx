import React from "react";
import logo from "../../../img/google.80956673d8cdb1b59fe1ad06ea1b7fd0.svg";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import toast from "react-hot-toast";
import Spiner from "../../../Shared/Spiner/Spiner";
import { useLocation, useNavigate } from "react-router-dom";
import useToken from "../../../Hooks/useToken";

const SocialLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [token] = useToken(user);
  if (loading) {
    return <Spiner />;
  }
  if (error?.message) {
    toast.error(error.message.split(":")[1]);
  }
  if (token) {
    toast.success("GoogleLogin User SuccessFUll");
    setTimeout(() => {
      navigate(from, { replace: true });
    }, 2000);
  }
  const handleGoogleLogin = () => {
    signInWithGoogle();
  };

  return (
    <div>
      <button
        onClick={handleGoogleLogin}
        className="btn border-primary w-100 mt-3 shadow-none"
      >
        <img src={logo} alt="" /> ConTinue With Google
      </button>
    </div>
  );
};

export default SocialLogin;
