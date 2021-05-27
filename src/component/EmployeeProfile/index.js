import React from 'react'
import { DashboardLayout } from '../../layout/DashboardLayout'
import PersonalDetailsComponent from '../PersonalDetailsComponent'
import ContactDetailsComponent from '../ContactDetailsComponent'
import JobStatusComponent from '../JobStatusComponent'
import { SalaryComponent } from '../Salary'
import { Avatar } from '@material-ui/core'


const EmployeeProfile = () => {
    return (
        <DashboardLayout>
            <div className='profile-container'>
                <Avatar src='https://picsum.photos/200/300.jpg'>

                </Avatar>
            </div>
            <PersonalDetailsComponent />
            <ContactDetailsComponent />
            <JobStatusComponent />
            <SalaryComponent />
        </DashboardLayout>

    )
}

export default EmployeeProfile;