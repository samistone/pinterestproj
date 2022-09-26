import React from "react";
import { Link } from "react-router-dom";
import PinprojButton from "../components/buttons";

const SignupPage = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div className="btnstyle">
        <PinprojButton variant = "secondary">Log in</PinprojButton>
        <PinprojButton variant = "primary">Sign up</PinprojButton>
        </div> 
      </div>
    </>
  );
};

export default SignupPage;
