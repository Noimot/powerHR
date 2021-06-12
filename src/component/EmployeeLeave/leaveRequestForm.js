import React, { useState } from 'react'
import Button from '../Button'
import './index.css'
import { useDispatch, useSelector } from 'react-redux'
import leaveRequestAction from '../../redux/action/leaveAction'


const LeaveRequestForm = ({ modalHandler }) => {

    const dispatch = useDispatch();
    const leaveRequestStore = useSelector(({ leaveRequestReducer }) => leaveRequestReducer)
    console.log(leaveRequestStore)

    const [employeeData, setEmployeeData] = useState({
        // employeeName: '',
        date_from: '',
        date_to: '',
        reason: ''
    })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setEmployeeData({ ...employeeData, [name]: value })
    }

    const handleClick = (e) => {
        // console.log(employeeData.date_to, employeeData.date_from)
        e.preventDefault()
        if (employeeData.reason.toLowerCase().trim() !== '') {
            dispatch(leaveRequestAction({
                // name: employeeData.employeeName,
                start_date: employeeData.date_from,
                end_date: employeeData.date_to,
                reason: employeeData.reason
            }))
        }
        if (leaveRequestStore.loginSuccess) {
            modalHandler(false)
        }
    

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
                        {/* <label htmlFor='name'>NAME</label> */}
                        {/* <input type='text' id='name' name='employeeName' value={employeeData.employeeName} onChange={handleChange} /> */}
                    </section>
                    <section className='leave-request'>
                        <div className='leave-request-input'>
                            <label htmlFor='date_from'>FROM</label>
                            <input type='date' id='date_from' name='date_from' value={employeeData.date_from} onChange={handleChange} />
                        </div>
                        <div className='leave-request-input'>
                            <label htmlFor='date_to'>TO</label>
                            <input type='date' id='date_to' name='date_to' value={employeeData.date_to} onChange={handleChange} />
                        </div>
                    </section>
                    <section className='leave-request-input'>
                        <label htmlFor='reason'>REASON (OPTIONAL) </label>
                        <input type='text' id='reason' name='reason' value={employeeData.reason} onChange={handleChange} />
                    </section>
                    <section style={{ margin: '1rem 0 -1rem 2rem' }}>
                        <Button buttonClick='REQUEST FOR DAYS OFF' cssClass='secondary-button' onClick={handleClick} />
                    </section>
                    {/* {leaveRequestStore.loginError && <p style={{color: 'red', fontSize: '0.8rem'}}>Employee name is incorrect</p>} */}

                </form>


            </div>
        </section>
    )
}

export default LeaveRequestForm;

