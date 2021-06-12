import { combineReducers } from 'redux'
import loginReducer from './adminLogin'
import allEmployeeReducer from './employee'
import announcementReducer from './annoucement'
import adminReducer from './adminName'
import taskReducer from './allTask'
import memoReducer from './memoReducer'
import updateTaskStatusReducer from './updateTask'
import leaveRequestReducer from './leaveRequestReducer'
import pendingLeaveReducer from './pendingLeave'
import leaveStatusReducer from './leaveStatusReducer'
import employeeLeaveStatusReducer from './employeeLeaveStatus'


export default combineReducers({
    loginReducer,
    allEmployeeReducer,
    announcement: announcementReducer,
    adminReducer,
    taskReducer,
    memoReducer,
    updateTaskStatusReducer,
    leaveRequestReducer,
    pendingLeaveReducer,
    leaveStatusReducer,
    employeeLeaveStatusReducer,
})