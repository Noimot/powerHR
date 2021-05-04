import React, { useState } from 'react'
import './index.css'
import img from './../Dashboard-sidebar/b.jpg'
import EmployeeModal from './employee_modal'

const ListOfEmployees = () => {

    const [open, setOpen ]  = useState(false);

    const modalHandler = (state) => {
        setOpen(state)
    }

    const [searchInput, setSearchInput] = useState({
        department: '',
        location: '',
        search: ''
    })


    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setSearchInput({ ...searchInput, [name]: value })
    }

    return (
        <section className='employee-list-container'>
            <div className='employee-location'>

                <form>
                    <p>FILTERED BY:</p>
                    <div className='input-flex'>
                        <label htmlFor='department'>Department</label>
                        <input type='text' name='department' id='department' value={searchInput.department} onChange={handleChange} />
                    </div>
                    <div className='input-flex'>
                        <label htmlFor='location'>Location</label>
                        <input type='text' name='location' id='location' value={searchInput.location} onChange={handleChange} />
                    </div>

                </form>
                <p>Total numbers of Employees: 20</p>
            </div>
            <hr />

            <div className='add-employee'>
                <p style={{ color: '#246C60' }} onClick={() => modalHandler(true)}><span style={{ cursor: 'pointer' }} > + </span>add new Employee</p>
                <div>
                    <input type='text' name='search' value={searchInput.search} onChange={handleChange} placeholder='Search name' />
                    <span></span>
                </div>
            </div>

            <hr />

            <ul className='employee-info-list'>
                <li></li>
                <li>Name</li>
                <li>ID #</li>
                <li>Department</li>
                <li>Location</li>
                <li>Phone</li>
                <li>Email</li>
            </ul>
            
            <ul className='employee-info-list'>      
                <li className='img-employee-list'><img src={img} alt='employee' /></li>
                <li>Samantha Adeleke</li>
                <li>0025</li>
                <li>Account</li>
                <li>Abuja(HQ)</li>
                <li>08084371579</li>
                <li>samantha@company.com</li>
            </ul>

        <EmployeeModal open={open} modalHandler={modalHandler} />
        </section>
    )
}

export default ListOfEmployees;



