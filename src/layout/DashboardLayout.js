import React from 'react'
import AdminSidebar from './../component/Dashboard-sidebar'
import Navbar from './../component/Navbar'
import './index.css'



// const navTitle = () => {
//     const path = window.location.pathname;
//     switch (path) {
//         case '/admindashbord':
//             return `
//             <div>
//                 <div>title='GENERAL ANNOUNCEMENTS'<div> 
//                 <div>addTitle={<AddNewAnnouncement />}<div> 
//             </div>
//             `
//         case '/admintask':
//             return `
//                 <div>
//                 <div>title='task'<div> 
//                 <div>addTitle='add task'<div> 
//             </div>
//                 `
//         default:
//             break;

//     }
// }



const AddNewAnnouncement = () => {
    return (
        <div style={{ color: '#D9D9D9' }}>
            <span>+  </span>
            New announcement
        </div>
    )
}

export const DashboardLayout = (props) => {
    console.log(window.location.pathname)
    return (
        <div className='admin-display-flex'>
            <AdminSidebar />
            <div className='admin-content'>
                <Navbar  title={'GENERAL ANNOUNCEMENTS'} addTitle={<AddNewAnnouncement />} />
                {props.children}
            </div>
        </div>
    )
}

//title={'GENERAL ANNOUNCEMENTS'} addTitle={<AddNewAnnouncement />}