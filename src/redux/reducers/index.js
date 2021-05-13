import { combineReducers } from 'redux'
import loginReducer from './adminLogin'
import AddEmployeeReducer from './add_new_employee'


export default combineReducers({
    loginReducer,
    AddEmployeeReducer,
})