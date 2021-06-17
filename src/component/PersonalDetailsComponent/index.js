import React, { useState } from 'react'
import './index.css'
import editline from './editline.svg'
import { useSelector } from 'react-redux'
import { employeeUpdateApi } from '../../redux/api/employee'

const PersonalDetailsComponent = () => {


    const employeeuseridStore = useSelector(({ employeeUseridReducer }) => employeeUseridReducer)
    console.log(employeeuseridStore.employee)

    const [pdetails, setPdetails] = useState({
        fname: employeeuseridStore.employee[0]?.first_name,
        mname: employeeuseridStore.employee[0]?.middle_name,
        lname: employeeuseridStore.employee[0]?.last_name,
        dob: employeeuseridStore.employee[0]?.date_of_birth,
        nationality: employeeuseridStore.employee[0]?.nationality,
        religion: employeeuseridStore.employee[0]?.religion,
        mstatus: employeeuseridStore.employee[0]?.marital_status,
        bnumber: employeeuseridStore.employee[0]?.bank_account_number,
        bname: employeeuseridStore.employee[0]?.name_of_bank,
        aname: employeeuseridStore.employee[0]?.account_name
    })

    const [state, setState] = useState(true)

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPdetails({ ...pdetails, [name]: value })
    }

    const handleClick = () => {
        setState(!state)
    }

    const apiHandleClick = async () => {
        const response = await employeeUpdateApi({
            userid: employeeuseridStore.employee[0]?.userid,
            first_name: pdetails.fname,
            middle_name: pdetails.mname,
            last_name: pdetails.lname,
            date_of_birth: pdetails.dob,
            nationality: pdetails.nationality,
            religion: pdetails.religion,
            marital_status: pdetails.mstatus,
            bank_account_number:pdetails.bnumber,
            name_of_bank: pdetails.bname,
            account_name: pdetails.aname
        })
        if (response.status === 200){
window.location.reload();
        }
    }


    return (
        <section className='admin-data-container' id='personal-details'>
            <div className='personal-details-div'>
                <p>PERSONAL DETAILS</p>
                {state && <span onClick={handleClick} style={{ cursor: 'pointer' }}><img src={editline} alt='edit pen' /> Edit</span>}
                {!state && <div style={{ cursor: 'pointer' }}> <span style={{ color: '#D4293D', marginRight: '1rem' }} onClick={handleClick}> cancel</span> <span style={{ color: '#246C60' }} onClick={apiHandleClick}>save</span></div>}
            </div>

            <div className='admin-data'>
                <div className='flex-display'>
                    <div className={state ? 'set-input-value' : null}>
                        <label htmlFor='fname'>First name</label>
                        <input type='text' id='fname' name='fname' value={pdetails.fname} onChange={handleChange} readOnly={state} />
                    </div>
                    <div className={state ? 'set-input-value' : null}>
                        <label htmlFor='mname'>Middle name</label>
                        <input type='text' id='mname' name='mname' value={pdetails.mname} onChange={handleChange} readOnly={state} />
                    </div>
                    <div className={state ? 'set-input-value' : null}>
                        <label htmlFor='lname'>Last name</label>
                        <input type='text' id='lname' name='lname' value={pdetails.lname} onChange={handleChange} readOnly={state} />
                    </div>

                </div>

                <div className='flex-display'>
                    <div className={state ? 'set-input-value' : null}>
                        <label htmlFor='dob'>Date of birth</label>
                        <input type='text' id='dob' name='dob' value={pdetails.dob} onChange={handleChange} readOnly={state} />
                    </div>
                    <div className={state ? 'set-input-value' : null}>
                        <label htmlFor='nationality'>Nationality</label>
                        <input type='text' id='nationality' name='nationality' value={pdetails.nationality} onChange={handleChange} readOnly={state} />
                    </div>
                    <div className={state ? 'set-input-value' : null}>
                        <label htmlFor='religion'>Religion</label>
                        <input type='text' id='religion' name='religion' value={pdetails.religion} onChange={handleChange} readOnly={state} />
                    </div>
                    <div className={state ? 'set-input-value' : null}>
                        <label htmlFor='mstatus'>Marital Status</label>
                        <input type='text' id='mstatus' name='mstatus' value={pdetails.mstatus} onChange='' readOnly={state} />
                    </div>

                </div>

                <div className='flex-display'>
                    <div className={state ? 'set-input-value' : null}>
                        <label htmlFor='bnumber'>Bank account number</label>
                        <input type='text' id='bnumber' name='bnumber' value={pdetails.bnumber} onChange={handleChange} readOnly={state} />
                    </div>
                    <div className={state ? 'set-input-value' : null}>
                        <label htmlFor='bname'>Name of bank</label>
                        <input type='text' id='bname' name='bname' value={pdetails.bname} onChange={handleChange} readOnly={state} />
                    </div>
                    <div className={state ? 'set-input-value' : null}>
                        <label htmlFor='aname'>Account name</label>
                        <input type='text' id='aname' name='aname' value={pdetails.aname} onChange={handleChange} readOnly={state} />
                    </div>

                </div>

            </div>
        </section>


    )
}

export default PersonalDetailsComponent;