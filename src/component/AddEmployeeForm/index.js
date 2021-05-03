import React, {useState} from 'react'
import Button from '../Button'
import './index.css'


const AddEmployeeForm = () => {

    const [ employeeData, setEmployeeData ] = useState({
        employee_id: '',
        personal_email: '',
        office_email: ''
    })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setEmployeeData({...employeeData, [name]: value})
    }

    return (
        <section className='add-employee-container'>
            <div className='add-employee-modal'>

                <div>
                    <div>Add New Employee</div>
                    <div className='remove-employee-modal'>x</div>
                </div>
                <form>
                    <div className='add-employee-form'>
                        <label htmlFor='employee_id'>ENTER NEW ID NUMBER</label>
                        <input type='text' name='employee_id' value={employeeData.employee_id} id='employee_id' placeholder='0250' onChange={handleChange} />
                    </div>
                    <div className='add-employee-form'>
                        <label htmlFor='employee_id'>ENTER NEW WORK EMAIL</label>
                        <input type='text' name='personal_email' value={employeeData.personal_email} id='employee_id' placeholder='naima@gmail.com' onChange={handleChange} />
                    </div>
                    <div className='add-employee-form'>
                        <label htmlFor='employee_id'>EMPLOYEES POWER HR ACCOUNT EMAIL</label>
                        <input type='text' name='office_email' value={employeeData.office_email} id='employee_id' placeholder='Noimot@powerhr.com'  onChange={handleChange}/>
                    </div>
                   <div className='button-div'><Button cssClass='secondary-button' buttonClick='ADD NEW EMPLOYEE' /></div> 


                </form>
            </div>

        </section>
    )
}

export default AddEmployeeForm;