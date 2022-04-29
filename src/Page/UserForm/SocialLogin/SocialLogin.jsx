import React from "react";
import logo from "../../../img/google.80956673d8cdb1b59fe1ad06ea1b7fd0.svg";

const SocialLogin = () => {
  return (
    <div>
      <button className="btn border-primary w-100 mt-3 shadow-none">
        <img src={logo} alt="" /> ConTinue With Google
      </button>
    </div>
  );
};

export default SocialLogin;
