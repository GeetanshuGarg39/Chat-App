import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
    return (
        <div className='flex flex-col lg:flex-row'>
            <Navbar/>
            <Outlet />
        </div>
    )
}

export default DashboardLayout
