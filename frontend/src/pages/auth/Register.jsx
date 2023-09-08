import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <form className="h-[550px] min-w-[400px] w-[500px] bg-white rounded-2xl  flex flex-col p-10 md:p-12 font-normal  justify-center">
      <h1 className="text-4xl mb-4 ">Sign Up</h1>

      <h1 className="mb-6 text-base">
        Transforming Group Communication Into Collaborative Experience
      </h1>

      <div className="flex">
        <div className="h-20 mr-6 w-full">
          <h1 className="pb-2 font-medium text-slate-600">First Name</h1>
          <input
            type="text"
            className="shadow-inner p-2 text-slate-500 border-gray-300 border w-full rounded-md focus:outline-none focus:border-gray-400"
            placeholder="Enter your first name"
          />
        </div>
        <div className="h-20 w-full">
          <h1 className="pb-2 font-medium text-slate-600">Last Name</h1>
          <input
            type="text"
            className="shadow-inner p-2 text-slate-500 border-gray-300 border w-full rounded-md focus:outline-none focus:border-gray-400"
            placeholder="Enter your last name"
          />
        </div>
      </div>
      <div className="pt-4">
        <h1 className="pb-2 font-medium text-slate-600">Email</h1>
        <input
          type="email"
          className="shadow-inner p-2 text-slate-500 border-gray-300 border rounded-md w-full focus:outline-none focus:border-gray-400"
          placeholder="Enter your email"
        />
      </div>
      <div className="flex pt-4">
        <div className="w-full h-20 mr-6">
          <h1 className="pb-2 font-medium text-slate-600">Password</h1>
          <input
            type="password"
            className="shadow-inner p-2 text-slate-500 border-gray-300 border rounded-md w-full focus:outline-none focus:border-gray-400"
            placeholder="Enter password"
          />
        </div>
        <div className="h-20 w-full">
          <h1 className="pb-2 font-medium text-slate-600">Confirm Password</h1>
          <input
            type="password"
            className="shadow-inner p-2 text-slate-500 border-gray-300 border rounded-md w-full focus:outline-none focus:border-gray-400"
            placeholder="Confirm password"
          />
        </div>
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 mt-8 rounded-md text-white px-5 py-2">
        Register
      </button>
      <p className="mx-auto mt-2 text-slate-600">
        Already have an account?
        <Link to="/auth/login" className="text-blue-500 hover:text-blue-800 ml-1">
          Login
        </Link>
      </p>
    </form>
  );
};

export default Register;
