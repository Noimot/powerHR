import React, {useState} from 'react'
import AdminSidebar from './../component/Dashboard-sidebar'
import Navbar from './../component/Navbar'
import './index.css'
import  AnnouncementModal  from '../component/GeneralAnnouncement/announcement_modal'
import TaskModal from '../component/AdminTaskContent/taskModal'
import MemoModal from '../component/AdminMemoContent/memoModal'



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
        default:
            break;

    }
}



const AddNewAnnouncement = () => {
    const [open, setOpen] = useState(false)
    
    const modalHandler = (state) => {
        setOpen(state)
    }
    return (
        <div className='admin-navbar'>
            <p>GENERAL ANNOUNCEMENT</p>
            <div style={{ color: '#D9D9D9', cursor: 'pointer' }}>
                <span onClick={() => modalHandler(true)}>+  </span>
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
            <div style={{ color: '#D9D9D9', cursor: 'pointer' }}>
                <span onClick={() => modalHandler(true) }>+  </span>
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
            <div style={{ color: '#D9D9D9', cursor: 'pointer' }}>
                <span onClick={() => setOpen(true)}>+  </span>
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

export const DashboardLayout = (props) => {

       
    
    console.log(window.location.pathname)
    return (
        <div className='admin-display-flex'>
            <div className='side-wrapper'>
            <AdminSidebar />
            </div>
            <div className='admin-content'>
                <Navbar content={navTitle()} />
                {props.children}
            </div>

        </div>
    )
}

