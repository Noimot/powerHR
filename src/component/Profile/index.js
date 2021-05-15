import React from 'react'
import { DashboardLayout } from '../../layout/DashboardLayout'
import PersonalDetailsComponent from '../PersonalDetailsComponent'
import ContactDetailsComponent from '../ContactDetailsComponent'
import JobStatusComponent from '../JobStatusComponent'
import { SalaryComponent } from '../Salary'
import './index.css'

const Profile = () => {
    return (
        <DashboardLayout className='profile-container'>
            <PersonalDetailsComponent />
            <ContactDetailsComponent />
            <JobStatusComponent />
            <SalaryComponent />
        </DashboardLayout>

    )
}

export default Profile;