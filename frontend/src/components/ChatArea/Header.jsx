import React from 'react'

const Header = () => {
    return (
        <div class="flex items-center h-24 p-6">
            <div class="w-12 h-12 shrink-0">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="User" width="64" height="64" class="w-full h-full rounded-full overflow-hidden object-cover" />
            </div>
            <div class="flex flex-col ml-4">
                <span class="flex flex-col">Username</span>
                <span class="text-xs text-gray-400">Online</span>
            </div>
            <div class="flex items-center space-x-6 ml-auto text-gray-400">
                <button className="w=5 h-5" type="button">
                    <i class="ph ph-video-camera text-2xl"></i>
                </button>
                <button className="w=5 h-5" type="button">
                    <i class="ph ph-phone text-2xl"></i>
                </button>
            </div>
        </div>
    )
}

export default Header
