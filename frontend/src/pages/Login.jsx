import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginImage from "../assets/login.webp"
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex ml-auto justify-center items-center">
      <div className="w-full md:w-1/2 flex-col justify-center item-center p-8 md:p-12 border border-gray-200 m-12">
        <form action="" method="post" className="gap-2 w-full flex flex-col">
          <h2 className="text-2xl font-bold text-center mb-6">Hey There</h2>

          <div
            className=" max-w- bg-white 
                rounded-lg  items-center justify-between"
          >
            <label for="email" className="block text-sm mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-lg px-2 py-1 border-gray-500 w-full"
              placeholder="Enter Your Email"
            />
          </div>
          <div
            className=" bg-white 
                rounded-lg  items-center justify-between"
          >
            <label for="email" className="block text-sm mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded-lg px-2 py-1 border-gray-500 w-full"
              placeholder="Enter Your Password"
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white  cursor-pointer border rounded-lg> px-2 py-1 border-gray-500"
          >
            Sign In
          </button>
          <p className="mt-6 text-center text-sm">Don't have an account?{" "}<Link className="text-blue-600" to="/register">Register</Link></p>
        </form>
      </div>
      <div className="md:w-1/2 hidden md:border-l-amber-50 md:block bg-gray-300">
        <img src={loginImage} alt="login image" className="h-[550px] w-full object-cover" />

      </div>
    </div>
  );
};

export default Login;
