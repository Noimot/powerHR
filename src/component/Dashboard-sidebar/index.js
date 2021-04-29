import React from 'react'
import img from './b.jpg'
import './index.css'


const AdminSidebar = () => {
    return (
        <section className='admin-sidebar'>
            <div className='staff-img'>
                <img src={img} alt='admin' style={{ width: '100px', height:'100px'}} />
                <p>Welcome, <br /> admin name</p>
            </div>
            <div>
                <select value='Dashboard'>
                    <option value='Dashboard'>Dashboard</option>
                    <option value='General announcement'>General announcements</option>
                    <option value='Tasks'>Tasks</option>
                    <option value='Memos'>Memos</option>
                    <option value='Paid Leave'>Paid Leave</option>
                </select>
            </div>


            <div>
                <select value='Profile'>
                    <option value='Profile'>Profile</option>
                </select>
            </div>


            <p>Employees list</p>

            <p>Sign out</p>

        </section>
    )
}

export default AdminSidebar;