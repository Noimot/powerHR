import React, { useState, useEffect } from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import img from './../Dashboard-sidebar/b.jpg'
import LeaveModal from './leaveModal'
import pendingLeaveAction from '../../redux/action/pendingLeave'
import { useDispatch, useSelector } from 'react-redux'
import spinner from './spinner.gif'
import { NoPendingLeaveRequest } from './noPendingRequest'


const AdminLeaveContent = () => {

    const dispatch = useDispatch()
    const pendingLeaveStore = useSelector(({ pendingLeaveReducer }) => pendingLeaveReducer)
    console.log(pendingLeaveStore)

    useEffect(() => {
        dispatch(pendingLeaveAction())
    }, [dispatch])

    const [open, setOpen] = useState(false)

    const [storeValue, setStoreValue] = useState({})

    const modalHandler = (state) => {
        setOpen(state)
    }

    const getPendingLeaveStatus = pendingLeaveStore.leave.filter((leavePending) => leavePending.leave_status === 'pending');
    console.log(getPendingLeaveStatus)

    const Pending = () => {
        return (
            <div>
                {pendingLeaveStore.loading && <div className=''><img src={spinner} alt='spinner' />&nbsp;&nbsp;Loading.....</div>}
                {getPendingLeaveStatus
                    .map((leaveRequest) =>
                        <div key={leaveRequest.id} className='leave-status-info' onClick={() => {
                            setStoreValue(leaveRequest)
                            modalHandler(true)
                        }}>
                            <div className='leave-info'>
                                <img src={img} alt='admin' />
                                <div className='leave-date'>
                                    <p style={{ color: '#3D3D3D' }}>{leaveRequest.name}</p> <br />
                                    <p style={{ color: '#2C4770' }}><span style={{ color: '#3D3D3D' }}>Date: </span>{leaveRequest.start_date.split('T')[0]} - {leaveRequest.end_date.split('T')[0]}</p>
                                </div>
                            </div>
                            <div>
                                <p style={{ color: '#5E5E5E' }}>{leaveRequest.department} Department</p><br />
                                <p style={{ color: '#D4293D'}}>Deny &nbsp; &nbsp;<span style={{ color: '#246C60' }}>Approve</span></p>
                            </div>
                        </div>

                    )}

            </div>
        )
    }


    const Approved = () => {
        return (
            <div>
                {pendingLeaveStore.loading && <div className=''><img src={spinner} alt='spinner' />&nbsp;&nbsp;Loading.....</div>}
                {pendingLeaveStore.leave.filter((leavePending) => leavePending.leave_status !== 'pending' && leavePending.leave_status !== 'deny')
                    .map((leaveRequest) =>
                        <div key={leaveRequest.id} className='leave-status-info'>
                            <div className='leave-info'>
                                <img src={img} alt='admin' />
                                <div className='leave-date'>
                                    <p style={{ color: '#3D3D3D' }}>{leaveRequest.name}</p> <br />
                                    <p style={{ color: '#2C4770' }}><span style={{ color: '#3D3D3D' }}>Date: </span>{leaveRequest.start_date.split('T')[0]} - {leaveRequest.end_date.split('T')[0]}</p>
                                </div>
                            </div>
                            <div>
                                <p style={{ color: '#5E5E5E' }}>{leaveRequest.department} Department</p><br />
                                <p><span style={{ color: '#246C60' }}>Approved</span></p>
                            </div>
                        </div>)}
            </div>
        )
    }


    const Denied = () => {
        return (
            <div>
                {pendingLeaveStore.loading && <div className=''><img src={spinner} alt='spinner' />&nbsp;&nbsp;Loading.....</div>}
                {pendingLeaveStore.leave.filter((leavePending) => leavePending.leave_status === 'deny')
                    .map((leaveRequest) =>
                        <div key={leaveRequest.id} className='leave-status-info'>
                            <div className='leave-info'>
                                <img src={img} alt='admin' />
                                <div className='leave-date'>
                                    <p style={{ color: '#3D3D3D' }}>{leaveRequest.name}</p> <br />
                                    <p style={{ color: '#2C4770' }}><span style={{ color: '#3D3D3D' }}>Date: </span>{leaveRequest.start_date.split('T')[0]} - {leaveRequest.end_date.split('T')[0]}</p>
                                </div>
                            </div>
                            <div>
                                <p style={{ color: '#5E5E5E' }}>{leaveRequest.department} Department</p><br />
                                <p style={{ color: '#D4293D', marginLeft: 'auto' }}>Denied</p>
                            </div>
                        </div>)}
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
            <div className='leave-container'>

                <div className='leave-request'>
                    <p style={{ color: '#2C4770' }}>Pending requests</p>
                    <Link to='#'><p>Read our paid leave policy</p></Link>
                </div>

                <section className='leave-status-container' >
                    <div className='leave-status' style={{ cursor: 'pointer' }}>
                        <p className={tab === 0 ? 'border-bottom' : null} onClick={() => setTab(0)}>Pending</p>
                        <p className={tab === 1 ? 'border-bottom' : null} onClick={() => setTab(1)}>Approved</p>
                        <p className={tab === 2 ? 'border-bottom' : null} onClick={() => setTab(2)}>Denied</p>
                    </div>

                    {handleSwitch()}
                </section>

                {getPendingLeaveStatus.length === 0 ? <NoPendingLeaveRequest /> : null}

            </div>
            <LeaveModal leave={storeValue} open={open} modalHandler={modalHandler} />
        </section >

    )
}

export default AdminLeaveContent;