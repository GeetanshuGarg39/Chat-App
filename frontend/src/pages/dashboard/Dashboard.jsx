import React from 'react'
import Chats from './Chats'
import Navbar from '../../layouts/dashboard/Navbar'
import ProfileBar from '../../components/ProfileBar'

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <Chats />
            <ProfileBar/>
        </>
    )
}

export default Dashboard
