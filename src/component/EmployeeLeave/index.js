import React, { useState, useEffect } from 'react'
import Button from '../Button'
import { Link } from 'react-router-dom'
import img from './../Dashboard-sidebar/b.jpg'
import { DashboardLayout } from '../../layout/DashboardLayout';
import LeaveRequestModal from './leaveRequestModal'
import employeeLeaveStatusAction from '../../redux/action/employeeLeaveStatusAction'
import { useDispatch, useSelector } from 'react-redux'
import spinner from './spinner.gif'
import { NoPendingLeaveRequest } from './noPendingRequest'




const EmployeeLeaveContent = () => {

    const [open, setOpen] = useState(false)

    const modalHandler = (state) => {
        setOpen(state)
    }

    const dispatch = useDispatch()
    const employeeLeaveStore = useSelector(({ employeeLeaveStatusReducer }) => employeeLeaveStatusReducer)
    console.log(employeeLeaveStore)

    useEffect(() => {
        dispatch(employeeLeaveStatusAction())
    }, [dispatch])


    const getPendingLeaveStatus = employeeLeaveStore.employeeLeaveStatus.filter((leavePending) => leavePending.leave_status === 'pending');
    console.log(getPendingLeaveStatus)



    const Pending = () => {
        return (
            <div>
                {employeeLeaveStore.loading && <div className=''><img src={spinner} alt='spinner' />&nbsp;&nbsp;Loading.....</div>}
                {getPendingLeaveStatus
                    .map((leaveRequest) =>
                        <div key={leaveRequest.id} className='leave-status-info' onClick={() => modalHandler(true)}>
                            <div className='leave-info'>
                                <img src={img} alt='admin' />
                                <div className='leave-date'>
                                    <p style={{ color: '#3D3D3D' }}>{leaveRequest.name}</p> <br />
                                    <p style={{ color: '#2C4770' }}><span style={{ color: '#3D3D3D' }}>Date:</span>{leaveRequest.start_date} - {leaveRequest.end_date}</p>
                                </div>
                            </div>
                            <div>
                                <p style={{ color: '#5E5E5E' }}>{leaveRequest.department} Department</p><br />
                                <p style={{ color: '#D4293D', marginLeft: '8rem' }}>Deny &nbsp; &nbsp;<span style={{ color: '#246C60' }}>Approve</span></p>
                            </div>
                        </div>
                    )}
            </div>
        )
    }

    const totalApprovedLeave = employeeLeaveStore.employeeLeaveStatus.filter((leavePending) => leavePending.leave_status === 'approve');
    const totalDeniedLeave = employeeLeaveStore.employeeLeaveStatus.filter((leavePending) => leavePending.leave_status === 'deny');

    const approveLeave = totalApprovedLeave.length;
    const denyLeave = totalDeniedLeave.length;

    const deniedDays = 21 - approveLeave;
    const approvedDays = 21 - deniedDays;


    const Approved = () => {
        return (
            <div>
                {employeeLeaveStore.loading && <div className=''><img src={spinner} alt='spinner' />&nbsp;&nbsp;Loading.....</div>}
                {employeeLeaveStore.employeeLeaveStatus.filter((leavePending) => leavePending.leave_status === 'approve')
                    .map((leaveRequest) =>
                        <div key={leaveRequest.id} className='leave-status-info'>
                            <div className='leave-info'>
                                <img src={img} alt='admin' />
                                <div className='leave-date'>
                                    <p style={{ color: '#3D3D3D' }}>{leaveRequest.name}</p> <br />
                                    <p style={{ color: '#2C4770' }}><span style={{ color: '#3D3D3D' }}>Date:</span>{leaveRequest.start_date} - {leaveRequest.end_date}</p>
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
                {employeeLeaveStore.employeeLeaveStatus.filter((leavePending) => leavePending.leave_status === 'deny')
                    .map((leaveRequest) =>
                        <div key={leaveRequest.id} className='leave-status-info'>
                            <div className='leave-info'>
                                <img src={img} alt='admin' />
                                <div className='leave-date'>
                                    <p style={{ color: '#3D3D3D' }}>{leaveRequest.name}</p> <br />
                                    <p style={{ color: '#2C4770' }}><span style={{ color: '#3D3D3D' }}>Date:</span>{leaveRequest.start_date} - {leaveRequest.end_date}</p>
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
                <div className='leave-days'>
                    <div>
                        <p>Number of off days allowed</p>
                        <h3 style={{ color: '#152D54' }}>21 days</h3>
                    </div>
                    <div>
                        <p>Off days taken</p>
                        <h3 style={{ color: '#D4293D' }}>{approvedDays} days</h3>
                    </div>
                    <div>
                        <p>Off days remaining</p>
                        <h3 style={{ color: '#246C60' }}>{deniedDays} days</h3>
                    </div>
                </div>

                <Button buttonClick='REQUEST FOR DAYS OFF' cssClass='secondary-button' onClick={() => modalHandler(true)} />

                <div className='leave-request'>
                    <p style={{ color: '#2C4770' }}>Pending requests</p>
                    <Link to='#'><p>Read our paid leave policy</p></Link>
                </div>

                <section className='leave-status-container'>
                    <div className='leave-status' style={{ cursor: 'pointer' }}>
                        <p className={tab === 0 ? 'border-bottom' : null} onClick={() => setTab(0)}>Pending</p>
                        <p className={tab === 1 ? 'border-bottom' : null} onClick={() => setTab(1)}>Approved</p>
                        <p className={tab === 2 ? 'border-bottom' : null} onClick={() => setTab(2)}>Denied</p>
                    </div>

                    {handleSwitch()}
                </section>

                {/* {pendingLeaveStore.loading && <div className=''><img src={spinner} alt='spinner' />&nbsp;&nbsp;Loading.....</div>} */}
                {getPendingLeaveStatus.length === 0 ? <NoPendingLeaveRequest /> : null}

            </div>

            <LeaveRequestModal open={open} modalHandler={modalHandler} />
        </section >

    )
}



const EmployeeLeave = () => {
    return (
        <DashboardLayout>
            <EmployeeLeaveContent />
        </DashboardLayout>
    )
}

export default EmployeeLeave;















