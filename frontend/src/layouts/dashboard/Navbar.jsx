import React from 'react'
import Profile from './Profile'
import { useNavigate } from "react-router-dom";

const getPath = (index) => {
    switch (index) {
        case 0:
            return "/app";

        case 1:
            return "/chats";

        case 2:
            return "/group";

        case 3:
            return "/call";

        case 4:
            return "/notifications";

        case 5:
            return "/settings";

        default:
            break;
    }
};


const Navbar = () => {
    const navigate = useNavigate();

    const handleChangeTab = (index) => {
        navigate(getPath(index));
    };

    return (
        <nav class='bg-white sticky z-20 bottom-0 lg:relative flex lg:flex-col items-center justify-between p-3 lg:p-4 lg:py-12 lg:order-first border-x'>
            <a href='#' class='w-8 hb-8 text-white hidden lg:block'><img src='https://images.unsplash.com/photo-1551150441-3f3828204ef0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' width="42" height="42"></img></a>
            <div class='flex grow lg:justify-between lg:flex-col lg:my-12 lg:px-3 lg:pb-12 lg:border-b-2 lg:border-slate-800 lg:border-opacity-10'>
                <ul class='flex lg:flex-col items-center justify-between lg:justify-start gap-6 text-white/50 w-2/3 lg:w-auto'>
                    <li class='lg:block'><button onClick={() => {
                        handleChangeTab(0)
                    }} class='block'>
                        <i class="ph ph-house text-2xl text-slate-600"></i>
                    </button></li>
                    <li class='lg:block'><button onClick={() => {
                        handleChangeTab(1)
                    }} class='block'>
                        <i class="ph ph-chat-circle-dots text-2xl text-slate-600"></i>
                    </button></li>
                    <li class='lg:block'><button onClick={() => {
                        handleChangeTab(2)
                    }} class='block'>
                        <i class="ph ph-users text-2xl text-slate-600"></i>
                    </button></li>
                    <li class='lg:block'><button onClick={() => {
                        handleChangeTab(3)
                    }} class='block'>
                        <i class="ph ph-phone-call text-2xl text-slate-600"></i>
                    </button></li>
                </ul>
                <ul class='flex lg:flex-col items-center justify-end gap-6 text-white/50 w-1/3 lg:w-auto'>
                    <li class='lg:block'><button onClick={() => {
                        handleChangeTab(4)
                    }} class='block'>
                        <i class="ph ph-bell text-2xl text-slate-600"></i>
                    </button></li>
                    <li class='lg:block'><button onClick={() => {
                        handleChangeTab(5)
                    }} class='block'>
                        <i class="ph ph-gear-six text-2xl text-slate-600"></i>
                    </button></li>
                </ul>
            </div>
            <a href='#' class='w-10 h-10 rounded-lg hidden lg:block'>
                <Profile />
            </a>
        </nav>
    )
}

export default Navbar