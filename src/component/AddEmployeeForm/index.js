import React, { useState } from 'react'
import Button from '../Button'
import './index.css'
import addEmployeeApi from '../../redux/api/employee'


const AddEmployeeForm = ({ modalHandler }) => {

    const [employeeData, setEmployeeData] = useState({
        employee_name: '',
        // employee_id: '',
        personal_email: '',
        company_email: ''
    })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setEmployeeData({ ...employeeData, [name]: value })
    }

    const handleClick = async(e) => {
        e.preventDefault();
        console.log(employeeData.employee_name, employeeData.personal_email, employeeData.company_email)
        // dispatch(AddNewEmployee({
        //     employee_name:employeeData.employee_name,
        //     personal_email:employeeData.personal_email,
        //     company_email:employeeData.company_email
        // }))

        const response = await addEmployeeApi({
            employee_name: employeeData.employee_name,
            personal_email: employeeData.personal_email,
            company_email: employeeData.company_email
        })
        console.log(response)
        if (response.data.statusCode === 201) {
            modalHandler(false)
        }
        
    }

    return (
        <section className='add-employee-container'>
            <div className='add-employee-modal'>

                <div>
                    <div>Add New Employee</div>
                    <div className='remove-employee-modal' onClick={() => modalHandler(false)}>x</div>
                </div>
                <form>
                    <div className='add-employee-form'>
                        <label htmlFor='employee_name'>EMPLOYEE'S NAME</label>
                        <input type='text' name='employee_name' value={employeeData.employee_name} id='employee_name' placeholder='Samantha Adeleke' onChange={handleChange} />
                    </div>
                    {/* <div className='add-employee-form'>
                        <label htmlFor='employee_id'>ENTER NEW ID NUMBER</label>
                        <input type='text' name='employee_id' value={employeeData.employee_id} id='employee_id' placeholder='0250' onChange={handleChange} />
                    </div> */}
                    <div className='add-employee-form'>
                        <label htmlFor='personal_email'>PERSONAL EMAIL</label>
                        <input type='text' name='personal_email' value={employeeData.personal_email} id='personal_email' placeholder='naima@gmail.com' onChange={handleChange} />
                    </div>
                    <div className='add-employee-form'>
                        <label htmlFor='company_email'>EMPLOYEES POWER HR ACCOUNT EMAIL</label>
                        <input type='text' name='company_email' value={employeeData.company_email} id='company_email' placeholder='Noimot@powerhr.com' onChange={handleChange} />
                    </div>
                    <div className='button-div'><Button cssClass='secondary-button' buttonClick='ADD NEW EMPLOYEE' onClick={handleClick} /></div>


                </form>
            </div>

        </section>
    )
}

export default AddEmployeeForm;