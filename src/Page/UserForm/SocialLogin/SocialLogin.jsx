import React from "react";
import logo from "../../../img/google.80956673d8cdb1b59fe1ad06ea1b7fd0.svg";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const handleGoogleLogin = () => {
    signInWithGoogle();
  };
  if (user) {
    toast.success("Google Login SuccessFull");
  }
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
