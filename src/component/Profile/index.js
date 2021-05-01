import React from 'react'
import { DashboardLayout } from '../../layout/DashboardLayout'
import PersonalDetailsComponent from '../PersonalDetailsComponent'
import ContactDetailsComponent from '../ContactDetailsComponent'
import JobStatusComponent from '../JobStatusComponent'
import { SalaryComponent } from '../Salary'

const Profile = () => {
    return (
        <DashboardLayout>
            <PersonalDetailsComponent />
            <ContactDetailsComponent />
            <JobStatusComponent />
            <SalaryComponent />
        </DashboardLayout>

    )
}

export default Profile;