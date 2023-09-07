import React from "react";

const Login = () => {
    return (
        <header class="flex items-center">
            <div class="h-[100vh] w-2/3 bg-violet-100"></div>
            <div class="h-[100vh] w-1/3 bg-violet-200"></div>
            <form class="z-10 absolute right-28 w-1/3 bg-white rounded-2xl drop-shadow-2xl flex flex-col p-12 font-medium">
                <h1 class="pb-6 text-[20px] font-semibold">
                    Welcome to 👋ChatApp
                </h1>
                <div class="flex">
                    <div class="h-20 w-[22 mr-6">
                        <h1 class="pb-2">Please sign in to your account and start the adventure</h1>
                    </div>
                </div>
                <div class="flex pt-4">
                    <div class="h-20 w-full mr-6 relative">
                        <h1 class="pb-2">Email or Username</h1>
                        <input type="text"
                            class="shadow-inner p-2 border-gray-300 border rounded-md w-full focus:outline-none focus:border-gray-400" />
                    </div>
                </div>
                <div class="flex pt-4">
                    <div class="h-20 w-full mr-6 relative">
                        <h1 class="pb-2 flex items-center justify-between">Password</h1>
                        <div class="relative">
                            <input type="password"
                                class="shadow-inner p-2 pr-10 border-gray-300 border rounded-md w-full focus:outline-none focus:border-gray-400" />
                        </div>
                    </div>
                </div>
                <div class="flex items-center pt-2">
                    <input type="checkbox" id="remember_me"
                        class="h-5 w-5 text-indigo-500 border-gray-300 rounded focus:ring-indigo-500" />
                    <label for="remember_me" class="ml-2 text-gray-600">Remember Me</label>
                </div>
                <button class="bg-indigo-500 hover:bg-indigo-700 mt-8 rounded-md text-white px-5 py-2">
                    Login
                </button>
                <p class="mx-auto mt-2">
                    New on our platform?<a href="" class="text-indigo-500 hover:text-indigo-900 ml-1">
                        Create an account</a>
                </p>
            </form>
            <div class="z-10 absolute left-20 top-28 text-5xl text-indigo-900">
                <h1 class="mb-4 font-bold">Transforming Group</h1>
                <h1 class="mb-4 font-extrabold">Communication Into</h1>
                <h1 class="mb-4 font-bold">Collaborative Experience</h1>
            </div>
            <div class="z-10 absolute left-20 bottom-36 text-5xl text-indigo-900">
                👋ChatApp
            </div>
        </header>
    )
}

export default Login;