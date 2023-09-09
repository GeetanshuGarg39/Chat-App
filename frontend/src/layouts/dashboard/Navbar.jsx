import React from 'react'

const Navbar = () => {
    return (
        <nav class='bg-white relative flex lg:flex-col items-center justify-between p-3 lg:p-4 lg:py-12 lg:order-first'>
            <a href='#' class='w-8 hb-8 text-white hidden lg:block'><img src='https://images.unsplash.com/photo-1551150441-3f3828204ef0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' width="42" height="42"></img></a>
            <div class='flex grow lg:justify-between lg:flex-col lg:my-12 lg:px-3 lg:pb-12 lg:border-b-2 lg:border-slate-800 lg:border-opacity-10'>
                <ul class='flex lg:flex-col items-center justify-between lg:justify-start gap-6 text-white/50 w-2/3 lg:w-auto'>
                    <li class='hidden lg:block'><a href='#' class='block'>
                        <i class="ph ph-house text-2xl text-slate-600"></i>
                    </a></li>
                    <li class='hidden lg:block'><a href='#' class='block'>
                        <i class="ph ph-chat-circle-dots text-2xl text-slate-600"></i>
                    </a></li>
                    <li class='hidden lg:block'><a href='#' class='block'>
                        <i class="ph ph-users text-2xl text-slate-600"></i>
                    </a></li>
                    <li class='hidden lg:block'><a href='#' class='block'>
                        <i class="ph ph-phone-call text-2xl text-slate-600"></i>
                    </a></li>
                </ul>
                <ul class='flex lg:flex-col items-center justify-end gap-6 text-white/50 w-1/3 lg:w-auto'>
                    <li class='hidden lg:block'><a href='#' class='block'>
                        <i class="ph ph-bell text-2xl text-slate-600"></i>
                    </a></li>
                    <li class='hidden lg:block'><a href='#' class='block'>
                        <i class="ph ph-gear-six text-2xl text-slate-600"></i>
                    </a></li>
                </ul>
            </div>
            <a href='#' class='w-10 h-10 rounded-lg overflow-hidden text-white hidden lg:block z-10'>
                <img src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' width="32" height="32"></img>                
            </a>
        </nav>
    )
}

export default Navbar