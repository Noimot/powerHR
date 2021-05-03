import React from 'react'
import Button from '../Button'
import './index.css'


const AddEmployeeForm = () => {
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
                        <input type='text' name='employee_id' value='' id='employee_id' placeholder='0250' />
                    </div>
                    <div className='add-employee-form'>
                        <label htmlFor='employee_id'>ENTER NEW WORK EMAIL</label>
                        <input type='text' name='employee_id' value='' id='employee_id' placeholder='naima@gmail.com' />
                    </div>
                    <div className='add-employee-form'>
                        <label htmlFor='employee_id'>EMPLOYEES POWER HR ACCOUNT EMAIL</label>
                        <input type='text' name='employee_id' value='' id='employee_id' placeholder='Noimot@powerhr.com' />
                    </div>
                   <div className='button-div'><Button cssClass='secondary-button' buttonClick='ADD NEW EMPLOYEE' /></div> 


                </form>
            </div>

        </section>
    )
}

export default AddEmployeeForm;