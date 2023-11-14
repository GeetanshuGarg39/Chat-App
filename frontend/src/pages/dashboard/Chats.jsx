import React, { useEffect, useState } from 'react'
import ChatBox from '../../components/ChatBox';
import axiosInst from '../../utils/axios';
import { useSelector } from 'react-redux';


const Chats = () => {
    const { token } = useSelector((state) => state.auth);

    const [chats,setChats] = useState([]);
   
    useEffect(() => {
        const getAllChats = async () => {
            const res = await axiosInst.get("/chats/users",{headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }})
            console.log(chats);
            setChats(res.data);
        }
        getAllChats();
    },[chats])

    return (
        <div className="grow lg:shrink-0 scrollbar-hide overflow-y-auto lg:max-w-xs bg-slate-100 drop-shadow-[0_0px_0px_rgba(0,0,0,0.25)]">
            <div className="flex flex-col gap-3 p-6 bg-slate-100 md:bg-slate-100 sticky top-0 z-10 border-b">
                <div className="flex items-center justify-between">
                    <h1 className="font-medium text-xl">Chats</h1>
                    <div className="flex items-center gap-3 text-gray-400">
                        <a className="block w-5 h-5" href="#" aria-label='Notification'><i className="ph ph-notification w-full h-full"></i></a>
                        <a className="block w-5 h-5" href="#" aria-label='Chat settings'><i className="ph ph-sliders w-full h-full"></i></a>
                    </div>
                </div>
                <div className="relative w-full">
                    <label>
                        <input type="text" className="focus:outline-none focus:border-gray-400 w-full py-2 px-3 pr-6 border border-gray-400 rounded-full" placeholder='Search...' />
                    </label>
                </div>
            </div>
            <div className="p-6">
                <p className="flex items-center mb-2 text-gray-400">
                    <i class="ph ph-push-pin-simple"></i>
                    <span className='uppercase text-sm font-medium ml-3'>Pinned</span>
                </p>
                <div>
                    {chats.filter((person) => person.pinned).map((person, i) => {
                        return <ChatBox key={i} {...person} />
                    })}
                </div>
            </div>
            <div className="p-6">
                <p className="flex items-center mb-2 text-gray-400">
                    <i className="ph ph-chat-circle"></i>
                    <span className="uppercase text-sm font-medium ml-3">All Chats</span>
                </p>
                <div>
                    {chats.filter((person) => !person.pinned).map((person, i) => {
                        return <ChatBox key={i} {...person} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Chats
