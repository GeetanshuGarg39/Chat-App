import React from 'react'
import Navbar from './Navbar'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const DashboardLayout = () => {
    const { isLoggedIn } = useSelector((state) => state.auth);

    if(!isLoggedIn) {
        return <Navigate to="/auth/login" />
    }

    return (
        <>
            <div className='flex flex-col lg:flex-row h-screen'>
                <Outlet />
                <Navbar />
            </div>
        </>
    )
}

export default DashboardLayout
