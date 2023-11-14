import React from 'react'

const truncateText = (string, n) => {
    return string?.length > n ? `${string?.slice(0, n)}...` : string;
};

const ChatBox = ({ avatar, firstName,lastName, msg, time, unread, online, id }) => {

    return (
        <>
            <div className="flex py-3 px-3 mb-3 border-b border-gray-100 hover:bg-blue-100 hover:-mx-4 hover:px-6 transition-all cursor-pointer bg-white rounded-2xl ">
                {online ? (
                    <div className="relative w-12 h-12 shrink-0 before:absolute before:w-3 before:h-3 before:rounded-full before:bottom-0 before:right-0 before:bg-green-500 before:border-2 before:border-white">
                        <img className="w-full h-full rounded-full overflow-hidden object-cover" width="48" height="48" src={avatar} alt="Avatar" />
                    </div>
                ) : (
                    <div className="relative w-12 h-12 shrink-0">
                        <img className="w-full h-full rounded-full overflow-hidden object-cover" width="48" height="48" src={avatar} alt="Avatar" />
                    </div>
                )}
                <div className="grow pl-4">
                    <div className="flex items-center justify-between">
                        <span className="text-lg font-bold">{firstName} {lastName}</span>
                        <span className="text-xs text-gray-400 font-medium shrink-0">{time}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <span>{truncateText(msg, 20)}</span>
                        <div className="relative flex items-center justify-center w-4 h-4 shrink-0 text-blue-500">
                            {unread ? (<i className="ph ph-checks"></i>) : (<i></i>)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatBox
