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

const Routes = () => (
    <Switch>
        <Route exact path='/addemployee' component={AddEmployeeForm} />
        <Route exact path='/salary' component={Salary} />
        <Route exact path='/jobstatus' component={JobStatus} />
        <Route exact path='/contactdetails' component={ContactDetails} />
        <Route exact path='/personaldetails' component={PersonalDetails} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/employeelist' component={EmployeeList} />
        <Route exact path='/adminleave' component={AdminLeave} />
        <Route exact path='/adminmemo' component={AdminMemo} />
        <Route exact path='/admintask' component={AdminTask} />
        <Route exact path='/admindashboard' component={AdminDashboard} />
        <Route exact path='/' component={Login} />
    </Switch>
)

export default Routes;