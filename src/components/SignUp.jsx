import React from "react";
import { useDispatch } from "react-redux";
import { postUser } from "../redux/slices/authSlice";
//https://api.escuelajs.co/api/v1/users/

const SignUp = () => {
  const dispatch = useDispatch();

  const onSubmit = (e, values) => {
    console.log(values);
    e.preventDefault();
    dispatch(postUser(values));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="name" name="name" />
        <input type="email" placeholder="email" name="email" />
        <input type="password" placeholder="password" name="password" />
        <input type="text" placeholder="avatar" name="avatar" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default SignUp;
