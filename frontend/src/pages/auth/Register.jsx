import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <form class="h-[550px] min-w-[400px] m-10 md:m-14 lg:w-1/3 bg-white rounded-2xl drop-shadow-2xl flex flex-col p-10 md:p-14 font-normal  justify-center">
      <h1 class="pb-6 text-[20px] mx-auto font-semibold">
        REGISTRATION FORM
      </h1>
      <div class="flex">
        <div class="h-20 mr-6 w-full">
          <h1 class="pb-2 font-medium text-slate-600">First Name</h1>
          <input
            type="text"
            class="shadow-inner p-2 text-slate-500 border-gray-300 border w-full rounded-md focus:outline-none focus:border-gray-400"
            placeholder="Enter your first name"
          />
        </div>
        <div class="h-20 w-full">
          <h1 class="pb-2 font-medium text-slate-600">Last Name</h1>
          <input
            type="text"
            class="shadow-inner p-2 text-slate-500 border-gray-300 border w-full rounded-md focus:outline-none focus:border-gray-400"
            placeholder="Enter your last name"
          />
        </div>
      </div>
      <div class="pt-4">
        <h1 class="pb-2 font-medium text-slate-600">Email</h1>
        <input
          type="email"
          class="shadow-inner p-2 text-slate-500 border-gray-300 border rounded-md w-full focus:outline-none focus:border-gray-400"
          placeholder="Enter your email"
        />
      </div>
      <div class="flex pt-4">
        <div class="w-full h-20 mr-6">
          <h1 class="pb-2 font-medium text-slate-600">Password</h1>
          <input
            type="password"
            class="shadow-inner p-2 text-slate-500 border-gray-300 border rounded-md w-full focus:outline-none focus:border-gray-400"
          />
        </div>
        <div class="h-20 w-full">
          <h1 class="pb-2 font-medium text-slate-600">Confirm Password</h1>
          <input
            type="password"
            class="shadow-inner p-2 text-slate-500 border-gray-300 border rounded-md w-full focus:outline-none focus:border-gray-400"
          />
        </div>
      </div>
      <button class="bg-indigo-500 hover:bg-indigo-700 mt-8 rounded-md text-white px-5 py-2">
        Register
      </button>
      <p class="mx-auto mt-2 text-slate-600">
        Already have an account?
        <Link to="/auth/login" class="text-indigo-500 hover:text-indigo-900 ml-1">
          Login
        </Link>
      </p>
    </form>
  );
};

export default Register;
