import React, { useState } from 'react'
import AdminSidebar from './../component/Dashboard-sidebar'
import Navbar from './../component/Navbar'
import './index.css'
import AnnouncementModal from '../component/GeneralAnnouncement/announcement_modal'
import TaskModal from '../component/AdminTaskContent/taskModal'
import MemoModal from '../component/AdminMemoContent/memoModal'
import AdminSidebarr from '../component/Dashboard-sidebar/adminSidebar'
import EmployeeSidebar from '../component/Dashboard-sidebar/employeeSidebar'



//AdminSidebarr and EmployeeSidebar are components inside DashboardSidebar, the switch is to change the dashboard route
const dashboard = () => {
    const dashboardRoute = window.location.pathname;
    switch (dashboardRoute) {
        case '/admindashboard':
            return <AdminSidebarr />
        case '/employeedashboard':
            return <EmployeeSidebar />
        case '/employeetasklist':
            return <EmployeeSidebar />
        case '/employeememo':
            return <EmployeeSidebar />
        case '/employeeleave':
            return <EmployeeSidebar />
        case '/employeeprofile':
            return <EmployeeSidebar />
        default:
            return <AdminSidebarr />;
    }
}


// the switch condition here is to change what the content of the navbar
const navTitle = () => {
    const path = window.location.pathname;
    switch (path) {
        case '/admindashboard':
            return <AddNewAnnouncement />
        case '/admintask':
            return <AddNewTask />
        case '/adminmemo':
            return <AddNewMemo />
        case '/adminleave':
            return <AddNewLeave />
        case '/profile':
            return <Profile />
        case '/employeelist':
            return <EmployeesList />
        case '/employeedashboard':
            return <EmployeeAllAnnouncement />
        case '/employeetasklist':
            return <EmployeeTaskNav />
        case '/employeememo':
            return <EmployeeMemoNav />
        case '/employeeleave':
            return <AddNewLeave />
        case '/employeeprofile':
            return <Profile />
        default:
            break;

    }
}


//Admin navbar content
const AddNewAnnouncement = () => {
    const [open, setOpen] = useState(false)

    const modalHandler = (state) => {
        setOpen(state)
    }
    return (
        <div className='admin-navbar'>
            <p>GENERAL ANNOUNCEMENTS</p>
            <div style={{ color: '#D9D9D9', cursor: 'pointer' }} onClick={() => modalHandler(true)}>
                <span>+  </span>
            New announcement
            </div>

            <AnnouncementModal open={open} modalHandler={modalHandler} />

        </div>
    )
}

const AddNewTask = () => {

    const [open, setOpen] = useState(false)

    const modalHandler = (state) => {
        setOpen(state)
    }
    return (

        <div className='admin-navbar' >
            <p>TASKS</p>
            <div style={{ color: '#D9D9D9', cursor: 'pointer' }} onClick={() => modalHandler(true)}>
                <span>+  </span>
            Assign new task
            </div>
            <TaskModal open={open} modalHandler={modalHandler} />
        </div>
    )
}

const AddNewMemo = () => {

    const [open, setOpen] = useState(false);

    const modalHandler = (state) => {
        setOpen(state)
    }

    return (
        <div className='admin-navbar'>
            <p>MEMOS</p>
            <div style={{ color: '#D9D9D9', cursor: 'pointer' }} onClick={() => modalHandler(true)}>
                <span>+  </span>
            create new memo
            </div>

            <MemoModal open={open} modalHandler={modalHandler} />

        </div>
    )
}

const AddNewLeave = () => {
    return (
        <div className='admin-navbar'>
            <p>PAID LEAVE</p>
        </div>
    )
}

const Profile = () => {
    return (
        <div className='admin-navbar'>
            <p>PROFILE</p>
        </div>
    )
}

const EmployeesList = () => {
    return (
        <div className='admin-navbar'>
            <p>EMPLOYEES LIST</p>
        </div>
    )
}


//Employee Navbar content

const EmployeeAllAnnouncement = () => {

    return (
        <div className='admin-navbar'>
            <p>GENERAL ANNOUNCEMENTS</p>
        </div>
    )
}

const EmployeeTaskNav = () => {
    return (
        <div className='admin-navbar' >
            <p>TASKS</p>
        </div>
    )
}

const EmployeeMemoNav = () => {
    return (
        <div className='admin-navbar'>
            <p>MEMOS</p>
        </div>
    )
}



//powerHR page layout
export const DashboardLayout = (props) => {



    console.log(window.location.pathname)
    return (
        <div className='admin-display-flex'>
            <div className='side-wrapper'>
                <AdminSidebar dashboardContent={dashboard()} />
            </div>
            <div className='admin-content'>
                <Navbar content={navTitle()} />
                <div className="layout-children">
                    {props.children}
                </div>
            </div>

        </div>
    )
}

