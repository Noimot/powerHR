import React from 'react'
import { DashboardLayout } from '../../layout/DashboardLayout'
import JobStatusComponent from '../JobStatusComponent'

const JobStatus = () => {
    return (
        <DashboardLayout>
            <JobStatusComponent />
        </DashboardLayout>
    )
}

export default JobStatus;