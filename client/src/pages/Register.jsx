import React, { useState } from "react";
import { Link } from "react-router";

const Register = () => {
    const [formData, setFormData] = useState({
        username:"",
        email:"",
        phone:"",
        password:"",
        confirmPassword:""
    })

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="border border-[#a9a4a4] shadow-md max-w-[560px] w-full py-8">
        <h1 className="text-center text-3xl">Register Page</h1>
        <form className="px-4 py-4 flex flex-col gap-4">
          <div className="border border-[#a9a4a4] shadow-md relative flex flex-col">
            <label
              className="absolute -top-[25%] left-2 bg-white px-1 text-[13px]"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Find your @username"
              className="py-2 px-2"
              required
            />
          </div>

          <div className="border border-[#a9a4a4] shadow-md relative flex flex-col">
            <label
              className="absolute -top-[25%] left-2 bg-white px-1 text-[13px]"
              htmlFor="username"
            >
              Email
            </label>
            <input
              type="email"
              id="username"
              placeholder="Enter your email: (example@gmail.com)"
              className="py-2 px-2"
              required
            />
          </div>

          <div className="border border-[#a9a4a4] shadow-md relative flex flex-col">
            <label
              className="absolute -top-[25%] left-2 bg-white px-1 text-[13px]"
              htmlFor="username"
            >
              Phone
            </label>
            <input
              type="tel"
              id="username"
              placeholder="Enter your phone: (9999994296)"
              className="py-2 px-2"
              required
              minLength="10"
              maxLength="10"
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
              placeholder="Create Password: (*********)"
              className="py-2 px-2"
              required
            />
          </div>

          <div className="border border-[#a9a4a4] shadow-md relative flex flex-col">
            <label
              className="absolute -top-[25%] left-2 bg-white px-1 text-[13px]"
              htmlFor="username"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="username"
              placeholder="Re-Type Password: (*********)"
              className="py-2 px-2"
              required
            />
          </div>

          <div className="flex">
            <Link
              to="/login"
              className="border border-[#a9a4a4] flex-1 py-2 border-r text-center"
            >
              Log In
            </Link>
            <button
              className="border border-[#a9a4a4] shadow-md flex-1 bg-[#535252] text-white py-2 text-center"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
