import React, { useState } from "react";
import SignUp from "./SignUp";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const changeVisible = () => {
    setIsVisible(true);
  };
  return (
    <div>
      <img src="" alt="logo" />
      <h4>UserName</h4>
      <button>Sign In</button>
      <button onClick={changeVisible}>Sign Up</button>
      <div>{isVisible && <SignUp />}</div>
    </div>
  );
};

export default Header;
