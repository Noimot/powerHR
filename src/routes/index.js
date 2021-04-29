import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { AdminDashboard } from '../component/Admin-dashboard'
import AdminLeave from '../component/AdminLeave'
import AdminMemo from '../component/AdminMemo'
import AdminTask from '../component/AdminTask'
import Login from '../component/Login'

const Routes = () => (
    <Switch>
        <Route exact path='/adminleave' component={AdminLeave} />
        <Route exact path='/adminmemo' component={AdminMemo} />
        <Route exact path='/admintask' component={AdminTask} />
        <Route exact path='/admindashboard' component={AdminDashboard} />
        <Route exact path='/' component={Login} />
    </Switch>
)

export default Routes;