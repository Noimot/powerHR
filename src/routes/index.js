import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AddEmployeeForm from '../component/AddEmployeeForm'
import { AdminDashboard } from '../component/Admin-dashboard'
import AdminLeave from '../component/AdminLeave'
import AdminMemo from '../component/AdminMemo'
import AdminTask from '../component/AdminTask'
import ContactDetails from '../component/ContactDetails'
import EmployeeList from '../component/EmployeeList'
import JobStatus from '../component/JobStatus'
import Login from '../component/Login'
import PersonalDetails from '../component/PersonalDetails'
import Profile from '../component/Profile'
import { Salary } from '../component/Salary'
import PageNotFound from '../component/PageNotFound'
import EmployeeDashboard from '../component/EmployeeDashboard'
import EmployeeTaskList from '../component/EmployeeTaskList'
import EmployeeMemo from '../component/EmployeeMemo'
import EmployeeLeave from '../component/EmployeeLeave'
import EmployeeProfile from '../component/EmployeeProfile'
import AuthenticatedRoute from './RequiredAuth.js'
import { userToken } from '../redux/api/config';
import jwt from 'jwt-decode'




 const isAuthenticated = () => {
    const token = userToken(); 
    return !!token;
  };

  const restrictedRoute = () => {
    const token = userToken(); 
    const getToken = jwt(token)
    console.log(getToken)
    return  getToken.role === 'admin' 

    
  }

const Routes = () => (
    <Switch>
        <Route exact path='/employeeprofile' component={EmployeeProfile} />
        <Route exact path='/employeeleave' component={EmployeeLeave} />
        <Route exact path='/employeememo' component={EmployeeMemo} />
        <Route exact path='/employeetasklist' component={EmployeeTaskList} />
        <AuthenticatedRoute exact path='/employeedashboard' component={EmployeeDashboard} authRoute={isAuthenticated()} />
        <Route exact path='/addemployee' component={AddEmployeeForm} />
        <Route exact path='/salary' component={Salary} />
        <Route exact path='/jobstatus' component={JobStatus} />
        <Route exact path='/contactdetails' component={ContactDetails} />
        <Route exact path='/personaldetails' component={PersonalDetails} />
        <Route exact path='/profile/:userid' component={Profile} />
        <Route exact path='/employeelist' component={EmployeeList} />
        <Route exact path='/adminleave' component={AdminLeave} />
        <Route exact path='/adminmemo' component={AdminMemo} />
        <Route exact path='/admintask' component={AdminTask} />
        <AuthenticatedRoute exact path='/admindashboard' component={AdminDashboard} authRoute={isAuthenticated() && restrictedRoute()} />
        <Route exact path='/' component={Login} />
        <Route exact path='*' component={PageNotFound} />
    </Switch>
)

export default Routes;