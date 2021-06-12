import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import leaveStatusAction from '../../redux/action/leaveStatusAction'

const LeaveForm = ({ leave, modalHandler }) => {

    const [leaveStatus, setLeaveStatus] = useState('')


    const dispatch = useDispatch();
    const leaveStatusStore = (({ leaveStatusReducer }) => leaveStatusReducer)
    

    const handleClick = (e) => {
        console.log(leaveStatus, leave.id, e.target.innerText)
        if (leaveStatus !== '') {
           dispatch(leaveStatusAction({
                id: leave.id,
                reason_for_app_deny_leave: leaveStatus,
                leave_status: e.target.innerText.toLowerCase()
            }))
        }
            modalHandler(false)
    }


    return (
        <section className='memo-container'>
            <div className='memo-modal-container'>
                <div className='memo-header'>
                    <p>Request</p>
                    <p style={{ cursor: 'pointer' }} onClick={() => modalHandler(false)}>x</p>
                </div>
                <section className='leave-status-modal'>
                    <div>FROM: <span>{leave.name}</span></div>
                    <div>FROM: <span>{leave.start_date.split('T')[0]}</span></div>
                    <div>TO: <span>{leave.end_date.split('T')[0]}</span></div>
                    <div>
                        <label>REASON</label>
                        <p>{leave.reason}</p>
                    </div>
                    <hr />
                    <div>
                        <label>REASON FOR APPROVING / DENYING REQUEST</label>
                        <input type='text' name='text' value={leaveStatus} onChange={(e) => setLeaveStatus(e.target.value)} />
                    </div>
                    <div style={{cursor: 'pointer'}}><p onClick={(e) => handleClick(e)}>DENY</p><p onClick={(e) => handleClick(e)}>APPROVE</p></div>

                </section>
            </div>
        </section>

    )
}

export default LeaveForm;