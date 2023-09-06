import React from "react";

const Register = () => {
  return (
    <div class="flex items-center">
      <div class="h-[100vh] w-2/3 bg-violet-100"></div>
      <div class="h-[100vh] w-1/3 bg-violet-200"></div>
      <form class="z-10 absolute right-28 w-1/3 bg-white rounded-2xl drop-shadow-2xl flex flex-col p-12 font-medium">
        <h1 class="pb-6 text-[20px] mx-auto font-semibold">
          REGISTRATION FORM
        </h1>
        <div class="flex">
          <div class="h-20 w-[22 mr-6">
            <h1 class="pb-2">First Name</h1>
            <input
              type="text"
              class="shadow-inner p-2 border-gray-300 border rounded-md w-full focus:outline-none focus:border-gray-400"
            />
          </div>
          <div class="h-20 w-[220px]">
            <h1 class="pb-2">Last Name</h1>
            <input
              type="text"
              class="shadow-inner p-2 border-gray-300 border rounded-md w-full focus:outline-none focus:border-gray-400"
            />
          </div>
        </div>
        <div class="pt-4">
          <h1 class="pb-2">Username</h1>
          <input
            type="text"
            class="shadow-inner p-2 border-gray-300 border rounded-md w-full focus:outline-none focus:border-gray-400"
          />
        </div>
        <div class="pt-4">
          <h1 class="pb-2">Email</h1>
          <input
            type="email"
            class="shadow-inner p-2 border-gray-300 border rounded-md w-full focus:outline-none focus:border-gray-400"
          />
        </div>
        <div class="flex pt-4">
          <div class="h-20 w-[220px] mr-6">
            <h1 class="pb-2">Password</h1>
            <input
              type="password"
              class="shadow-inner p-2 border-gray-300 border rounded-md w-full focus:outline-none focus:border-gray-400"
            />
          </div>
          <div class="h-20 w-[220px]">
            <h1 class="pb-2">Confirm Password</h1>
            <input
              type="password"
              class="shadow-inner p-2 border-gray-300 border rounded-md w-full focus:outline-none focus:border-gray-400"
            />
          </div>
        </div>
        <button class="bg-indigo-500 hover:bg-indigo-700 mt-8 rounded-md text-white px-5 py-2">
          Register
        </button>
        <p class="mx-auto mt-2">
          Already have an account?
          <a href="" class="text-indigo-500 hover:text-indigo-900 ml-1">
            Login
          </a>
        </p>
      </form>
      <div class="z-10 absolute left-20 top-28 text-6xl text-indigo-900">
        <h1 class="mb-4 font-bold">Transforming Group</h1>
        <h1 class="mb-4 font-extrabold">Communication Into</h1>
        <h1 class="mb-4 font-bold">Collaborative Experience</h1>
      </div>
      <div class="z-10 absolute left-20 bottom-36 text-5xl text-indigo-900">
        👋ChatApp
      </div>
    </div>
  );
};

export default Register;
