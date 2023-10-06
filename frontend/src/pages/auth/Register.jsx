import React from "react";
import { Link } from "react-router-dom";
import RegisterForm from "../../sections/auth/RegisterForm";

const Register = () => {
  return (
    <div className="h-[550px] min-w-[400px] w-[500px] bg-white rounded-2xl  flex flex-col p-10 md:p-12 font-normal  justify-center">
      <h1 className="text-4xl mb-4 ">Sign Up</h1>

      <h1 className="mb-6 text-base">
        Transforming Group Communication Into Collaborative Experience
      </h1>

      <RegisterForm />

      <p className="mx-auto mt-2 text-slate-600">
        Already have an account?
        <Link to="/auth/login" className="text-blue-500 hover:text-blue-800 ml-1">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
