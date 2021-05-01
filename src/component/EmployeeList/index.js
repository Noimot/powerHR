import React from 'react'
import { DashboardLayout } from '../../layout/DashboardLayout'
import ListOfEmployees from './../ListOfEmployees'


const EmployeeList = () => {
    return (
        <DashboardLayout>
            <ListOfEmployees />
        </DashboardLayout>
        
    )
}

export default EmployeeList;