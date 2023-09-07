import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <form class="h-[550px] min-w-[400px] lg:w-1/3 m-10 md:m-14 bg-white rounded-2xl drop-shadow-2xl flex flex-col  p-10 md:p-14 font-normal justify-center">
            <h1 class="pb-2 text-[20px] font-semibold">
                Welcome to ChatApp! 👋
            </h1>
            <div class="flex">
                <div class="mr-6 text-[15px]">
                    <h1 class="pb-2">Please sign in to your account and start the adventure</h1>
                </div>
            </div>

            <div class="h-20mr-6 relative pt-4">
                <h1 class="pb-2 font-medium text-slate-600">Email</h1>
                <input type="text"
                    class="shadow-inner p-2 text-slate-500 border-gray-300 border rounded-md w-full focus:outline-none focus:border-gray-400"
                    placeholder="Enter your email"
                />
            </div>

            <div class="h-20 w-full mr-6 relative pt-4">
                <h1 class="pb-2 flex items-center justify-between font-medium text-slate-600">Password</h1>
                <div class="relative">
                    <input type="password"
                        class="shadow-inner text-slate-500 p-2 pr-10 border-gray-300 border rounded-md w-full focus:outline-none focus:border-gray-400"
                        placeholder="Enter your password"
                    />
                </div>
            </div>

            <div class="flex items-center pt-5">
                <input type="checkbox" id="remember_me"
                    class="h-5 w-5 text-indigo-500 border-gray-300 rounded focus:ring-indigo-500" />
                <label for="remember_me" class="ml-2 text-gray-600">Remember Me</label>
            </div>
            <button class="bg-indigo-500 hover:bg-indigo-700 mt-8 rounded-md text-white px-5 py-2">
                Login
            </button>
            <p class="mx-auto mt-2 text-slate-600">
                New on our platform?<Link to="/auth/register" class="text-indigo-500 hover:text-indigo-900 ml-1">
                    Create an account</Link>
            </p>
        </form>
    )
}

export default Login;