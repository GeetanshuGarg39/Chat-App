import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../../sections/auth/LoginForm";

const Login = () => {
  return (
    <div className="h-auto md:h-[550px] min-w-[400px] w-[500px] bg-white rounded-2xl  flex flex-col  p-10 md:p-14 font-normal justify-center">
      <h1 className="mb-4 text-4xl ">Welcome Back :)</h1>

      <h1 className="pb-2 text-base">
        Please sign in to your account and start the adventure
      </h1>

      <LoginForm />

      <p className="mx-auto mt-2 text-slate-600">
        New on our platform?
        <Link
          to="/auth/register"
          className="text-blue-500 hover:text-blue-800 ml-1"
        >
          Create an account
        </Link>
      </p>
    </div>
  );
};

export default Login;
