import React from 'react'
import Chats from './Chats'
import ProfileBar from '../../components/ProfileBar'
import ChatArea from '../../components/ChatArea'
import { useSelector } from 'react-redux'
import SharedMessages from '../../components/SharedMessages'

const Dashboard = () => {
    const { profilebar } = useSelector((store) => store.app);

    return (
        <>
            <Chats />
            <ChatArea />

            {
                profilebar.open && (() => {
                    switch (profilebar.type) {
                        case "CONTACT":
                            return <ProfileBar />

                        case "SHARED":
                            return <SharedMessages />

                        default:
                            break;
                    }
                })()
            }
        </>
    )
}

export default Dashboard
