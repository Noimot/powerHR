import { combineReducers } from 'redux'
import loginReducer from './adminLogin'
import allEmployeeReducer from './employee'
import announcementReducer from './annoucement'
import adminReducer from './adminName'
import taskReducer from './allTask'
import memoReducer from './memoReducer'


export default combineReducers({
    loginReducer,
    allEmployeeReducer,
    announcement: announcementReducer,
    adminReducer,
    taskReducer,
    memoReducer
})