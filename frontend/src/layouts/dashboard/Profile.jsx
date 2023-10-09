import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setOpenMenu(!openMenu);
    };

    const handleClose = () => {
        setOpenMenu(false);
    };

    const logoutUser = () => {
    };

    return (
        <>
            <div className='relative h-fit w-fit'>
                <img className=''
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                    onClick={handleClick}
                />

                {openMenu && (
                    <div className="z-10 absolute left-10 bottom-10 mt-2 w-48 rounded-lg shadow-lg bg-slate-50 ring-1 ring-black ring-opacity-5">
                        <div className="py-1">
                            <ul role="menu" aria-orientation="vertical" aria-labelledby="profile-positioned-button">
                                <li onClick={()=>{navigate("/profile")}}>
                                    <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">Profile</p>
                                </li>
                                <li onClick={()=>{navigate("/settings")}}>
                                    <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">Settings</p>
                                </li>
                                <li>
                                    <button onClick={() => { navigate("/auth/login"); logoutUser(); }} className="block w-full px-4 py-2 text-sm text-gray-700 text-left hover:bg-blue-100">
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                )}

            </div>
        </>
    )
}

export default Profile
