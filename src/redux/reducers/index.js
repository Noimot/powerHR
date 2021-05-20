import { combineReducers } from 'redux'
import loginReducer from './adminLogin'
import AddEmployeeReducer from './add_new_employee'
import announcementReducer from './annoucement'
import adminReducer from './adminName'
import taskReducer from './allTask'
import memoReducer from './memoReducer'


export default combineReducers({
    loginReducer,
    AddEmployeeReducer,
    announcement: announcementReducer,
    adminReducer,
    taskReducer,
    memoReducer
})