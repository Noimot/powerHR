import React, { useState } from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import img from './../Dashboard-sidebar/b.jpg'
import LeaveModal from './leaveModal'


const AdminLeaveContent = () => {

    const [open, setOpen] = useState(false)

    const modalHandler = (state) => {
        setOpen(state)
    }


    const Pending = () => {
        return (
            <div className='leave-status-info'>
                <div className='leave-info'>
                    <img src={img} alt='admin' />
                    <div className='leave-date'>
                        <p style={{ color: '#3D3D3D' }}>Samantha Adeleke</p> <br />
                        <p style={{ color: '#2C4770' }}><span style={{ color: '#3D3D3D' }}>Date:</span>12 June 2021 - 22 June 2021</p>
                    </div>
                </div>
                <div>
                    <p style={{ color: '#5E5E5E' }}>Researcher, Research Department</p><br />
                    <p style={{ color: '#D4293D', marginLeft: '8rem' }}>Deny &nbsp; &nbsp;<span style={{ color: '#246C60' }}>Approve</span></p>
                </div>
            </div>
        )
    }


    const Approved = () => {
        return (
            <div className='leave-status-info'>
                <div className='leave-info'>
                    <img src={img} alt='admin' />
                    <div className='leave-date'>
                        <p style={{ color: '#3D3D3D' }}>Samantha Adeleke</p> <br />
                        <p style={{ color: '#2C4770' }}><span style={{ color: '#3D3D3D' }}>Date:</span>12 June 2021 - 22 June 2021</p>
                    </div>
                </div>
                <div>
                    <p style={{ color: '#5E5E5E' }}>Researcher, Research Department</p><br />
                    <p><span style={{ color: '#246C60' }}>Approved</span></p>
                </div>
            </div>
        )
    }


    const Denied = () => {
        return (
            <div className='leave-status-info'>
                <div className='leave-info'>
                    <img src={img} alt='admin' />
                    <div className='leave-date'>
                        <p style={{ color: '#3D3D3D' }}>Samantha Adeleke</p> <br />
                        <p style={{ color: '#2C4770' }}><span style={{ color: '#3D3D3D' }}>Date:</span>12 June 2021 - 22 June 2021</p>
                    </div>
                </div>
                <div>
                    <p style={{ color: '#5E5E5E' }}>Researcher, Research Department</p><br />
                    <p style={{ color: '#D4293D', marginLeft: 'auto' }}>Denied</p>
                </div>
            </div>
        )
    }

    const [tab, setTab] = useState(0)

    const handleSwitch = () => {
        switch (tab) {
            case 0:
                return <Pending />
            case 1:
                return <Approved />
            case 2:
                return <Denied />
            default:
                return <Pending />
        }
    }



    return (
        <section className='leave-content'>
            <div className='leave-container'  onClick={() => modalHandler(true)}>

                <div className='leave-request'>
                    <p style={{ color: '#2C4770' }}>Pending requests</p>
                    <Link to='#'><p>Read our paid leave policy</p></Link>
                </div>

                <section className='leave-status-container' >
                    <div className='leave-status' style={{ cursor: 'pointer' }}>
                        <p onClick={() => setTab(0)}>Pending</p>
                        <p onClick={() => setTab(1)}>Approved</p>
                        <p onClick={() => setTab(2)}>Denied</p>
                    </div>

                    {handleSwitch()}
                </section>


            </div>
            <LeaveModal open={open} modalHandler={modalHandler}/>
        </section >

    )
}

export default AdminLeaveContent;