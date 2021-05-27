import React from 'react'
import DashboardContent from '../Dashboard-right-sidebar'
import { DashboardLayout } from './../../layout/DashboardLayout'
// import { Redirect } from "react-router-dom";



// function RequireAuth({ AdminDashboard }) {
//   if (!localStorage.getItem("x-access-token")) {
//     return <Redirect to="/" />;
//   }
//   return <AdminDashboard />;
// }
// export default RequireAuth;

export const AdminDashboard = () => {
    return (
       <DashboardLayout>
            <DashboardContent />
       </DashboardLayout>
 
               
          
    )
}

