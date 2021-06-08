import React from 'react'
import DashboardContent from '../Dashboard-right-sidebar'
import { DashboardLayout } from './../../layout/DashboardLayout'
// import jwt from 'jwt-decode'




export const AdminDashboard = () => {

    // const token = localStorage.getItem('x-access-token')
    // const user = jwt(token)
    // console.log(user)
    // console.log(user.role)


    // useEffect(() => {
    //     if (user.role === 'admin') {
    //         window.location.assign('/admindashboard')
    //     }
    //     else if (user.role === 'employee') {
    //         window.location.assign('/employeedashboard')
    //     }
    // })

    return (
       <DashboardLayout>
            <DashboardContent />
       </DashboardLayout>
 
               
          
    )
}

