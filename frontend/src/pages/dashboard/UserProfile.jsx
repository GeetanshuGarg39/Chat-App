import React from 'react'
import ProfileForm from '../../sections/settings/ProfileForm'

const UserProfile = () => {
    return (
        <>
            <div className='relative h-screen w-full lg:w-[320px] bg-slate-100 drop-shadow-[0_0px_0px_rgba(0,0,0,0.25)] flex flex-col lg:flex-row'>
                <div className="grow lg:shrink-0 scrollbar-hide overflow-y-auto lg:max-w-xs">
                    <div class="flex flex-col p-6 space-y-8">
                        <div class="flex text-2xl items-center gap-3">
                            <i class="ph ph-caret-left"></i>
                            <h1 class=" font-medium text-xl ">Profile</h1>
                        </div>

                        <div class="flex gap-3  items-center justify-center">
                            <div class="w-28 h-28 rounded-full overflow-hidden ">
                                <img
                                    width="100"
                                    height="100"
                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                                    class="h-full w-full object-cover"
                                    alt=""
                                />
                            </div>                            
                        </div>   

                        <ProfileForm/>                     
                    </div>
                </div>
            </div>

        </>
    )
}

export default UserProfile
