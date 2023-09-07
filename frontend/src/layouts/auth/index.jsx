import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
    return (
        <>
            <div class="flex items-center font-roboto">
                <div class="block w-full h-screen lg:w-2/3 bg-violet-100"></div>
                <div class="hidden lg:block h-screen w-1/3 bg-violet-200 "></div>
                <div class="z-10 absolute flex w-full h-screen flex-col lg:flex-row items-center justify-around">
                    <div class='flex flex-col justify-between h-screen p-10 md:p-24'>
                        <div class="text-4xl md:text-5xl lg:text-6xl text-indigo-900">
                            <h1 class="mb-4 font-medium">Transforming Group</h1>
                            <h1 class="mb-4 font-extrabold">Communication Into</h1>
                            <h1 class="mb-4 font-medium">Collaborative Experience</h1>
                        </div>
                        <div class=" mt-5 lg:mt-0 text-3xl md:text-5xl text-indigo-900">
                            👋ChatApp
                        </div>
                    </div>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default AuthLayout
