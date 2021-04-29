import React from 'react'
import AdminSidebar from './../component/Dashboard-sidebar'
import Navbar from './../component/Navbar'
import '../component/Admin-dashboard/index.css'


const AddNewAnnouncement = () => {
    return (
        <div style={{ color: '#D9D9D9'}}>
            <span>+  </span> 
            New announcement
        </div>
    )
}


export const DashboardLayout = (props) => {
    return (
        <div className='admin-display-flex'>
            <AdminSidebar />
            <div className='admin-content'>
                <Navbar title={'GENERAL ANNOUNCEMENTS'} addTitle={<AddNewAnnouncement />} />
               {props.children}
            </div>
        </div>
    )
}

