import React from 'react'
import { DashboardLayout } from '../../layout/DashboardLayout'
import Checkbox from '@material-ui/core/Checkbox';


export const SalaryComponent = () => {
    return (
        <section className='admin-data-container' id='salary'>
            <p>SALARY</p>
            <div className='admin-data'>
                <div className='flex-display'>
                    <div>
                        <label>Job role</label>
                        <input type='text' name='job role' value='' placeholder='Researcher' />
                    </div>
                    <div>
                        <label>Department</label>
                        <input type='text' name='department' value='' placeholder='Research' />
                    </div>
                    <Checkbox
//   value="checkedA"
//   inputProps={{ 'aria-label': 'Checkbox A' }}
/>
                    
                </div>
            </div>
        </section>

    )
}


export const Salary = () => {
    return (
        <DashboardLayout>
            <SalaryComponent />
        </DashboardLayout>
    )

}