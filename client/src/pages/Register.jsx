import React, { useState } from "react";
import { Link, useNavigate } from "react-router";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log("Register Success");
      console.log(data);
      setFormData({
        username: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="border border-[#a9a4a4] shadow-md max-w-[560px] w-full py-8">
        <h1 className="text-center text-4xl">Register Page</h1>
        <form onSubmit={handleSubmit} className="px-4 py-4 flex flex-col gap-4">
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
              name="username"
              value={formData.username}
              placeholder="Find your @username"
              className="py-2 px-2"
              required
              onChange={handleChange}
            />
          </div>

          <div className="border border-[#a9a4a4] shadow-md relative flex flex-col">
            <label
              className="absolute -top-[25%] left-2 bg-white px-1 text-[13px]"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email: (example@gmail.com)"
              className="py-2 px-2"
              required
              onChange={handleChange}
            />
          </div>

          <div className="border border-[#a9a4a4] shadow-md relative flex flex-col">
            <label
              className="absolute -top-[25%] left-2 bg-white px-1 text-[13px]"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              placeholder="Enter your phone: (9999994296)"
              className="py-2 px-2"
              required
              minLength="10"
              maxLength="10"
              onChange={handleChange}
            />
          </div>

          <div className="border border-[#a9a4a4] shadow-md relative flex flex-col">
            <label
              className="absolute -top-[25%] left-2 bg-white px-1 text-[13px]"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              placeholder="Create Password: (*********)"
              className="py-2 px-2"
              required
              onChange={handleChange}
            />
          </div>

          <div className="border border-[#a9a4a4] shadow-md relative flex flex-col">
            <label
              className="absolute -top-[25%] left-2 bg-white px-1 text-[13px]"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              placeholder="Re-Type Password: (*********)"
              className="py-2 px-2"
              required
              onChange={handleChange}
            />
          </div>

          <div className="flex">
            <Link
              to="/login"
              className="border border-[#a9a4a4] flex-1 py-2 border-r text-center"
            >
              Log In
            </Link>
            <button className="border border-[#a9a4a4] shadow-md flex-1 bg-[#535252] text-white py-2 text-center">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
