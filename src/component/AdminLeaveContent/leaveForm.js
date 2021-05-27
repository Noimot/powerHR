import React, { useState } from 'react'

const LeaveForm = ({ modalHandler }) => {

    const [leaveStatus, setLeaveStatus] = useState('')

    return (
        <section className='memo-container'>
            <div className='memo-modal-container'>
                <div className='memo-header'>
                    <p>Request</p>
                    <p style={{ cursor: 'pointer' }} onClick={() => modalHandler(false)}>x</p>
                </div>
                <section className='leave-status-modal'>
                    <div>FROM: <span></span></div>
                    <div>FROM: <span></span></div>
                    <div>TO: <span></span></div>
                    <div>
                        <label>REASON</label>
                        <p>i would like to go on maternity leave</p>
                    </div>
                    <hr />
                    <div>
                        <label>REASON FOR APPROVING / DENYING REQUEST</label>
                        <input type='text' name='text' value={leaveStatus} onChange={(e) => setLeaveStatus(e.target.value)} />
                    </div>
                    <div><p>DENY</p><p>APPROVE</p></div>

                </section>
            </div>
        </section>

    )
}

export default LeaveForm;