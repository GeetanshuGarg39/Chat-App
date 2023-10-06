import React from 'react'
import Image from "../../assets/home_bg.png";

const Home = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full font-raleway'>
            <h1 className="mb-4 text-4xl ">Welcome Back :)</h1>
            <p className='italic'>Chat is not just words. It's a connection.</p>
            <img src={Image} alt="" class="h-[300px] "/>            
        </div>
    )
}

export default Home
