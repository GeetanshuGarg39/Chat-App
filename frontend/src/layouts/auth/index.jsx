import React from "react";
import { Outlet } from "react-router-dom";
import Image from "../../assets/home-img.avif";

const AuthLayout = () => {
  return (
    <>
      <div className=" text-3xl md:text-3xl mt-4 ml-8 ">👋ChatApp</div>
      <div className=" flex w-full h-auto  flex-col lg:flex-row items-center lg:justify-around font-raleway bg-white ">
        <div className="w-[100%] lg:w-[50%] flex flex-col ">
          <img src={Image}></img>
        </div>
        <div className=" lg:my-10 flex flex-col items-center">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
