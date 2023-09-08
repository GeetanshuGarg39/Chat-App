import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <form className="h-auto md:h-[550px] min-w-[400px] w-[500px] bg-white rounded-2xl  flex flex-col  p-10 md:p-14 font-normal justify-center">
      <h1 className="mb-4 text-4xl ">Welcome Back :)</h1>

      <h1 className="pb-2 text-base">
        Please sign in to your account and start the adventure
      </h1>

      <div className="h-20mr-6 relative pt-4">
        <h1 className="pb-2 font-medium text-slate-600">Email</h1>
        <input
          type="text"
          className="shadow-inner p-2 text-slate-500 border-gray-300 border rounded-md w-full focus:outline-none focus:border-gray-400"
          placeholder="Enter your email"
        />
      </div>

      <div className="h-20 w-full mr-6 relative pt-4">
        <h1 className="pb-2 flex items-center justify-between font-medium text-slate-600">
          Password
        </h1>
        <div className="relative">
          <input
            type="password"
            className="shadow-inner text-slate-500 p-2 pr-10 border-gray-300 border rounded-md w-full focus:outline-none focus:border-gray-400"
            placeholder="Enter your password"
          />
        </div>
      </div>

      <div className="flex items-center pt-5">
        <input
          type="checkbox"
          id="remember_me"
          className="h-5 w-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
        />
        <label for="remember_me" className="ml-2 text-gray-600">
          Remember Me
        </label>
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 mt-8 rounded-md text-white px-5 py-2">
        Login
      </button>
      <p className="mx-auto mt-2 text-slate-600">
        New on our platform?
        <Link
          to="/auth/register"
          className="text-blue-500 hover:text-blue-800 ml-1"
        >
          Create an account
        </Link>
      </p>
    </form>
  );
};

export default Login;
