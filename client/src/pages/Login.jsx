import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="border border-[#a9a4a4] shadow-md max-w-[560px] w-full py-8">
        <h1 className="text-center text-3xl">Login Page</h1>
        <div className="px-4 py-4 flex flex-col gap-4">
          <div className="border border-[#a9a4a4] shadow-md relative flex flex-col">
            <label
              className="absolute -top-[25%] left-2 bg-white px-1 text-[13px]"
              htmlFor="username"
            >
              User Details
            </label>
            <input
              type="text"
              id="username"
              placeholder="Find by @username, email or phone"
              className="py-2 px-2"
              required
            />
          </div>

          <div className="border border-[#a9a4a4] shadow-md relative flex flex-col">
            <label
              className="absolute -top-[25%] left-2 bg-white px-1 text-[13px]"
              htmlFor="username"
            >
              Password
            </label>
            <input
              type="password"
              id="username"
              placeholder="Enter Password: (*********)"
              className="py-2 px-2"
              required
            />
          </div>

          <div className="flex justify-between">
            <Link to="/recover-account">Forgot Account Details?</Link>
            <Link to="/password-reset">Forgot Password?</Link>
          </div>

          <div className="flex">
            <button
              className="border border-[#a9a4a4] shadow-md flex-1 bg-[#535252] text-white py-2 border-r text-center"
            >
              Log In
            </button>
            <Link
              to="/register"
              className="border border-[#a9a4a4] flex-1 py-2 text-center"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
