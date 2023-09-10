import React from 'react'
import Chats from './Chats'
import ProfileBar from '../../components/ProfileBar'
import ChatArea from '../../components/ChatArea'

const Dashboard = () => {
    return (
        <>
            <Chats />
            <ChatArea />
            <ProfileBar />
        </>
    )
}

export default Dashboard
