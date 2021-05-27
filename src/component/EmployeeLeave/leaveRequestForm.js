import React, { useState } from 'react'
import Button from '../Button'
import './index.css'
import Calender from './calender'


const LeaveRequestForm = ({ modalHandler }) => {

    const [employeeData, setEmployeeData] = useState({
        employeeName: '',
        reason: ''
    })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setEmployeeData({...employeeData, [name]:value})
    }
    return (
        <section className='memo-container'>
            <div className='request-form-container'>
                <div className='memo-header'>
                    <p>Paid Leave Request</p>
                    <p style={{ cursor: 'pointer' }} onClick={() => modalHandler(false)}>x</p>
                </div>

                <form>
                    <section className='leave-request-input'>
                        <label htmlFor='name'>NAME</label>
                        <input type='text' id='name' name='employeeName' value={employeeData.employeeName} onChange={handleChange} />
                    </section>
                    <section className='leave-request'>
                        <div className='leave-request-input'><span>FROM</span><Calender /></div>
                        <div className='leave-request-input'><span>TO</span><Calender /></div>
                    </section>
                    <section className='leave-request-input'>
                        <label htmlFor='reason'>REASON (OPTIONAL) </label>
                        <input type='text' id='reason' name='reason' value={employeeData.reason} onChange={handleChange} />
                    </section>
                    <section style={{ margin: '1rem 0 -3rem 2rem' }}>
                        <Button buttonClick='REQUEST FOR DAYS OFF' cssClass='secondary-button' onClick='{handleClick}' />
                    </section>

                </form>


            </div>
        </section>
    )
}

export default LeaveRequestForm;

